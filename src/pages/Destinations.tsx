import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star } from "lucide-react";
import safariWildlife from "@/assets/safari-wildlife.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import kilimanjaroHero from "@/assets/kilimanjaro-hero.jpg";
import luxuryLodge from "@/assets/luxury-lodge.jpg";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Serengeti National Park",
      image: "https://www.mgahinganationalpark.org/wp-content/uploads/2024/09/serengeti-national-park-750x450.jpg",
      description: "Famous for the Great Migration, the Serengeti offers incredible wildlife viewing with vast plains teeming with animals.",
      highlights: ["Great Migration", "Big Five", "Hot Air Ballooning", "Cultural Tours"],
      bestTime: "June - October",
      rating: 4.9,
      category: "Safari"
    },
    {
      id: 2,
      name: "Mount Kilimanjaro",
      image: "https://wildlandtrekking.com/content/uploads/2021/08/image-kilimanjaro5.jpg",
      description: "Africa's highest peak offers multiple climbing routes through diverse ecosystems to reach the legendary Uhuru Peak.",
      highlights: ["Uhuru Peak", "Multiple Routes", "Diverse Ecosystems", "Guided Expeditions"],
      bestTime: "January - March, June - October",
      rating: 4.8,
      category: "Mountain"
    },
    {
      id: 3,
      name: "Zanzibar Archipelago",
      image: zanzibarBeach,
      description: "Pristine beaches, historic Stone Town, and rich Swahili culture make Zanzibar the perfect tropical paradise.",
      highlights: ["Stone Town", "Spice Tours", "Beach Resorts", "Snorkeling"],
      bestTime: "June - October",
      rating: 4.7,
      category: "Beach"
    },
    {
      id: 4,
      name: "Ngorongoro Crater",
      image: "https://www.ncaa.go.tz/wp-content/uploads/2023/04/empakaai-slider-1024x517.jpeg",
      description: "A UNESCO World Heritage site, this massive volcanic caldera is home to an incredible concentration of wildlife.",
      highlights: ["Crater Floor", "Black Rhinos", "Flamingo Lakes", "Maasai Culture"],
      bestTime: "Year Round",
      rating: 4.9,
      category: "Safari"
    },
    {
      id: 5,
      name: "Tarangire National Park",
      image: "https://www.climbkilimanjaroguide.com/wp-content/uploads/2021/06/elephant-baobab-tarangire-national-park.jpg",
      description: "Known for its large elephant herds and iconic baobab trees, Tarangire offers an authentic safari experience.",
      highlights: ["Elephant Herds", "Baobab Trees", "Bird Watching", "River Crossings"],
      bestTime: "June - October",
      rating: 4.6,
      category: "Safari"
    },
    {
      id: 6,
      name: "Lake Manyara",
      image: "https://www.asiliaafrica.com/wp-content/uploads/2024/04/A-flock-of-flamingos-Lake-Manyara-Arusha-Tanzania.jpg",
      description: "Famous for tree-climbing lions and diverse birdlife, this compact park offers incredible wildlife diversity.",
      highlights: ["Tree-climbing Lions", "Flamingo Flocks", "Hot Springs", "Canopy Walk"],
      bestTime: "July - October",
      rating: 4.5,
      category: "Safari"
    },
    {
      id: 7,
      name: "Eyasi",
      image: "https://sirikwatravel.com/wp-content/uploads/2023/03/Hadzabe-tribe.jpg",
      description: "Experience the famous Culture of Tanzania  Hadzabe learn about haunting and gathering and have the majestic moment in the you're Cultural Visit in Tanzania.",
      highlights:["Cultural Moment", "Hunting and Gathering", "Way of Tradition", "Walking safari"],
      bestTime: "July - September",
      rating: 5,
      category: "Culture"

    },
    {
      id: 8,
      name: "Northern Tanzania",
      image: "https://www.safaris-uganda.com/wp-content/uploads/2019/11/Maasai--772x450.jpg",
      description: "Maasai are the society thah deeply rooted in tradition, with a strong emphasis on age-sets, clan affiliations, and rituals that mark transitions in life",
      highlights:["Culture learning", "Ethinic Moment", "LifeStock keeping", "hunting and gathering"],
      bestTime: "June - October",
      rating: 4.9,
      category: "Culture"
    }
  ];

  const categories = ["All", "Safari", "Mountain", "Beach", "Culture"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations = selectedCategory === "All" 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="py-16 relative h-96 bg-[url('https://t4.ftcdn.net/jpg/03/10/11/87/360_F_310118733_yP2aaium410OlaEUaP5zjbLIL8isZlvN.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-10 text-center">
          <h1 className="text-5xl font-bold mb-7">
            Explore Tanzania's
            <span className="block bg-secondary bg-clip-text text-transparent">
              Amazing Destinations
            </span>
          </h1>
          <p className="text-xl font-bold text-black max-w-2xl mx-auto mb-8">
            From the endless plains of the Serengeti to the pristine beaches of Zanzibar, 
            discover the incredible diversity of Tanzania's landscapes and wildlife.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "safari" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300 hover:scale-105 rounded-full hover:text-white hover:bg-secondary text-sm px-6 py-2 "
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-secondary text-white">
                      {destination.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-secondary text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-secondary text-primary" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                    {destination.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Best Time: {destination.bestTime}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 3).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                      {destination.highlights.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{destination.highlights.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="safari" size="sm" className="flex-1" asChild>
                      <Link to="/safaris">View Tours</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-secondary hover:bg-secondary " asChild>
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20  text-secondary-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Tanzania?</h2>
          <p className="text-xl mb-8 text-black max-w-2xl mx-auto">
            Let our expert guides create a personalized itinerary that combines your favorite destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="safari" size="lg" asChild>
              <Link to="/contact">Plan Your Trip</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary hover:bg-secondary "asChild>
              <Link to="/safaris">Browse Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;