import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OGLAND</h3>
            <p className="text-sm">
              Your trusted partner in building and construction, and IT services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-white">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Procurement Training</li>
              <li>IT Consulting</li>
              <li>Staff Recruitment</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Kasoa Millennium City Estatenpm run de
                
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +233 (558)110828
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contact@ogland.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} OGLAND. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;