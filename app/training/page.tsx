import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Clock, Award } from "lucide-react";

const courses = [
  {
    title: "Strategic Procurement Management",
    duration: "4 weeks",
    level: "Advanced",
    description: "Master strategic sourcing, supplier relationship management, and procurement analytics.",
  },
  {
    title: "Contract Management Essentials",
    duration: "3 weeks",
    level: "Intermediate",
    description: "Learn contract creation, negotiation, and lifecycle management.",
  },
  {
    title: "Supply Chain Optimization",
    duration: "6 weeks",
    level: "Advanced",
    description: "Comprehensive training in supply chain strategy and optimization techniques.",
  },
  {
    title: "Digital Procurement Fundamentals",
    duration: "2 weeks",
    level: "Beginner",
    description: "Introduction to e-procurement systems and digital transformation.",
  },
];

export default function TrainingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Training Programs"
          subtitle="Enhance your team's capabilities with our specialized training courses"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <p className="text-gray-600">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
            <p className="text-gray-600">Personalized attention and interactive learning environment.</p>
          </div>
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-600">Receive industry-recognized certifications upon completion.</p>
          </div>
        </div>
      </div>
    </div>
  );
}