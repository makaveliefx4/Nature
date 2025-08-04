import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, MapPin, Clock, Check, Phone, Star, CreditCard, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [bookingData, setBookingData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    
    // Trip Details
    tourType: "",
    startDate: "",
    endDate: "",
    groupSize: "",
    accommodation: "",
    
    // Special Requirements
    dietaryRequirements: "",
    medicalConditions: "",
    specialRequests: "",
    
    // Emergency Contact
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    
    // Agreement
    termsAccepted: false,
    marketingConsent: false
  });

  const tourOptions = [
    { value: "serengeti-classic", label: "Classic Serengeti Safari - 7 Days", price: "$2,450" },
    { value: "kilimanjaro-combo", label: "Kilimanjaro & Safari Combo - 12 Days", price: "$4,200" },
    { value: "luxury-explorer", label: "Luxury Tanzania Explorer - 10 Days", price: "$6,850" },
    { value: "safari-zanzibar", label: "Safari & Zanzibar Paradise - 9 Days", price: "$3,200" },
    { value: "budget-camping", label: "Budget Camping Safari - 5 Days", price: "$950" },
    { value: "photography-safari", label: "Photography Safari - 8 Days", price: "$3,800" }
  ];

  const accommodationOptions = [
    { value: "luxury", label: "Luxury Lodges", extra: "+$200/night" },
    { value: "mid-range", label: "Mid-range Lodges", extra: "Included" },
    { value: "camping", label: "Camping/Tented", extra: "-$50/night" }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Success feedback
    toast({
      title: "🎉 Booking Confirmed!",
      description: "Your Tanzania safari has been successfully booked. Check your email for confirmation details.",
    });

    // Show success message and redirect
    setTimeout(() => {
      navigate("/booking-confirmation", { 
        state: { 
          bookingData,
          bookingId: `TZ${Date.now()}`,
          estimatedPrice: getEstimatedPrice()
        }
      });
    }, 1500);
    
    setIsSubmitting(false);
  };

  const getEstimatedPrice = () => {
    const selectedTour = tourOptions.find(tour => tour.value === bookingData.tourType);
    const basePrice = selectedTour ? parseInt(selectedTour.price.replace(/[$,]/g, '')) : 0;
    const groupSize = parseInt(bookingData.groupSize) || 1;
    
    let accommodationMultiplier = 1;
    if (bookingData.accommodation === "luxury") accommodationMultiplier = 1.3;
    if (bookingData.accommodation === "camping") accommodationMultiplier = 0.8;
    
    return Math.round(basePrice * groupSize * accommodationMultiplier);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return bookingData.firstName && bookingData.lastName && bookingData.email && bookingData.phone;
      case 2:
        return bookingData.tourType && bookingData.startDate && bookingData.groupSize;
      case 3:
        return bookingData.emergencyName && bookingData.emergencyPhone;
      case 4:
        return bookingData.termsAccepted;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
              <p className="text-muted-foreground">Let's start with your basic details</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={bookingData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="John"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={bookingData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={bookingData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={bookingData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="United States"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Trip Details</h2>
              <p className="text-muted-foreground">Choose your perfect Tanzania adventure</p>
            </div>

            <div className="space-y-2">
              <Label>Select Tour Package *</Label>
              <Select onValueChange={(value) => handleInputChange("tourType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your safari adventure" />
                </SelectTrigger>
                <SelectContent>
                  {tourOptions.map((tour) => (
                    <SelectItem key={tour.value} value={tour.value}>
                      <div className="flex justify-between items-center w-full">
                        <span>{tour.label}</span>
                        <Badge variant="secondary" className="ml-2">{tour.price}</Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={bookingData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={bookingData.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Group Size *</Label>
                <Select onValueChange={(value) => handleInputChange("groupSize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of travelers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5">5 People</SelectItem>
                    <SelectItem value="6">6 People</SelectItem>
                    <SelectItem value="7">7 People</SelectItem>
                    <SelectItem value="8">8+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Accommodation Preference</Label>
                <Select onValueChange={(value) => handleInputChange("accommodation", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose accommodation" />
                  </SelectTrigger>
                  <SelectContent>
                    {accommodationOptions.map((acc) => (
                      <SelectItem key={acc.value} value={acc.value}>
                        <div className="flex justify-between items-center w-full">
                          <span>{acc.label}</span>
                          <Badge variant="outline" className="ml-2">{acc.extra}</Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                <Input
                  id="dietaryRequirements"
                  value={bookingData.dietaryRequirements}
                  onChange={(e) => handleInputChange("dietaryRequirements", e.target.value)}
                  placeholder="Vegetarian, allergies, etc."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="medicalConditions">Medical Conditions</Label>
                <Textarea
                  id="medicalConditions"
                  value={bookingData.medicalConditions}
                  onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                  placeholder="Any medical conditions we should be aware of..."
                  rows={3}
                />
              </div>
            </div>

            {bookingData.tourType && (
              <Card className="bg-secondary text-white">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Estimated Price</h3>
                  <div className="text-2xl font-bold">${getEstimatedPrice().toLocaleString()}</div>
                  <p className="text-sm text-secondary-foreground/80">Final price will be confirmed after review</p>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Emergency Contact & Preferences</h2>
              <p className="text-muted-foreground">Important information for your safety</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Emergency Contact *</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="emergencyName">Full Name *</Label>
                  <Input
                    id="emergencyName"
                    value={bookingData.emergencyName}
                    onChange={(e) => handleInputChange("emergencyName", e.target.value)}
                    placeholder="Emergency contact name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone">Phone Number *</Label>
                  <Input
                    id="emergencyPhone"
                    value={bookingData.emergencyPhone}
                    onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="emergencyRelation">Relationship</Label>
                <Input
                  id="emergencyRelation"
                  value={bookingData.emergencyRelation}
                  onChange={(e) => handleInputChange("emergencyRelation", e.target.value)}
                  placeholder="Spouse, Parent, Sibling, etc."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialRequests">Special Requests</Label>
              <Textarea
                id="specialRequests"
                value={bookingData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="Any special arrangements, celebrations, or specific requirements..."
                rows={4}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Review & Confirm</h2>
              <p className="text-muted-foreground">Please review your booking details</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Name:</strong> {bookingData.firstName} {bookingData.lastName}</p>
                    <p><strong>Email:</strong> {bookingData.email}</p>
                    <p><strong>Phone:</strong> {bookingData.phone}</p>
                  </div>
                  <div>
                    <p><strong>Tour:</strong> {tourOptions.find(t => t.value === bookingData.tourType)?.label}</p>
                    <p><strong>Start Date:</strong> {bookingData.startDate}</p>
                    <p><strong>Group Size:</strong> {bookingData.groupSize} people</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Estimated Total:</span>
                    <span className="text-2xl font-bold text-secondary">${getEstimatedPrice().toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Final price will be confirmed within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms"
                  checked={bookingData.termsAccepted}
                  onCheckedChange={(checked) => handleInputChange("termsAccepted", checked)}
                />
                <Label htmlFor="terms" className="text-sm leading-5">
                  I agree to the <span className="text-secondary underline cursor-pointer">Terms and Conditions</span> and 
                  <span className="text-secondary underline cursor-pointer"> Cancellation Policy</span> *
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="marketing"
                  checked={bookingData.marketingConsent}
                  onCheckedChange={(checked) => handleInputChange("marketingConsent", checked)}
                />
                <Label htmlFor="marketing" className="text-sm leading-5">
                  I would like to receive updates about special offers and new tours
                </Label>
              </div>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <h3 className="font-semibold">Secure Booking</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your information is encrypted and secure. A deposit of 30% is required to confirm your booking. 
                  Full payment is due 30 days before departure.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Book Your
            <span className="block bg-secondary bg-clip-text text-transparent">
              Tanzania Adventure
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Just a few steps to secure your dream safari experience
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    step <= currentStep
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step < currentStep ? <Check className="h-5 w-5" /> : step}
                </div>
                {step < 4 && (
                  <div
                    className={`w-full h-1 mx-2 transition-colors ${
                      step < currentStep ? "bg-secondary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Personal Info</span>
            <span>Trip Details</span>
            <span>Emergency Contact</span>
            <span>Review & Confirm</span>
          </div>
        </div>

        {/* Form Card */}
        <Card className="shadow-elevated">
          <CardContent className="p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="safari"
                onClick={handlePrevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  variant="safari"
                  onClick={handleNextStep}
                  disabled={!isStepValid()}
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  variant="safari"
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="min-w-[120px]"
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Need Help Card */}
        <Card className="mt-8 bg-secondary">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Need Help with Your Booking?</h3>
            <p className="text-white font-bold mb-4">
              Our safari specialists are here to assist you with any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-white hover:text-white hover:bg-secondary" asChild>
                <a href="tel:+255698809207" className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call +255 698 809 207</span>
                </a>
              </Button>
              <Button variant="outline" className="border-white bg-secondary hover:bg-white hover:text-secondary text-white" asChild>
                <a href="mailto:bookings@tanzaniasafari.com">
                  Email Support
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;