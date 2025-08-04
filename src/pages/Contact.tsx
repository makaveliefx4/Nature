import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDates: "",
    groupSize: "",
    tourType: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDates: "",
      groupSize: "",
      tourType: "",
      budget: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: ["Arusha, Tanzania", "East Africa Safari Capital"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+255 123 456 789", "+255 987 654 321"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["info@tanzaniasafari.com", "bookings@tanzaniasafari.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat - Sun: 9:00 AM - 4:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 relative h-96 bg-[url('https://www.andbeyond.com/wp-content/uploads/sites/5/Africa-Tanzania-Serengeti-National-Park-hot-air-balloons-Website-1920x1080-fill-gravityauto-Q_AutoBest.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Contact
            <span className="block bg-secondary bg-clip-text text-transparent">
              Tanzania Safari
            </span>
          </h1>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to plan your Tanzania adventure? Get in touch with our safari specialists 
            for personalized recommendations and expert advice.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-2">
                  <Send className="h-6 w-6 text-secondary" />
                  <span>Plan Your Safari</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this form and we'll create a personalized itinerary just for you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                      <Input
                        id="travelDates"
                        value={formData.travelDates}
                        onChange={(e) => handleInputChange("travelDates", e.target.value)}
                        placeholder="e.g., June 2024"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Group Size</Label>
                      <Select onValueChange={(value) => handleInputChange("groupSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 People</SelectItem>
                          <SelectItem value="3-4">3-4 People</SelectItem>
                          <SelectItem value="5-8">5-8 People</SelectItem>
                          <SelectItem value="9+">9+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Tour Type</Label>
                      <Select onValueChange={(value) => handleInputChange("tourType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tour type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="safari">Safari Only</SelectItem>
                          <SelectItem value="kilimanjaro">Kilimanjaro Climb</SelectItem>
                          <SelectItem value="zanzibar">Beach & Safari</SelectItem>
                          <SelectItem value="luxury">Luxury Tour</SelectItem>
                          <SelectItem value="budget">Budget Tour</SelectItem>
                          <SelectItem value="custom">Custom Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Budget Range (per person)</Label>
                    <Select onValueChange={(value) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2000">Under $2,000</SelectItem>
                        <SelectItem value="2000-4000">$2,000 - $4,000</SelectItem>
                        <SelectItem value="4000-6000">$4,000 - $6,000</SelectItem>
                        <SelectItem value="6000-plus">$6,000+</SelectItem>
                        <SelectItem value="open">Budget is flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your interests, special requirements, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="safari" size="lg" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6 text-secondary" />
                    <span>Get in Touch</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Our safari specialists are here to help you plan the perfect Tanzania adventure.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-secondary mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-secondary text-secondary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Calendar className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">Free Consultation Call</h3>
                  </div>
                  <p className="mb-4 text-secondary-foreground/90">
                    Schedule a free 30-minute consultation with our safari experts to discuss 
                    your dream Tanzania adventure.
                  </p>
                <Button variant="link" size="lg" className="bg-white hover:bg-white hover:text-secondary text-black" asChild>
                  <a href="tel:+255698809207" className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Call +255 698 809 207</span>
                  </a>
                </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">24/7 support during your trip</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Expert local guides</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Customized itineraries</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm">Best price guarantee</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" size="lg" className="w-full border-secondary hover:bg-white hover:text-secondary" asChild>
                      <Link to="/booking">Book Safari Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about Tanzania safaris
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What's the best time to visit?</h3>
                <p className="text-muted-foreground text-sm">
                  The dry season (June-October) is ideal for wildlife viewing, while the wet season 
                  (November-May) offers lush landscapes and fewer crowds.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Do I need vaccinations?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, yellow fever vaccination is required. We recommend consulting with a travel 
                  health clinic for additional recommendations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">What should I pack?</h3>
                <p className="text-muted-foreground text-sm">
                  Light, neutral-colored clothing, good walking shoes, hat, sunscreen, 
                  and binoculars. We'll provide a detailed packing list.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Is it safe to travel?</h3>
                <p className="text-muted-foreground text-sm">
                  Tanzania is very safe for tourists. Our guides are trained in safety protocols 
                  and we maintain 24/7 communication during tours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;