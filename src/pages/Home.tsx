import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Star, Camera, Mountain, Waves } from "lucide-react";
import kilimanjaroHero from "@/assets/kilimanjaro-hero.jpg";
import safariWildlife from "@/assets/safari-wildlife.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import luxuryLodge from "@/assets/luxury-lodge.jpg";

const Home = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Expert Safari Guides",
      description: "Professional guides with deep knowledge of wildlife and local culture"
    },
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Kilimanjaro Expeditions",
      description: "Conquer Africa's highest peak with our experienced mountain guides"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Zanzibar Paradise",
      description: "Relax on pristine beaches and explore historic Stone Town"
    }
  ];

  const tours = [
    {
      image: safariWildlife,
      title: "Serengeti Wildlife Safari",
      duration: "7 Days",
      group: "Max 8 People",
      rating: 4.9,
      price: "$2,450",
      description: "Experience the Great Migration and spot the Big Five in Tanzania's most famous park"
    },
    {
      image: zanzibarBeach,
      title: "Zanzibar Beach Retreat",
      duration: "5 Days",
      group: "Max 12 People", 
      rating: 4.8,
      price: "$1,650",
      description: "Unwind on pristine beaches and explore the cultural richness of Zanzibar"
    },
    {
      image: luxuryLodge,
      title: "Luxury Safari Experience",
      duration: "10 Days",
      group: "Max 6 People",
      rating: 5.0,
      price: "$4,850",
      description: "Premium accommodations and exclusive wildlife experiences in Tanzania's best parks"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           style={{
            backgroundImage: "url('https://media.cntraveler.com/photos/5ea883674e5fff00083ccef1/16:9/w_2560%2Cc_limit/Safari-GettyImages-143917249.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Magic of
            <span className="block bg-secondary bg-clip-text text-transparent">
              Tanzania
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Experience breathtaking safaris, majestic Mount Kilimanjaro, and pristine Zanzibar beaches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="outline" size="lg" className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-white text-lg" asChild>
              <Link to="/safaris">Explore Safaris</Link>
            </Button>
            <Button variant="safari" size="lg" className="hover:text-secondary" asChild>
              <Link to="/destinations">View Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Tanzania Safari</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We create unforgettable adventures that connect you with Tanzania's incredible wildlife and landscapes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-warm transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardContent className="pt-6">
                  <div className="text-secondary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Safari Tours</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked adventures that showcase the best of Tanzania's natural wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{tour.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{tour.group}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow text-yellow" />
                      <span>{tour.rating}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white w-full text-lg">
                    <Link to="/safaris">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="safari" className="border-secondary  text-black hover:bg-secondary hover:text-white text-lg" size="lg">
              <Link to="/safaris">View All Safari Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-bold textblack">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Tanzania Adventure?</h2>
          <p className="text-xl mb-8 text-black max-w-2xl mx-auto">
            Join thousands of travelers who have experienced the magic of Tanzania with our expert guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white text-lg " size="lg">
              <Link to="/contact">Start Planning</Link>
            </Button>
            <Button variant="safari" size="lg" className="bg-secondary " asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;