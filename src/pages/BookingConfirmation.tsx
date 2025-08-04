import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, Users, MapPin, Phone, Mail, Download, Star } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useToast } from "@/hooks/use-toast";

const BookingConfirmation = () => {
  const location = useLocation();
  const { bookingData, bookingId, estimatedPrice } = location.state || {};
  const { toast } = useToast();

  const downloadConfirmation = async () => {
    try {
      toast({
        title: "Downloading Confirmation",
        description: "please wait while we prepare your booking confirmation.",
      });

      const element = document.getElementById("booking-confirmation-content");
      if (!element) return;

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        background: '#ffffff',
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Tanzanias-safari-booking-${bookingId}.pdf`);

      toast({
        title: "Download Complete!",
        description: "Your Booking confirmation has been downloaded successfully.",
      });
    } catch(error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Download Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!bookingData) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Booking Not Found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find your booking details. Please try booking again.
            </p>
            <Button variant="safari" asChild>
              <Link to="/booking">Start New Booking</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
     <div id="booking-confirmation-content" className="container mx-auto px-4 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Booking
            <span className="block bg-secondary bg-clip-text text-transparent">
              Confirmed!
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your Tanzania adventure awaits! We'll be in touch within 24 hours.
          </p>
        </div>

        {/* Booking Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Booking Info */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <span>Booking Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium">Booking ID:</p>
                  <p className="text-secondary font-mono">{bookingId}</p>
                </div>
                <div>
                  <p className="font-medium">Booking Date:</p>
                  <p>{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Traveler Information</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Name:</strong> {bookingData.firstName} {bookingData.lastName}</p>
                  <p><strong>Email:</strong> {bookingData.email}</p>
                  <p><strong>Phone:</strong> {bookingData.phone}</p>
                  {bookingData.country && <p><strong>Country:</strong> {bookingData.country}</p>}
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-3">Trip Details</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Start Date:</strong> {bookingData.startDate}</p>
                  {bookingData.endDate && <p><strong>End Date:</strong> {bookingData.endDate}</p>}
                  <p><strong>Group Size:</strong> {bookingData.groupSize} people</p>
                  {bookingData.accommodation && (
                    <p><strong>Accommodation:</strong> {bookingData.accommodation}</p>
                  )}
                </div>
              </div>

              {bookingData.emergencyName && (
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">Emergency Contact</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {bookingData.emergencyName}</p>
                    <p><strong>Phone:</strong> {bookingData.emergencyPhone}</p>
                    {bookingData.emergencyRelation && (
                      <p><strong>Relationship:</strong> {bookingData.emergencyRelation}</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Price & Next Steps */}
          <div className="space-y-6">
            <Card className="bg-secondary text-white">
              <CardHeader>
                <CardTitle>Price Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Estimated Total:</span>
                    <span className="text-2xl font-bold">${estimatedPrice?.toLocaleString()}</span>
                  </div>
                  <div className="text-sm text-secondary-foreground/80">
                    <p>• Final price confirmation within 24 hours</p>
                    <p>• 30% deposit required to secure booking</p>
                    <p>• Full payment due 30 days before departure</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Confirmation Email</p>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a detailed confirmation email within 30 minutes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Personal Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        Our safari specialist will contact you within 24 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Itinerary Finalization</p>
                      <p className="text-sm text-muted-foreground">
                        We'll customize your trip and send the final itinerary
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <div>
                    <p className="font-medium">24/7 Support</p>
                    <a href="tel:+255698809207" className="text-secondary hover:underline">
                      +255 698 809 207
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <div>
                    <p className="font-medium">Booking Support</p>
                    <a href="mailto:bookings@tanzaniasafari.com" className="text-secondary hover:underline">
                      bookings@tanzaniasafari.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="safari" size="lg" onClick={downloadConfirmation}>
              <Download className="h-4 w-4 mr-2" />
              Download Confirmation
            </Button>
            <Button variant="outline" size="lg"  className="hover:bg-white text-black hover:text-secondary "asChild>
              <a href="tel:+255698809207">
                <Phone className="h-4 w-4 mr-2" />
                Call Us Now
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/safaris">Browse More Tours</Link>
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">5-Star Rated</h3>
              <p className="text-sm text-muted-foreground">
                Rated excellent by over 1,000 travelers
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Check className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fully Licensed</h3>
              <p className="text-sm text-muted-foreground">
                Certified by Tanzania Tourism Board
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Phone className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Round-the-clock assistance during your trip
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;