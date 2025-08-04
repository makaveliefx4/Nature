import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin, Camera, Tent, Crown, BoneIcon } from "lucide-react";
import safariWildlife from "@/assets/safari-wildlife.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import kilimanjaroHero from "@/assets/kilimanjaro-hero.jpg";
import luxuryLodge from "@/assets/luxury-lodge.jpg";
import { title } from "process";

const Safaris = () => {
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");

  const safariTours = [
    {
      id: 1,
      title: "Classic Serengeti Safari",
      image: safariWildlife,
      duration: "7 Days",
      groupSize: "Max 8 People",
      price: "$2,450",
      priceValue: 2450,
      rating: 4.9,
      category: "Classic",
      highlights: ["Great Migration", "Big Five", "Balloon Safari", "Cultural Visit"],
      includes: ["Accommodation", "All Meals", "Game Drives", "Park Fees"],
      description: "Experience the legendary Serengeti with expert guides, witness the Great Migration, and spot the Big Five in their natural habitat."
    },
    {
      id: 2,
      title: "Kilimanjaro & Safari Combo",
      image: "https://www.kilimanjarotrekking.com/wp-content/uploads/2024/07/Kilimanjaro-hike-Tanzania.jpg",
      duration: "12 Days",
      groupSize: "Max 6 People",
      price: "$4,200",
      priceValue: 4200,
      rating: 4.8,
      category: "Adventure",
      highlights: ["Uhuru Peak", "Machame Route", "Serengeti Safari", "Crater Lodge"],
      includes: ["Mountain Guides", "All Equipment", "Safari Vehicle", "Luxury Lodge"],
      description: "Conquer Kilimanjaro via the scenic Machame route, then unwind with a luxury safari through Tanzania's premier parks."
    },
    {
      id: 3,
      title: "Luxury Tanzania Explorer",
      image: "https://e8t95d9vg4g.exactdn.com/wp-content/uploads/2023/11/Untitled-1-Recoveredhotmain.jpg?strip=all&lossy=1&ssl=1",
      duration: "10 Days",
      groupSize: "Max 6 People",
      price: "$6,850",
      priceValue: 6850,
      rating: 5.0,
      category: "Luxury",
      highlights: ["Private Guide", "Luxury Lodges", "Helicopter Transfers", "Exclusive Access"],
      includes: ["5-Star Accommodation", "Private Vehicle", "Butler Service", "All Activities"],
      description: "The ultimate Tanzania experience with exclusive access, luxury accommodations, and personalized service throughout your journey."
    },
    {
      id: 4,
      title: "Safari & Zanzibar Paradise",
      image: "https://www.africasafaribookingsadvisor.com/wp-content/uploads/2021/06/12-Days-Tanzania-Safari-and-Zanzibar-Beach2-960x1149.jpg",
      duration: "9 Days",
      groupSize: "Max 10 People",
      price: "$3,200",
      priceValue: 3200,
      rating: 4.7,
      category: "Beach & Safari",
      highlights: ["Ngorongoro Crater", "Stone Town", "Beach Resort", "Spice Tour"],
      includes: ["Safari Lodge", "Beach Resort", "All Transfers", "Cultural Tours"],
      description: "Perfect combination of thrilling safari adventures and relaxing beach time in the tropical paradise of Zanzibar."
    },
    {
      id: 5,
      title: "Budget Camping Safari",
      image: "https://naturetraveltanzania.com/wp-content/uploads/2021/10/5-Days-Tanzania-Budget-Camping-Safari.jpg",
      duration: "5 Days",
      groupSize: "Max 12 People",
      price: "$950",
      priceValue: 950,
      rating: 4.4,
      category: "Budget",
      highlights: ["Camping Experience", "Tarangire", "Ngorongoro", "Local Guides"],
      includes: ["Camping Equipment", "Shared Vehicle", "Basic Meals", "Park Fees"],
      description: "Affordable safari adventure with authentic camping experiences and excellent wildlife viewing opportunities."
    },
    {
      id: 6,
      title: "Photography Safari",
      image: "https://www.asiliaafrica.com/wp-content/smush-webp/2024/04/A-photographer-snaps-a-herd-of-zebra-on-a-photographic-safari-800x800.jpg.webp",
      duration: "8 Days",
      groupSize: "Max 6 People",
      price: "$3,800",
      priceValue: 3800,
      rating: 4.9,
      category: "Specialty",
      highlights: ["Photo Workshops", "Golden Hour Drives", "Wildlife Photography", "Expert Tuition"],
      includes: ["Photo Guide", "Hide Access", "Equipment Use", "Portfolio Review"],
      description: "Specialized photography safari with expert instruction, perfect lighting conditions, and exclusive access to prime locations."
    },
    {
      id: 7,
      title: "Gathering and hunting (Hadzabe)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Awb2lGVyfHFqLaT9DoNC5UyUjvrGMqooiA&s",
      duration: "1 day",
      groupSize: "Max 10 people",
      price: "$400",
      priceValue: 400,
      rating: 5.5,
      category:"Culture",
      highlights: ["Cultural learning", "Hunting and gathering", "Walking Safari", "Ethinic learning"],
      includes: ["Guides", "hidden gems", "Cultural learning", "ethinic Group"],
      description: "Experience the best moment in the traveling by visiting the hadzabe a group where they hunt and gathering"
    },
    {
      id: 8,
      title: "LiveStock Keeping (Maasai)",
      image: "https://www.serengeti.com/assets/img/maasai-warriors-serengeti-small.jpg",
      duration: "1 Day",
      groupSize: "Max 10 people",
      price: "$500",
      priceValue: 500,
      rating: 5.1,
      category: "Culture",
      highlights: ["Cultural learning", "Livestock keeping", "Walking safari", "Ethinic Learning"],
      includes: ["Guides", "Hidden Gems", "Walking Safari", "Livestocks"],
      description: "Maasai are the tribe in Tanzania which are very famous Group which are mostly in Livestockkeeping"
    }
  ];

  const durations = ["All", "5 Days", "7 Days", "8 Days", "9 Days", "10 Days", "12 Days"];
  const prices = ["All", "Under $2000", "$2000-$4000", "$4000-$6000", "Over $6000"];

  const filteredTours = safariTours.filter(tour => {
    const matchesDuration = selectedDuration === "All" || tour.duration === selectedDuration;
    const matchesPrice = selectedPrice === "All" || 
      (selectedPrice === "Under $2000" && tour.priceValue < 2000) ||
      (selectedPrice === "$2000-$4000" && tour.priceValue >= 2000 && tour.priceValue < 4000) ||
      (selectedPrice === "$4000-$6000" && tour.priceValue >= 4000 && tour.priceValue < 6000) ||
      (selectedPrice === "Over $6000" && tour.priceValue >= 6000);
    
    return matchesDuration && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Luxury": return <Crown className="h-4 w-4" />;
      case "Adventure": return <Camera className="h-4 w-4" />;
      case "Budget": return <Tent className="h-4 w-4" />;
      case "Culture": return <BoneIcon className="h-4 w-4"/>;
      default: return <MapPin className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="py-16 relative h-96 bg-[url('https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-2f2d502/tanzania-specialist.com/wp-content/uploads/2023/08/9-Days-Safari-vacation-Tanzania-Wildebeest-migration-1920x800.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Tanzania
            <span className="block bg-secondary bg-clip-text text-transparent">
              Safari Tours
            </span>
          </h1>
          <p className="text-xl text-muted-foreground font-bold max-w-2xl mx-auto mb-8">
            Choose from our carefully crafted safari experiences, from budget camping adventures 
            to luxury lodge expeditions. Every tour is designed to create memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium mb-3">Duration</h3>
              <div className="flex flex-wrap gap-2">
                {durations.map((duration) => (
                  <Button
                    key={duration}
                    variant={selectedDuration === duration ? "safari" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDuration(duration)}
                    className="transition-all duration-300  border-secondary hover:scale-105 rounded-full hover:text-white hover:bg-secondary text-sm px-6 py-2"
                  >
                    {duration}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-3">Price Range</h3>
              <div className="flex flex-wrap gap-2">
                {prices.map((price) => (
                  <Button
                    key={price}
                    variant={selectedPrice === price ? "safari" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPrice(price)}
                    className="transition-all duration-300  border-secondary hover:scale-105 rounded-full hover:text-white hover:bg-secondary text-sm px-6 py-2"
                  >
                    {price}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredTours.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No tours match your filters</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search criteria</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedDuration("All");
                  setSelectedPrice("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 group">
                  <div className="md:flex">
                    <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={tour.image} 
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-secondary text-white flex items-center space-x-1">
                          {getCategoryIcon(tour.category)}
                          <span>{tour.category}</span>
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-secondary text-white px-3 py-2 rounded-lg font-bold text-lg">
                        {tour.price}
                      </div>
                    </div>
                    
                    <CardContent className="md:w-1/2 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold">{tour.title}</h3>
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="h-4 w-4 fill-secondary text-white" />
                          <span>{tour.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                        {tour.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{tour.groupSize}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-sm">Highlights:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tour.highlights.slice(0, 3).map((highlight, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-medium mb-2 text-sm">Includes:</h4>
                        <div className="flex flex-wrap gap-1">
                          {tour.includes.slice(0, 2).map((item, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                          <Badge variant="secondary" className="text-xs">
                            +{tour.includes.length - 2} more
                          </Badge>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="safari" size="sm" className="flex-1" asChild>
                          <Link to="/booking">Book Now</Link>
                        </Button>
                          <Button variant="outline" size="sm" className="flex-1 border-secondary text-secondary hover:bg-secondary"  asChild>
                          <Link to={`/safari-details?id=${tour.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Safari CTA */}
      <section className="py-20 bg-gradient-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Safari?</h2>
          <p className="text-xl mb-8 text-secondary-foreground/900 max-w-2xl mx-auto">
            Our safari specialists can create a personalized itinerary tailored to your preferences, 
            timeline, and budget. Every detail crafted just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="safari" size="lg" asChild>
              <Link to="/">Plan Custom Safari</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary hover:bg-secondary" asChild>
              <Link to="/about">Why Choose Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;