import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ProServe's procurement training transformed our operations and improved efficiency by 40%.",
    author: "Sarah Johnson",
    position: "Procurement Director",
    company: "Tech Solutions Inc.",
  },
  {
    quote: "Their recruitment services helped us build a world-class IT team in record time.",
    author: "Michael Chen",
    position: "CTO",
    company: "Innovation Labs",
  },
  {
    quote: "The IT consulting services provided strategic insights that drove our digital transformation.",
    author: "Emma Williams",
    position: "Operations Manager",
    company: "Global Logistics Co.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Client Success Stories"
          subtitle="Hear from organizations we've helped transform"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-primary">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}