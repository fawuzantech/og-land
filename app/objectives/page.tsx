import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users, Lightbulb, Shield, Globe, Award, Heart } from "lucide-react";

const objectives = [
  {
    icon: Target,
    title: "Excellence in Service",
    description: "Deliver outstanding training and consulting services that exceed client expectations.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Help organizations achieve sustainable growth through effective procurement and IT solutions.",
  },
  {
    icon: Users,
    title: "Talent Development",
    description: "Foster professional growth and development of procurement and IT professionals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Drive innovation in procurement practices and technology implementation.",
  },
  {
    icon: Shield,
    title: "Best Practices",
    description: "Promote industry best practices and standards in procurement and IT management.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Expand our reach to serve organizations worldwide with localized expertise.",
  },
  {
    icon: Award,
    title: "Industry Leadership",
    description: "Maintain our position as industry leaders in procurement training and IT services.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Ensure long-term success and satisfaction of our clients through dedicated support.",
  },
];

export default function ObjectivesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Objectives"
          subtitle="Driving excellence and innovation in procurement and IT services"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {objectives.map((objective, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <objective.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Commitment</h3>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              We are committed to helping organizations optimize their procurement processes,
              develop their talent, and leverage technology effectively to achieve their business objectives.
            </p>
            <p className="text-gray-600">
              Through continuous innovation and dedication to excellence, we strive to be the
              preferred partner for organizations seeking to transform their operations and achieve
              sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
