import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Users, Wifi, Coffee, Presentation, ParkingCircle, Laptop } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Head Office - Nigeria",
    description: "Located at KM 52/2900 Okereste, our head office spans over 1,250 sq. ft. of workspace, fully equipped for seamless operations.",
  },
  {
    icon: Building2,
    title: "Regional Office - Ghana",
    description: "Situated in Kasoa Millennium City Estate, our regional office offers modern infrastructure for local and international projects.",
  },
  {
    icon: Presentation,
    title: "Flexible Project Management",
    description: "Facilities designed to adapt to diverse project needs, from technical consulting to full-scale engineering teams.",
  },
  {
    icon: Laptop,
    title: "Advanced IT Infrastructure",
    description: "Modern communication systems and computing tools for operational excellence.",
  },
  {
    icon: Wifi,
    title: "High-Speed Connectivity",
    description: "Reliable internet and communication facilities to support efficient workflows.",
  },
  {
    icon: Coffee,
    title: "Comfortable Workspaces",
    description: "Ergonomic furniture and designated break areas for enhanced productivity.",
  },
  {
    icon: Shield,
    title: "Secure Environment",
    description: "24/7 monitored security systems ensuring the safety of staff and assets.",
  },
  {
    icon: ParkingCircle,
    title: "Accessible Parking",
    description: "Ample parking spaces available for employees and visitors.",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="pt-24 pb-20" style={{
      backgroundImage: `url('/images/facility1.jpg')`, 
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Facilities"
          subtitle="State-of-the-art infrastructure for engineering and project management"
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
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose OGLAND Facilities?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Centralized Operations</h4>
              <p className="text-gray-600">Strategically located offices for accessibility and efficiency.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Technological Excellence</h4>
              <p className="text-gray-600">Equipped with cutting-edge tools to support complex engineering tasks.</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Optimized Work Environment</h4>
              <p className="text-gray-600">Comfortable, secure, and collaborative spaces for peak performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
