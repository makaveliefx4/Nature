import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Users, MapPin, Banknote } from "lucide-react";

const SafariQuote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Quote Request Submitted!",
      description: "We'll send you a detailed quote within 24 hours.",
    });
    
    setIsSubmitting(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-seconadary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get Your
            <span className="block bg-secondary bg-clip-text text-transparent">
              Safari Quote
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your dream safari and we'll create a personalized quote just for you
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Personal Information */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email address" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter phone number" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="country">Country of Residence</Label>
                    <Input id="country" placeholder="Enter your country" required />
                  </div>
                </CardContent>
              </Card>

              {/* Quick Quote Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Quote Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Group Size: 1-12 people</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    <span>Duration: 3-21 days</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Multiple destinations</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Banknote className="h-4 w-4 text-primary" />
                    <span>Budget: $500 - $10,000+ per person</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Safari Details */}
            <Card>
              <CardHeader>
                <CardTitle>Safari Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="travelers">Number of Travelers</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Person</SelectItem>
                        <SelectItem value="2">2 People</SelectItem>
                        <SelectItem value="3-4">3-4 People</SelectItem>
                        <SelectItem value="5-8">5-8 People</SelectItem>
                        <SelectItem value="9+">9+ People</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="duration">Safari Duration</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 Days</SelectItem>
                        <SelectItem value="6-10">6-10 Days</SelectItem>
                        <SelectItem value="11-15">11-15 Days</SelectItem>
                        <SelectItem value="16+">16+ Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range (per person)</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1500">$500 - $1,500</SelectItem>
                        <SelectItem value="1500-3000">$1,500 - $3,000</SelectItem>
                        <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                        <SelectItem value="5000+">$5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="startDate">Preferred Start Date</Label>
                    <Input id="startDate" type="date" required />
                  </div>
                  <div>
                    <Label htmlFor="accommodation">Accommodation Type</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget Camping</SelectItem>
                        <SelectItem value="mid-range">Mid-range Lodges</SelectItem>
                        <SelectItem value="luxury">Luxury Lodges</SelectItem>
                        <SelectItem value="mixed">Mixed Options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Destinations */}
            <Card>
              <CardHeader>
                <CardTitle>Preferred Destinations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Serengeti National Park",
                    "Ngorongoro Crater",
                    "Tarangire National Park",
                    "Lake Manyara National Park",
                    "Mount Kilimanjaro",
                    "Zanzibar Island",
                    "Arusha National Park",
                    "Ruaha National Park"
                  ].map((destination) => (
                    <div key={destination} className="flex items-center space-x-2">
                      <Checkbox id={destination} />
                      <Label htmlFor={destination} className="text-sm">{destination}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Special Requirements & Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Tell us about any special requirements, dietary restrictions, mobility needs, specific wildlife you'd like to see, or any other details that would help us create the perfect safari for you..."
                  className="min-h-[120px]"
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full md:w-auto px-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get My Custom Quote"}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll review your request and send you a detailed quote within 24 hours
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SafariQuote;