import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const stats = [
  { number: "500+", label: "Clients Served" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "50+", label: "Expert Trainers" },
  { number: "1000+", label: "Successful Placements" },
];

export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Impact in Numbers"
          subtitle="Delivering excellence through measurable results"
          centered
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-none shadow-none">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}