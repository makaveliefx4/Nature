import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wifi, Car, Utensils, MapPin, Crown, Tent, Home } from "lucide-react";
import luxuryLodge from "@/assets/luxury-lodge.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import safariWildlife from "@/assets/safari-wildlife.jpg";

const Accommodations = () => {
  const [selectedType, setSelectedType] = useState("All");

  const accommodations = [
    {
      id: 1,
      name: "Serengeti Four Seasons Safari Lodge",
      image: "https://www.serengeti.com/assets/img/four-seasons-safari-lodge-serengeti-exclusive-serengeti-experience-small.jpg",
      type: "Luxury Lodge",
      location: "Serengeti National Park",
      rating: 4.9,
      price: "$850",
      priceNote: "per night",
      amenities: ["Pool", "Spa", "Restaurant", "Game Drives", "WiFi"],
      highlights: ["Infinity Pool", "Animal Watering Hole Views", "5-Star Service"],
      description: "Perched on a ridge overlooking the endless Serengeti plains, this luxury lodge offers unparalleled wildlife viewing from your room."
    },
    {
      id: 2,
      name: "Zanzibar Serena Hotel",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/8838044.jpg?k=bcd205199a9ecfd51ae064253c0a16853807e4be1e2d08a3c85e1d84e2627bd6&o=&hp=1",
      type: "Beach Resort",
      location: "Stone Town, Zanzibar",
      rating: 4.7,
      price: "$320",
      priceNote: "per night",
      amenities: ["Beach Access", "Pool", "Spa", "Restaurant", "Cultural Tours"],
      highlights: ["Historic Stone Town", "Private Beach", "Swahili Architecture"],
      description: "A beautiful beachfront resort combining traditional Swahili architecture with modern luxury amenities."
    },
    {
      id: 3,
      name: "Tarangire Safari Tented Camp",
      image: "https://www.earthlifeexpeditions.com/wp-content/uploads/2020/05/tarangire-safari-lodge-honeymoon-view.jpg",
      type: "Tented Camp",
      location: "Tarangire National Park",
      rating: 4.5,
      price: "$180",
      priceNote: "per night",
      amenities: ["Game Drives", "Campfire", "Restaurant", "Bar", "Guided Walks"],
      highlights: ["Authentic Safari Experience", "Close to Wildlife", "Baobab Views"],
      description: "Experience the thrill of camping in the African wilderness with comfortable tented accommodations and exceptional game viewing."
    },
    {
      id: 4,
      name: "Ngorongoro Crater Lodge",
      image: "https://www.expertafrica.com/images/lodge/32547_l.jpg",
      type: "Luxury Lodge",
      location: "Ngorongoro Conservation Area",
      rating: 5.0,
      price: "$1,200",
      priceNote: "per night",
      amenities: ["Butler Service", "Spa", "Fine Dining", "Crater Views", "Private Deck"],
      highlights: ["Crater Rim Location", "Ultimate Luxury", "Award-Winning Design"],
      description: "An architectural masterpiece on the rim of Ngorongoro Crater, offering the ultimate in luxury safari accommodations."
    },
    {
      id: 5,
      name: "Kilimanjaro Mountain Resort",
      image: "https://lh3.googleusercontent.com/proxy/tpn32FuItjB5YtEGDzAeKeIi_Bpr519rHTzgLH4lpPLpop7iLjoN98Qi22xjCKZR52YrCMWxQSlcORrdGYDECFlDKAR4VHx1PtDeOWKVkdGjDRP8pQmndRH8PbeKaOQQZzUjugVqS2c5u9JWLQC_3JU6v0z-kwMSffGnvACS3ynQmkaVk7UM3Gd4xOuum3yXKW-VDcD7zT5zb043C0SteMuxdctL5oRooImpn0RGCB2PPa-m89ou-SKmc6p0",
      type: "Mountain Lodge",
      location: "Kilimanjaro Region",
      rating: 4.6,
      price: "$240",
      priceNote: "per night",
      amenities: ["Mountain Views", "Spa", "Restaurant", "Hiking Trails", "Golf"],
      highlights: ["Kilimanjaro Views", "Coffee Plantation", "Cultural Experiences"],
      description: "Nestled at the foothills of Mount Kilimanjaro with spectacular mountain views and coffee plantation experiences."
    },
    {
      id: 6,
      name: "Budget Safari Camp",
      image: "https://www.kitanotours.com/Tanzania-camping-budget-safari/four-days-tanzania-budget-camping-safari.png",
      type: "Budget Camp",
      location: "Multiple Locations",
      rating: 4.2,
      price: "$45",
      priceNote: "per night",
      amenities: ["Shared Facilities", "Campfire", "Basic Meals", "Game Drives"],
      highlights: ["Affordable", "Authentic Experience", "Great Guides"],
      description: "Clean, comfortable, and affordable camping accommodations perfect for budget-conscious travelers who don't want to compromise on the safari experience."
    }
  ];

  const types = ["All", "Luxury Lodge", "Beach Resort", "Tented Camp", "Mountain Lodge", "Budget Camp"];

  const filteredAccommodations = selectedType === "All" 
    ? accommodations 
    : accommodations.filter(acc => acc.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Luxury Lodge": return <Crown className="h-4 w-4" />;
      case "Tented Camp": return <Tent className="h-4 w-4" />;
      case "Budget Camp": return <Home className="h-4 w-4" />;
      default: return <Home className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 relative h-96 bg-[url('https://media.tourthetropics.com/images/guides/featured_images/The_Top_10_South_Africa_Safari_Lodges_20240723123138.webp')] bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Tanzania
            <span className="block bg-secondary bg-clip-text text-transparent">
              Accommodations
            </span>
          </h1>
          <p className="text-xl font-bold text-muted-foreground max-w-2xl mx-auto mb-8">
            From luxury safari lodges to authentic tented camps, discover accommodations 
            that enhance your Tanzania adventure with comfort and style.
          </p>
        </div>
      </section>

      {/* Type Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "safari" : "outline"}
                onClick={() => setSelectedType(type)}
                className="transition-all duration-300 border-secondary hover:scale-105 rounded-full hover:text-secondary hover:bg-white text-sm px-6 py-2"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <Card key={accommodation.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 group">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={accommodation.image} 
                      alt={accommodation.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-secondary text-white font-bold flex items-center space-x-1">
                        {getTypeIcon(accommodation.type)}
                        <span>{accommodation.type}</span>
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-secondary text-secondary-foreground font-bold px-3 py-2 rounded-lg">
                      <div className="font-bold text-lg">{accommodation.price}</div>
                      <div className="text-xs">{accommodation.priceNote}</div>
                    </div>
                  </div>
                  
                  <CardContent className="md:w-1/2 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{accommodation.name}</h3>
                        <div className="flex items-center font-bold space-x-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{accommodation.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star className="h-4 w-4 fill-secondary text-secondary" />
                        <span>{accommodation.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                      {accommodation.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-sm">Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {accommodation.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-sm">Amenities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {accommodation.amenities.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{accommodation.amenities.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="safari" size="sm" className="flex-1" asChild>
                        <Link to="/booking">Book Now</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 border-secondary hover:bg-white hover:text-secondary" asChild>
                        <Link to={`/accommodation-details?id=${accommodation.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Types Info */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Style</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each accommodation type offers a unique way to experience Tanzania's natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <Crown className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Luxury Lodges</h3>
                <p className="text-muted-foreground text-sm">
                  5-star accommodations with world-class amenities, gourmet dining, 
                  and exclusive wildlife experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <Tent className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tented Camps</h3>
                <p className="text-muted-foreground text-sm">
                  Authentic safari experience with comfortable tented accommodations 
                  close to wildlife and nature.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardContent className="pt-6">
                <Home className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Budget Options</h3>
                <p className="text-muted-foreground text-sm">
                  Clean, comfortable, and affordable accommodations that don't 
                  compromise on the safari experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8 text-black max-w-2xl mx-auto">
            Our accommodation specialists can help you find the perfect place to stay 
            based on your preferences, budget, and itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="safari" size="lg" asChild>
              <Link to="/contact">Get Recommendations</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary hover:text-secondary hover:bg-white " asChild>
              <Link to="/safaris">View Safari Packages</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;