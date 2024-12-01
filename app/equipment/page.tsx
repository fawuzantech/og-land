import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Monitor, 
  Printer, 
  Server, 
  Wifi, 
  Camera, 
  Headphones, 
  Laptop,
  Projector,
  TabletSmartphone,
  Network,
  HardDrive,
  Router
} from "lucide-react";

const equipment = {
  training: [
    {
      icon: Monitor,
      name: "High-Resolution Displays",
      description: "27-inch 4K monitors for clear visual presentations",
      quantity: "30 units",
    },
    {
      icon: Laptop,
      name: "Training Laptops",
      description: "Latest-gen laptops with procurement software",
      quantity: "25 units",
    },
    {
      icon: Projector,
      name: "HD Projectors",
      description: "4K projectors for large-screen presentations",
      quantity: "5 units",
    },
    {
      icon: TabletSmartphone,
      name: "Tablets",
      description: "iPads for interactive learning sessions",
      quantity: "20 units",
    },
  ],
  infrastructure: [
    {
      icon: Server,
      name: "Servers",
      description: "High-performance servers for training environments",
      quantity: "4 units",
    },
    {
      icon: Network,
      name: "Network Equipment",
      description: "Enterprise-grade networking infrastructure",
      quantity: "Complete Setup",
    },
    {
      icon: Router,
      name: "Wireless Access Points",
      description: "High-speed wireless connectivity throughout",
      quantity: "10 units",
    },
    {
      icon: HardDrive,
      name: "Storage Systems",
      description: "NAS storage for training materials",
      quantity: "20TB Total",
    },
  ],
  peripherals: [
    {
      icon: Printer,
      name: "Multi-function Printers",
      description: "Network printers with scanning capability",
      quantity: "3 units",
    },
    {
      icon: Camera,
      name: "Webcams",
      description: "HD webcams for virtual training sessions",
      quantity: "30 units",
    },
    {
      icon: Headphones,
      name: "Headsets",
      description: "Professional-grade audio headsets",
      quantity: "30 units",
    },
    {
      icon: Wifi,
      name: "Internet Connectivity",
      description: "1Gbps dedicated internet connection",
      quantity: "Redundant Setup",
    },
  ],
};

export default function EquipmentPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Equipment"
          subtitle="State-of-the-art technology for optimal learning and performance"
          centered
        />

        {Object.entries(equipment).map(([category, items]) => (
          <div key={category} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold mb-8 capitalize">
              {category} Equipment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <item.icon className="h-12 w-12 text-primary mb-4" />
                    <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="bg-gray-50 px-3 py-2 rounded-md">
                      <span className="text-sm font-medium">Quantity: </span>
                      <span className="text-sm text-gray-600">{item.quantity}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Equipment Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Regular Maintenance</h4>
              <p className="text-gray-600">All equipment undergoes scheduled maintenance</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Latest Technology</h4>
              <p className="text-gray-600">Updated with the newest hardware and software</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Technical Support</h4>
              <p className="text-gray-600">24/7 support for all equipment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}