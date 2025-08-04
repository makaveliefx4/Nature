import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  Clock, 
  Users, 
  MapPin, 
  Crown, 
  Camera, 
  Tent,
  CheckCircle,
  Calendar,
  Plane,
  Car,
  Home,
  Utensils,
  Shield
} from "lucide-react";
import safariWildlife from "@/assets/safari-wildlife.jpg";
import zanzibarBeach from "@/assets/zanzibar-beach.jpg";
import kilimanjaroHero from "@/assets/kilimanjaro-hero.jpg";
import luxuryLodge from "@/assets/luxury-lodge.jpg";
import { title } from "process";

const SafariDetails = () => {
  const [searchParams] = useSearchParams();
  const safariId = searchParams.get('id');
  const [safari, setSafari] = useState<any>(null);

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
      description: "Experience the legendary Serengeti with expert guides, witness the Great Migration, and spot the Big Five in their natural habitat.",
      fullDescription: "Embark on an unforgettable journey through the world-famous Serengeti National Park, where endless plains stretch to the horizon and wildlife roams freely in one of Africa's most pristine ecosystems. This classic safari combines thrilling game drives, cultural encounters, and comfortable accommodations to create the perfect Tanzania adventure.",
      itinerary: [
        { day: 1, title: "Arrival in Arusha", description: "Airport pickup, briefing, and overnight at luxury lodge" },
        { day: 2, title: "Arusha to Serengeti", description: "Morning drive to Serengeti, afternoon game drive" },
        { day: 3, title: "Central Serengeti", description: "Full day game drives in the heart of Serengeti" },
        { day: 4, title: "Hot Air Balloon Safari", description: "Dawn balloon flight followed by champagne breakfast" },
        { day: 5, title: "Ngorongoro Crater", description: "Descend into the crater for incredible wildlife viewing" },
        { day: 6, title: "Cultural Experience", description: "Visit Maasai village and learn about local traditions" },
        { day: 7, title: "Departure", description: "Morning game drive, return to Arusha for departure" }
      ],
      accommodations: [
        { name: "Arusha Coffee Lodge", type: "Luxury Lodge", nights: 1 },
        { name: "Serengeti Serena Safari Lodge", type: "Safari Lodge", nights: 3 },
        { name: "Ngorongoro Serena Safari Lodge", type: "Crater Lodge", nights: 2 }
      ],
      included: [
        "All accommodation as specified",
        "All meals during safari",
        "Professional English-speaking guide",
        "4WD safari vehicle with pop-up roof",
        "All park fees and conservation fees",
        "Hot air balloon safari with champagne breakfast",
        "Cultural visit to Maasai village",
        "Airport transfers",
        "Unlimited game drives",
        "Bottled water during game drives"
      ],
      excluded: [
        "International flights",
        "Tanzania visa fees",
        "Travel insurance",
        "Personal expenses and tips",
        "Alcoholic beverages",
        "Optional activities not mentioned"
      ],
      bestTime: "Year-round destination with Great Migration from June to October",
      difficulty: "Easy - suitable for all fitness levels",
      minAge: "No minimum age, family-friendly"
    },
    {
      id: 2,
      title: "Kilimanjaro & Safari Combo",
      image: kilimanjaroHero,
      duration: "12 Days",
      groupSize: "Max 6 People",
      price: "$4,200",
      priceValue: 4200,
      rating: 4.8,
      category: "Adventure",
      highlights: ["Uhuru Peak", "Machame Route", "Serengeti Safari", "Crater Lodge"],
      includes: ["Mountain Guides", "All Equipment", "Safari Vehicle", "Luxury Lodge"],
      description: "Conquer Kilimanjaro via the scenic Machame route, then unwind with a luxury safari through Tanzania's premier parks.",
      fullDescription: "The ultimate Tanzania adventure combining the challenge of Africa's highest peak with the thrill of world-class safari experiences. Trek through diverse ecosystems to reach Uhuru Peak, then celebrate your achievement with luxury safari adventures in the Serengeti and Ngorongoro Crater.",
      itinerary: [
        { day: 1, title: "Arrival & Preparation", description: "Arrive Kilimanjaro Airport, equipment check, briefing" },
        { day: 2, title: "Machame Gate to Machame Camp", description: "Begin trek through rainforest zone" },
        { day: 3, title: "Machame to Shira Camp", description: "Cross moorland zone with stunning views" },
        { day: 4, title: "Shira to Barranco Camp", description: "Acclimatization day via Lava Tower" },
        { day: 5, title: "Barranco to Karanga Camp", description: "Climb famous Barranco Wall" },
        { day: 6, title: "Karanga to Barafu Camp", description: "Final camp before summit attempt" },
        { day: 7, title: "Summit Day - Uhuru Peak", description: "Midnight start for sunrise summit" },
        { day: 8, title: "Mweka Gate & Safari Preparation", description: "Complete descent, transfer to safari lodge" },
        { day: 9, title: "Serengeti National Park", description: "Begin safari adventure in the Serengeti" },
        { day: 10, title: "Serengeti Full Day", description: "Full day exploring different regions" },
        { day: 11, title: "Ngorongoro Crater", description: "Descend into the world's largest intact caldera" },
        { day: 12, title: "Departure", description: "Final game drive and departure from Arusha" }
      ],
      accommodations: [
        { name: "Mountain Camping", type: "Tented Camps", nights: 6 },
        { name: "Serengeti Serena Safari Lodge", type: "Safari Lodge", nights: 2 },
        { name: "Ngorongoro Crater Lodge", type: "Luxury Lodge", nights: 2 }
      ],
      included: [
        "Professional mountain guides and porters",
        "All camping equipment and meals on mountain",
        "Park fees for Kilimanjaro and safari parks",
        "4WD safari vehicle with professional driver-guide",
        "All accommodation as specified",
        "All meals during safari portion",
        "Airport transfers",
        "Rescue fees and first aid kit",
        "Portable oxygen tank",
        "Certificate for successful summit"
      ],
      excluded: [
        "International flights",
        "Tanzania visa fees",
        "Travel and medical insurance",
        "Personal climbing gear (available for rent)",
        "Tips for guides and porters",
        "Personal expenses",
        "Alcoholic beverages"
      ],
      bestTime: "January-March and June-October for best weather conditions",
      difficulty: "Challenging - good fitness level required",
      minAge: "16 years minimum for Kilimanjaro portion"
    },
    {
      id: 3,
      title: "Luxury Tanzania Explorer",
      image: luxuryLodge,
      duration: "10 Days",
      groupSize: "Max 6 People",
      price: "$6,850",
      priceValue: 6850,
      rating: 5.0,
      category: "Luxury",
      highlights: ["Private Guide", "Luxury Lodges", "Helicopter Transfers", "Exclusive Access"],
      includes: ["5-Star Accommodation", "Private Vehicle", "Butler Service", "All Activities"],
      description: "The ultimate Tanzania experience with exclusive access, luxury accommodations, and personalized service throughout your journey.",
      fullDescription: "Experience Tanzania like royalty with this ultra-luxury safari featuring exclusive access to private conservancies, helicopter transfers between destinations, world-class accommodations, and personalized service that exceeds every expectation. This is safari at its most refined and exclusive.",
      itinerary: [
        { day: 1, title: "VIP Arrival", description: "Private jet pickup, helicopter to luxury lodge" },
        { day: 2, title: "Private Serengeti", description: "Exclusive access to private conservancy" },
        { day: 3, title: "Balloon & Champagne", description: "Private balloon safari with gourmet breakfast" },
        { day: 4, title: "Helicopter Safari", description: "Aerial game viewing and remote picnic" },
        { day: 5, title: "Ngorongoro Luxury", description: "Private crater tour with luxury picnic" },
        { day: 6, title: "Cultural Immersion", description: "Private Maasai experience and traditional ceremonies" },
        { day: 7, title: "Helicopter to Zanzibar", description: "Luxury beach resort transfer" },
        { day: 8, title: "Private Island", description: "Exclusive island excursion with yacht" },
        { day: 9, title: "Spa & Relaxation", description: "Private spa treatments and beach activities" },
        { day: 10, title: "Departure", description: "Private transfer to international airport" }
      ],
      accommodations: [
        { name: "Four Seasons Serengeti", type: "Ultra-Luxury Lodge", nights: 4 },
        { name: "Ngorongoro Crater Lodge", type: "Luxury Crater Lodge", nights: 2 },
        { name: "The Residence Zanzibar", type: "Beach Villa", nights: 3 }
      ],
      included: [
        "Private helicopter transfers",
        "Personal butler service",
        "Professional private guide",
        "All luxury accommodations",
        "All gourmet meals and premium beverages",
        "Private vehicle and boat charters",
        "Exclusive access to private conservancies",
        "All activities and excursions",
        "Spa treatments",
        "Premium wine and champagne",
        "24/7 concierge service"
      ],
      excluded: [
        "International flights (can be arranged)",
        "Personal shopping and souvenirs",
        "Medical insurance",
        "Gratuities (although staff are well compensated)"
      ],
      bestTime: "Year-round with personalized weather tracking",
      difficulty: "Easy - suitable for luxury travelers",
      minAge: "No minimum age, family suites available"
    },
    {
      id: 4,
        title: "Zanzibar Beach & Safari",
        image: zanzibarBeach,
        duration: "8 Days",
        groupSize: "Max 10 People",
        price: "$3,200",
        priceValue: 3200,
        rating: 4.7,
        category: "Beach",
        highlights: ["Stone Town", "Spice Tour", "Snorkeling", "Safari Blue"],
        includes: ["Accommodation", "All Meals", "Transfers", "Activities"],
        description: "Combine the best of Zanzibar's beaches with a thrilling safari adventure, exploring the island's rich culture and stunning marine life.",
        fullyDescription: "Discover the idyllic beaches of Zanzibar while enjoying a thrilling safari experience in Tanzania's renowned national parks. This unique itinerary combines the cultural richness of Stone Town, the natural beauty of Zanzibar's beaches, and the wildlife wonders of Tanzania's top safari destinations.",
        itinerary: [
          { day: 1, title: "Arrival in Zanzibar", description: "Welcome to Zanzibar! Relax on the beach or explore Stone Town." },
          { day: 2, title: "Spice Tour", description: "Discover the island's spice plantations and learn about its history." },
          { day: 3, title: "Snorkeling Adventure", description: "Explore the vibrant coral reefs and marine life." },
          { day: 4, title: "Safari Blue", description: "Enjoy a day of sailing, snorkeling, and seafood feasting." },
          { day: 5, title: "Transfer to Safari", description: "Travel to Tanzania's national parks for your safari adventure." },
          { day: 6, title: "Game Drive", description: "Embark on a thrilling game drive in the Serengeti." },
          { day: 7, title: "Ngorongoro Crater", description: "Explore the unique ecosystem of the Ngorongoro Crater." },
          { day: 8, title: "Departure", description: "Transfer back to Zanzibar for your departure flight." }
        ],
        accommodations: [
          { name: "Zanzibar Serena Hotel", type: "Beachfront Hotel", nights: 3 },
          { name: "Serengeti Wildlife Lodge", type: "Safari Lodge", nights: 3 },
          { name: "Ngorongoro Sopa Lodge", type: "Crater Lodge", nights: 1 }
        ],
        included: [
          "All accommodation as specified",
          "All meals during safari and Zanzibar portion",
          "Professional English-speaking guide",
          "4WD safari vehicle with pop-up roof",
          "All park fees and conservation fees",
          "Spice tour and snorkeling equipment",
          "Airport transfers in Zanzibar and Arusha",
          "Unlimited game drives",
          "Bottled water during game drives"
        ],
        excluded: [
          "International flights",
          "Tanzania visa fees",
          "Travel insurance",
          "Personal expenses and tips",
          "Alcoholic beverages",
          "Optional activities not mentioned"
        ],
        bestTime: "April to October for best weather and wildlife viewing",
        difficulty: "Easy - suitable for all fitness levels",
        minAge: "No minimum age, family-friendly"
    },
    {
      id: 5,
      title: "Budget Safari Adventure",
      image: "safari-budget.jpg",
      duration: "8 Days",
      groupSize: "Max 10 People",
      price: "$3,200",
      priceValue: 3200,
      rating: 4.7,
      category: "Beach",
      highlights: ["Stone Town", "Spice Tour", "Snorkeling", "Safari Blue"],
      includes: ["Accommodation", "All Meals", "Transfers", "Activities"],
      description: "Combine the best of Zanzibar's beaches with a thrilling safari adventure, exploring the island's rich culture and stunning marine life.",
      fullyDescription: "Discover the idyllic beaches of Zanzibar while enjoying a thrilling safari experience in Tanzania's renowned national parks. This unique itinerary combines the cultural richness of Stone Town, the natural beauty of Zanzibar's beaches, and the wildlife wonders of Tanzania's top safari destinations.",
      itinerary: [
        { day: 1, title: "Arrival in Zanzibar", description: "Welcome to Zanzibar! Relax on the beach or explore Stone Town." },
        { day: 2, title: "Spice Tour", description: "Discover the island's spice plantations and learn about its history." },
        { day: 3, title: "Snorkeling Adventure", description: "Explore the vibrant coral reefs and marine life." },
        { day: 4, title: "Safari Blue", description: "Enjoy a day of sailing, snorkeling, and seafood feasting." },
        { day: 5, title: "Transfer to Safari", description: "Travel to Tanzania's national parks for your safari adventure." },
        { day: 6, title: "Game Drive", description: "Embark on a thrilling game drive in the Serengeti." },
        { day: 7, title: "Ngorongoro Crater", description: "Explore the unique ecosystem of the Ngorongoro Crater." },
        { day: 8, title: "Departure", description: "Transfer back to Zanzibar for your departure flight." }
      ],
      accommodations: [
        { name: "Zanzibar Serena Hotel", type: "Beachfront Hotel", nights: 3 },
        { name: "Serengeti Wildlife Lodge", type: "Safari Lodge", nights: 3 },
        { name: "Ngorongoro Sopa Lodge", type: "Crater Lodge", nights: 1 }
      ],
      included: [
        "All accommodation as specified",
        "All meals during safari and Zanzibar portion",
        "Professional English-speaking guide",
        "4WD safari vehicle with pop-up roof",
        "All park fees and conservation fees",
        "Spice tour and snorkeling equipment",
        "Airport transfers in Zanzibar and Arusha",
        "Unlimited game drives",
        "Bottled water during game drives"
      ],
      excluded: [
        "International flights",
        "Tanzania visa fees",
        "Travel insurance",
        "Personal expenses and tips",
        "Alcoholic beverages",
        "Optional activities not mentioned"
      ],
      bestTime: "April to October for best weather and wildlife viewing",
      difficulty: "Easy - suitable for all fitness levels",
      minAge: "No minimum age, family-friendly"
    },
    {
        id: 6,
        title: "Photography Safari",
        image: "photography-safari.jpg",
        duration: "10 Days",
        groupSize: "Max 6 People",
        price: "$4,500",
        priceValue: 4500,
        rating: 4.9,
        category: "Family",
        highlights: ["Serengeti Wildlife", "Ngorongoro Crater", "Cultural Visits", "Photography Workshops"],
        includes: ["Accommodation", "All Meals", "Photography Guide", "Transfers"],
        description: "Capture the stunning landscapes and wildlife of Tanzania on this photography-focused safari.",
        fullDescription: "Join us for a unique photography safari designed for both amateur and professional photographers. This tour combines breathtaking landscapes, diverse wildlife, and cultural experiences, all while providing expert guidance on capturing the perfect shot.",
        itinerary: [
            { day: 1, title: "Arrival in Arusha", description: "Welcome to Tanzania! Relax at the lodge." },
            { day: 2, title: "Arusha National Park", description: "Short game drive and walking safari." },
            { day: 3, title: "Tarangire National Park", description: "Explore the park known for its elephants." },
            { day: 4, title: "Lake Manyara National Park", description: "Famous for tree-climbing lions." },
            { day: 5, title: "Ngorongoro Crater", description: "Descend into the crater for wildlife viewing." },
            { day: 6, title: "Cultural Visit", description: "Visit a Maasai village and learn about their culture." },
            { day: 7, title: "Serengeti National Park", description: "Begin your safari adventure in the Serengeti." },
            { day: 8, title: "Serengeti Full Day", description: "Full day exploring different regions of the Serengeti." },
            { day: 9, title: "Relaxation Day", description: "Enjoy leisure activities at the lodge." },
            { day: 10, title: "Departure", description: "Transfer back to Arusha for your departure flight." }
        ],
        accommodations: [
            { name: "Arusha Serena Hotel", type: "Luxury Lodge", nights: 1 },
            { name: "Tarangire Safari Lodge", type: "Safari Lodge", nights: 2 },
            { name: "Ngorongoro Sopa Lodge", type: "Crater Lodge", nights: 2 },
            { name: "Serengeti Wildlife Camp", type: "Tented Camp", nights: 4 }
        ],
        included: [
            "All accommodation as specified",
            "All meals during safari",
            "Professional photography guide",
            "Photography workshops and editing sessions",
            "4WD safari vehicle with pop-up roof",
            "All park fees and conservation fees",
            "Cultural visit to Maasai village", 
            "Airport transfers",
            "Unlimited game drives",
            "Bottled water during game drives"
        ],
        excluded: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Personal expenses (e.g., souvenirs, tips)",
            "Optional activities not mentioned in the itinerary"
        ],
        bestTime: "June to October for the best wildlife viewing",
        difficulty: "Easy - suitable for all skill levels",
        minAge: "12 years old, family-friendly"
    },
    {
        id: 7,
        title: "Gathering & Hunting (Hadzabe Tribe)",
        image: "gathering-hunting.jpg",
        duration: "9 Days",
        groupSize: "Max 8 People",
        price: "$3,800",
        priceValue: 3800,
        rating: 4.8,
        category: "Family",
        highlights: ["Hadzabe Tribe", "Cultural Immersion", "Wildlife Viewing", "Scenic Landscapes"],
        includes: [" Accommodation", "All Meals", "Cultural Guide", "Transfers"],
        description: "Experience the unique traditions and lifestyle of the Hadzabe tribe while enjoying thrilling wildlife encounters.",
        fullDescription: "This immersive safari experience offers a deep dive into the culture and traditions of the Hadzabe tribe, combined with exciting wildlife viewing opportunities.",
        itinerary: [
            { day: 1, title: "Arrival in Arusha", description: "Welcome to Tanzania! Relax at the lodge." },
            { day: 2, title: "Arusha National Park", description: "Short game drive and walking safari." },
            { day: 3, title: "Tarangire National Park", description: "Explore the park known for its elephants." },
            { day: 4, title: "Lake Manyara National Park", description: "Famous for tree-climbing lions." },
            { day: 5, title: "Ngorongoro Crater", description: "Descend into the crater for wildlife viewing." },
            { day: 6, title: "Cultural Visit with Hadzabe Tribe", description: "Experience the traditional lifestyle of the Hadzabe people." },
            { day: 7, title: "Serengeti National Park", description: "Begin your safari adventure in the Serengeti." },
            { day: 8, title: "Serengeti Full Day", description: "Full day exploring different regions of the Serengeti." },
            { day: 9, title: "Departure", description: "Transfer back to Arusha for your departure flight." }
        ],
        accommodations: [
            { name: "Arusha Serena Hotel", type: "Luxury Lodge", nights: 1 },
            { name: "Tarangire Safari Lodge", type: "Safari Lodge", nights: 2 },
            { name: "Ngorongoro Sopa Lodge", type: "Crater Lodge", nights: 2 },
            { name: "Serengeti Wildlife Camp", type: "Tented Camp", nights: 3 } 
        ],
        included: [
            "All meals during the safari",
            "Bottled water and snacks",
            "Professional safari guide",
            "Private 4x4 safari vehicle",
            "Park entrance fees"
        ],
        excluded: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Personal expenses (e.g., souvenirs, tips)",
            "Optional activities not mentioned in the itinerary"
        ],
        bestTime: "June to October for the best wildlife viewing",
        difficulty: "Easy - suitable for all skill levels",
        minAge: "12 years old, family-friendly"
    },
    {
        id: 8,
        title:"Livestock Keeping (maasai)",
        image: "livestock-keeping.jpg",
        duration: "7 Days",
        groupSize: "Max 10 People",
        price: "$2,800",
        priceValue: 2800,
        rating: 4.6,
        category: "Cultural",
        highlights: ["Livestock Keeping", "Maasai Culture", "Wildlife Viewing", "Scenic Landscapes"],
        includes: ["Accommodation", "All Meals", "Cultural Guide", "Transfers"],
        description: "Immerse yourself in the Maasai culture and learn about their traditional livestock keeping practices while enjoying thrilling wildlife encounters.",
        fullDescription: "This unique safari experience offers a deep dive into the culture and traditions of the Maasai people, combined with exciting wildlife viewing opportunities in Tanzania's renowned national parks.",
        itinerary: [
            { day: 1, title: "Arrival in Arusha", description: "Welcome to Tanzania! Relax at the lodge." },
            { day: 2, title: "Arusha National Park", description: "Short game drive and walking safari." },
            { day: 3, title: "Tarangire National Park", description: "Explore the park known for its elephants." },
            { day: 4, title: "Lake Manyara National Park", description: "Famous for tree-climbing lions." },
            { day: 5, title: "Ngorongoro Crater", description: "Descend into the crater for wildlife viewing." },
            { day: 6, title: "Cultural Visit with Maasai Tribe", description: "Experience the traditional lifestyle of the Maasai people." },
            { day: 7, title: "Departure", description: "Transfer back to Arusha for your departure flight." }
        ],
        accommodations: [
            { name: "Arusha Serena Hotel", type: "Luxury Lodge", nights: 1 },
            { name: "Tarangire Safari Lodge", type: "Safari Lodge", nights: 2 },
            { name: "Ngorongoro Sopa Lodge", type: "Crater Lodge", nights: 2 },
            { name: "Serengeti Wildlife Camp", type: "Tented Camp", nights: 1 }
        ],
        included: [
            "All meals during the safari",
            "Bottled water and snacks",
            "Professional safari guide",
            "Private 4x4 safari vehicle",
            "Park entrance fees"
        ],
        excluded: [
            "International flights",
            "Visa fees",
            "Travel insurance",
            "Personal expenses (e.g., souvenirs, tips)",
            "Optional activities not mentioned in the itinerary"
        ],
        bestTime: "June to October for the best wildlife viewing",    
        difficulty: "Easy - suitable for all skill levels",
        minAge: "12 years old, family-friendly"
    }
  ];

  useEffect(() => {
    if (safariId) {
      const found = safariTours.find(safari => safari.id === parseInt(safariId));
      setSafari(found);
    }
  }, [safariId]);

  if (!safari) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Safari Not Found</h1>
          <p className="text-muted-foreground mb-6">The safari tour you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/safaris">Back to Safari Tours</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Luxury": return <Crown className="h-5 w-5" />;
      case "Adventure": return <Camera className="h-5 w-5" />;
      case "Budget": return <Tent className="h-5 w-5" />;
      default: return <MapPin className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header with Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={safari.image} 
          alt={safari.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Badge variant="secondary" className="bg-background/90 text-foreground flex items-center space-x-1">
              {getCategoryIcon(safari.category)}
              <span>{safari.category}</span>
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">{safari.title}</h1>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{safari.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{safari.groupSize}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{safari.rating}</span>
            </div>
          </div>
        </div>
        <div className="absolute top-8 right-8 bg-primary text-primary-foreground px-4 py-3 rounded-lg">
          <div className="font-bold text-xl">{safari.price}</div>
          <div className="text-sm">per person</div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Safari Overview</h2>
                <p className="text-muted-foreground mb-4">{safari.description}</p>
                <p className="text-muted-foreground mb-6">{safari.fullDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{safari.duration}</div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{safari.groupSize.split(' ')[1]}</div>
                    <div className="text-sm text-muted-foreground">Max Group Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{safari.rating}</div>
                    <div className="text-sm text-muted-foreground">Guest Rating</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Safari Highlights</h3>
                  <div className="flex flex-wrap gap-2">
                    {safari.highlights.map((highlight: string, index: number) => (
                      <Badge key={index} variant="outline">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Day by Day Itinerary</h2>
                <div className="space-y-4">
                  {safari.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border-l-2 border-primary pl-4 pb-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold -ml-6">
                          {day.day}
                        </div>
                        <h3 className="font-semibold">{day.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Accommodations */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Accommodations</h2>
                <div className="space-y-3">
                  {safari.accommodations.map((acc: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{acc.name}</h3>
                        <p className="text-sm text-muted-foreground">{acc.type}</p>
                      </div>
                      <Badge variant="secondary">{acc.nights} nights</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Included & Excluded */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">What's Included & Excluded</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-green-600">✓ Included</h3>
                    <ul className="space-y-2">
                      {safari.included.map((item: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-red-600">✗ Not Included</h3>
                    <ul className="space-y-2">
                      {safari.excluded.map((item: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <div className="w-4 h-4 border border-red-600 rounded-full mt-0.5 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Important Information</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Best Time to Visit:</span>
                    <span className="text-sm">{safari.bestTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Difficulty Level:</span>
                    <span className="text-sm">{safari.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Minimum Age:</span>
                    <span className="text-sm">{safari.minAge}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold">{safari.price}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>
                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg" asChild>
                    <Link to="/booking">Book This Safari</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-secondary hover:text-secondary hover:bg-white" asChild>
                    <Link to="/safari-quote">Get Custom Quote</Link>
                  </Button>
                </div>
                <div className="text-xs text-muted-foreground text-center">
                  Free cancellation up to 14 days • Best price guarantee
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{safari.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{safari.groupSize}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm">{safari.rating} Guest Rating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm">Professional Guide</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about this safari? Our travel specialists are here to help.
                </p>
                <Button variant="outline" className="w-full border-secondary hover:bg-white hover:text-secondary" asChild>
                  <Link to="/contact">Contact Specialist</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariDetails;