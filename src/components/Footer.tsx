import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube} from "lucide-react";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[url('https://cdn0.iconfinder.com/data/icons/tourism-12/128/tourism-05-512.png')] bg-cover bg-center rounded-full flex items-center justify-center">
                <span className="text-white font-bold"></span>
              </div>
              <span className="text-xl font-bold">Tanzania Safari</span>
            </div>
            <p className="text-secondary-foreground/80">
              Discover the authentic beauty of Tanzania with our expertly crafted safari experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.tripadvisor.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <FaTripadvisor className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/destinations" className="block hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link to="/safaris" className="block hover:text-primary transition-colors">
                Safari Tours
              </Link>
              <Link to="/accommodations" className="block hover:text-primary  transition-colors">
                Accommodations
              </Link>
              <Link to="/about" className="block hover:text-primary transition-colors">
                About Tanzania
              </Link>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <div className="space-y-2">
              <div className="block hover:text-primary transition-colors cursor-pointer">Serengeti National Park</div>
              <div className="block hover:text-primary transition-colors cursor-pointer">Mount Kilimanjaro</div>
              <div className="block hover:text-primary transition-colors cursor-pointer">Zanzibar Island</div>
              <div className="block hover:text-primary transition-colors cursor-pointer">Ngorongoro Crater</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm">Arusha, Tanzania</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm">info@tanzaniasafari.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-secondary-foreground/80">
            © 2025 Tanzania Safari. All rights reserved. Experience the magic of Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;