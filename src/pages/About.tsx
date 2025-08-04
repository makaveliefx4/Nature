import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Heart, Globe, Shield, Camera, Mountain } from "lucide-react";
import kilimanjaroHero from "@/assets/kilimanjaro-hero.jpg";
import safariWildlife from "@/assets/safari-wildlife.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";

const About = () => {
  const facts = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Mount Kilimanjaro",
      description: "Africa's highest peak at 5,895 meters, offering multiple climbing routes"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Great Migration",
      description: "Over 2 million wildebeest and zebras migrate annually through the Serengeti"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cultural Diversity",
      description: "Home to over 120 different ethnic groups with rich traditions"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-12 w-12" />,
      title: "Expert Guides",
      description: "Our certified guides have decades of experience and deep knowledge of Tanzania's wildlife and culture."
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Safety First",
      description: "We prioritize your safety with comprehensive safety protocols and experienced staff."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Local Community",
      description: "We support local communities and conservation efforts through responsible tourism practices."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Small Groups",
      description: "Small group sizes ensure personalized attention and minimal environmental impact."
    }
  ];

  const destinations = [
    {
      name: "Serengeti National Park",
      image: safariWildlife,
      fact: "Covers 14,750 square kilometers and hosts the famous Great Migration"
    },
    {
      name: "Mount Kilimanjaro",
      image: kilimanjaroHero,
      fact: "Three volcanic cones: Kibo, Mawenzi, and Shira, with Uhuru Peak as the highest point"
    },
    {
      name: "Zanzibar",
      image: zanzibarBeach,
      fact: "Historic Stone Town is a UNESCO World Heritage Site with centuries of Swahili culture"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 relative h-96 bg-[url('https://www.nationalgeographic.com/content/dam/expeditions/destinations/africa/journeys/Tanzania-Safari-Experience/tanzania-safari-experience-lead-lion-cubs.jpg')] bg-cover bg-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            About
            <span className="block bg-secondary bg-clip-text text-transparent">
              Tanzania
            </span>
          </h1>
          <p className="text-xl text-earth-700 font-bold max-w-3xl mx-auto mb-8">
            Discover the land of endless plains, snow-capped mountains, pristine beaches, 
            and some of the world's most incredible wildlife. Tanzania is truly a destination like no other.
          </p>
        </div>
      </section>

      {/* Tanzania Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Heart of East Africa</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tanzania is home to some of Africa's most iconic destinations, from the vast Serengeti plains 
                where the Great Migration unfolds, to the towering peak of Mount Kilimanjaro, and the 
                pristine beaches of Zanzibar.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With over 25% of its land dedicated to national parks and conservation areas, Tanzania 
                offers unparalleled opportunities to witness wildlife in their natural habitat while 
                supporting crucial conservation efforts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {facts.map((fact, index) => (
                  <div key={index} className="text-center">
                    <div className="text-secondary mb-3 flex justify-center">
                      {fact.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{fact.title}</h3>
                    <p className="text-sm text-muted-foreground">{fact.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={kilimanjaroHero} 
                alt="Mount Kilimanjaro" 
                className="rounded-lg shadow-elevated w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Overview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Iconic Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore Tanzania's diverse landscapes and discover what makes each destination special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">{destination.fact}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Tanzania Safari</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional experiences while supporting conservation and local communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-warm transition-all duration-300 hover:scale-105 bg-gradient-card">
                <CardContent className="pt-6">
                  <div className="text-secondary mb-4 flex justify-center">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={safariWildlife} 
                alt="Wildlife Conservation" 
                className="rounded-lg shadow-elevated w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Conservation & Community</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tanzania is a global leader in wildlife conservation, with innovative programs 
                that balance protection of wildlife with the needs of local communities.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-fit">
                    <Shield className="h-4 w-4 mr-1" />
                    Protected Areas
                  </Badge>
                  <span className="text-muted-foreground">25% of land dedicated to conservation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-fit">
                    <Heart className="h-4 w-4 mr-1" />
                    Community Support
                  </Badge>
                  <span className="text-muted-foreground">Tourism revenue supports local communities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-fit">
                    <Award className="h-4 w-4 mr-1" />
                    Success Stories
                  </Badge>
                  <span className="text-muted-foreground">Elephant populations recovering</span>
                </div>
              </div>
              <Button variant="safari" size="lg" asChild>
                <Link to="/safaris">Support Conservation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Rich Cultural Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tanzania is home to over 120 different ethnic groups, each with their own unique 
                traditions, languages, and customs. The Maasai, Hadza, and many other communities 
                offer visitors authentic cultural experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From the Swahili culture of the coast to the pastoralist traditions of the inland 
                regions, Tanzania's cultural diversity is as rich as its wildlife.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-secondary" />
                  <span>Over 120 ethnic groups</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>Swahili and English official languages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-secondary" />
                  <span>Strong tradition of hospitality</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={zanzibarBeach} 
                alt="Zanzibar Culture" 
                className="rounded-lg shadow-elevated w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-flex">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Experience Tanzania with Us</h2>
          <p className="text-xl mb-8 text-secondary-foreground/900 max-w-2xl mx-auto">
            Let us share our passion for Tanzania with you. Create memories that will last 
            a lifetime while supporting conservation and local communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="safari" size="lg" asChild>
              <Link to="/safaris">Explore Safari Tours</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-secondary hover:bg-white hover:text-secondary "asChild>
              <Link to="/contact">Plan Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;