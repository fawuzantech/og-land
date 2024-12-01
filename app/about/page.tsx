import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every service we deliver, ensuring the highest standards of quality.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building lasting relationships with our clients through trust and collaboration.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Embracing new technologies and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients worldwide with localized expertise and global best practices.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About ProServe"
          subtitle="Your trusted partner in business excellence"
          centered
        />

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-600 mb-6">
            ProServe is a leading provider of procurement training, recruitment services, and IT solutions. 
            With over a decade of experience, we've helped organizations across the globe optimize their 
            operations and achieve sustainable growth.
          </p>
          <p className="text-gray-600">
            Our team of experts brings together deep industry knowledge and practical experience to 
            deliver solutions that drive real business value. We're committed to your success and 
            work closely with you to understand your unique challenges and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary">2012</h4>
                <p className="text-gray-600">Founded with a vision to transform procurement training</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary">2015</h4>
                <p className="text-gray-600">Expanded services to include IT consulting and recruitment</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary">2018</h4>
                <p className="text-gray-600">Launched global operations serving clients in 20+ countries</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary">2023</h4>
                <p className="text-gray-600">Recognized as industry leader in procurement training and IT services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}