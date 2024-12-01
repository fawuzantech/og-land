import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Users, Wifi, Coffee, Presentation, ParkingCircle, Laptop } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Training Centers",
    description: "State-of-the-art training facilities equipped with modern technology and comfortable seating.",
  },
  {
    icon: Presentation,
    title: "Conference Rooms",
    description: "Spacious conference rooms for workshops, seminars, and corporate meetings.",
  },
  {
    icon: Laptop,
    title: "Computer Labs",
    description: "Advanced computer laboratories with the latest software and hardware for hands-on training.",
  },
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Reliable high-speed internet connectivity throughout our facilities.",
  },
  {
    icon: Coffee,
    title: "Break Areas",
    description: "Comfortable break rooms and refreshment areas for relaxation between sessions.",
  },
  {
    icon: Shield,
    title: "Security",
    description: "24/7 security monitoring and controlled access to ensure safety.",
  },
  {
    icon: ParkingCircle,
    title: "Parking",
    description: "Ample parking space available for all visitors and participants.",
  },
  {
    icon: Users,
    title: "Collaboration Spaces",
    description: "Open spaces designed for group work and networking.",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Facilities"
          subtitle="Modern facilities designed for optimal learning and collaboration"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <facility.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Location Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Central Location</h4>
              <p className="text-gray-600">Easily accessible from major transportation hubs</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Modern Infrastructure</h4>
              <p className="text-gray-600">Latest technology and equipment for optimal learning</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Comfortable Environment</h4>
              <p className="text-gray-600">Climate-controlled spaces with ergonomic furniture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}