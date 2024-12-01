import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const executives = [
  {
    name: "Sarah Anderson",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    description: "With over 20 years of experience in procurement and IT consulting.",
  },
  {
    name: "Michael Roberts",
    position: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    description: "Expert in operational excellence and business transformation.",
  },
  {
    name: "Emily Chen",
    position: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
    description: "Leading innovation in IT solutions and digital transformation.",
  },
];

const directors = [
  {
    name: "David Thompson",
    position: "Board Chairman",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
    description: "Former CEO of Global Tech Solutions with extensive industry experience.",
  },
  {
    name: "Patricia Miller",
    position: "Board Member",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    description: "Expert in corporate governance and strategic planning.",
  },
  {
    name: "Robert Chang",
    position: "Board Member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    description: "Specializes in international business development.",
  },
  {
    name: "Lisa Martinez",
    position: "Board Member",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    description: "Leader in procurement transformation and innovation.",
  },
];

export default function ManagementPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Leadership Team"
          subtitle="Meet the experts driving our vision forward"
          centered
        />

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Executive Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-1">{executive.name}</h3>
                  <p className="text-primary text-center mb-2">{executive.position}</p>
                  <p className="text-gray-600 text-center">{executive.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {directors.map((director, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-1">{director.name}</h3>
                  <p className="text-primary text-center mb-2">{director.position}</p>
                  <p className="text-gray-600 text-center text-sm">{director.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}