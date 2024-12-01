import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wrench,
  MonitorPlay,
  Settings,
  HardDrive,
  Satellite,
  Wifi,
  Plug,
  Sun,
  Tv,
  Key,
  Lock,
  Smartphone,
  HardHat,
  ClipboardList,
  DollarSign,
  ShieldCheck,
  Users,
  BarChart,
} from "lucide-react";

const services = [
  // General Services
  {
    title: "Economic Feasibility Studies",
    description: "Comprehensive analysis of economic viability using computer models.",
    icon: HardDrive,
  },
  {
    title: "Geotechnical and Environmental Assessment",
    description: "Detailed environmental and soil studies to ensure project sustainability.",
    icon: Wrench, // Replaced Tools with Wrench
  },
  {
    title: "Land Survey and Acquisition",
    description: "Professional surveying and assistance with land acquisition processes.",
    icon: Settings,
  },
  {
    title: "Labour Supply",
    description: "Provision of skilled and unskilled labor for various projects.",
    icon: MonitorPlay,
  },

  // Engineering Administration Services
  {
    title: "Electrical and Industrial Engineers",
    description: "Expertise in electrical systems, industrial processes, and stress analysis.",
    icon: HardHat,
  },
  {
    title: "Process and Structural Design",
    description: "Comprehensive process and structural evaluations, including corrosion protection.",
    icon: ClipboardList,
  },
  {
    title: "Civil and Structural Engineering",
    description: "Designs and evaluations for civil and structural projects.",
    icon: Settings,
  },

  // Procurement
  {
    title: "Procurement Management",
    description: "Technical specifications, bid solicitation, evaluation, and contract management.",
    icon: DollarSign,
  },
  {
    title: "Inspection and Test Witnessing",
    description: "Ensuring quality through material inspections and witnessing tests.",
    icon: ShieldCheck,
  },

  // Project Management
  {
    title: "Project Planning and Execution",
    description: "Comprehensive project plans, budget control, and scheduling.",
    icon: ClipboardList,
  },
  {
    title: "Construction Management",
    description: "Planning, supervision, and quality assurance for construction projects.",
    icon: Wrench, // Replaced Tools with Wrench
  },

  // Operations and Maintenance
  {
    title: "Start-Up and Training",
    description: "Personnel training, operations manuals, and start-up support.",
    icon: MonitorPlay,
  },
  {
    title: "Operations and Maintenance",
    description: "Ongoing support, contract operations, and maintenance services.",
    icon: Wrench, // Replaced Tools with Wrench
  },

  // Specialized Services
  {
    title: "CCTV and Electric Fencing",
    description: "Sales and installation of CCTV systems and electric fencing.",
    icon: ShieldCheck,
  },
  {
    title: "GPS Tracking Devices",
    description: "Sales and installation of GPS tracking for vehicles and motorbikes.",
    icon: Satellite,
  },
  {
    title: "Gate and Door Automation",
    description: "Automated solutions for gates and doors, ensuring convenience and security.",
    icon: Lock,
  },
  {
    title: "Fire Alarms",
    description: "Sales and installation of fire alarm systems for enhanced safety.",
    icon: Key,
  },
  {
    title: "Air Conditioning Systems",
    description: "Sales, installation, and maintenance of air conditioning units.",
    icon: Plug,
  },
  {
    title: "Satellite Decoders and TVs",
    description: "Sales and installation of satellite decoders and TVs.",
    icon: Tv,
  },
  {
    title: "Broadband and Networking",
    description: "Life broadband routers and networking solutions with installation.",
    icon: Wifi,
  },
  {
    title: "Solar Panels and Energy Solutions",
    description: "Sales and installation of solar energy systems for efficient power usage.",
    icon: Sun,
  },
  {
    title: "Electrical Wiring",
    description: "Wiring services for buildings and structures, ensuring compliance with standards.",
    icon: Wrench, // Replaced Tools with Wrench
  },
  {
    title: "Access Control Devices",
    description: "Sales and installation of modern access control solutions.",
    icon: Smartphone,
  },
  {
    title: "Electrical Appliances",
    description: "Sales and installation of a wide range of electrical appliances.",
    icon: HardDrive,
  },

  // New specific technical services offered by Ogland
  {
    title: "Engineering Consultancy Services",
    description: "From feasibility studies, project appraisal, design analysis, to supervision and facility management.",
    icon: ClipboardList,
  },
  {
    title: "Project Development & Execution",
    description: "Expertise in project management and execution from conceptualization to completion.",
    icon: BarChart,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions tailored to your business needs"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
