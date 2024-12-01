import { CircleDollarSign, Users, MonitorPlay, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Procurement Training",
    description: "Comprehensive training programs to enhance your procurement team's capabilities and efficiency.",
    icon: CircleDollarSign,
  },
  {
    title: "Recruitment Services",
    description: "Expert talent acquisition for procurement, IT, and management positions.",
    icon: Users,
  },
  {
    title: "IT Consulting",
    description: "Strategic IT solutions to drive digital transformation and business growth.",
    icon: Code,
  },
  {
    title: "Corporate Training",
    description: "Customized training programs for professional development and skill enhancement.",
    icon: MonitorPlay,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solutions to help your business thrive in today's competitive landscape.
          </p>
        </div>
        
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
    </section>
  );
};

export default Services;