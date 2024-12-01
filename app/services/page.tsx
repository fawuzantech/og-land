import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, Code, MonitorPlay, Users, BarChart, Building, Network, Shield } from "lucide-react";

const services = [
  {
    title: "Procurement Training",
    description: "Comprehensive training programs covering strategic sourcing, contract management, and supplier relationship management.",
    icon: CircleDollarSign,
  },
  {
    title: "IT Consulting",
    description: "Expert guidance on digital transformation, cloud migration, and technology stack optimization.",
    icon: Code,
  },
  {
    title: "Recruitment Services",
    description: "End-to-end talent acquisition solutions for technical and procurement professionals.",
    icon: Users,
  },
  {
    title: "Corporate Training",
    description: "Customized training programs for professional development and leadership skills.",
    icon: MonitorPlay,
  },
  {
    title: "Business Analytics",
    description: "Data-driven insights to optimize procurement processes and business operations.",
    icon: BarChart,
  },
  {
    title: "Enterprise Solutions",
    description: "Implementation of procurement and management software solutions.",
    icon: Building,
  },
  {
    title: "Network Infrastructure",
    description: "Design and implementation of secure and scalable network solutions.",
    icon: Network,
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security assessments and implementation of security measures.",
    icon: Shield,
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