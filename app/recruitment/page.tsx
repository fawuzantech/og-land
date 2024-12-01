import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Search, HandshakeIcon } from "lucide-react";

export default function RecruitmentPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Recruitment Services"
          subtitle="Find the perfect talent for your organization"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Talent Sourcing</h3>
              <p className="text-gray-600">
                Access our extensive network of qualified professionals in procurement and IT.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Screening & Assessment</h3>
              <p className="text-gray-600">
                Rigorous evaluation process to ensure the perfect fit for your organization.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <HandshakeIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Placement & Support</h3>
              <p className="text-gray-600">
                End-to-end support from initial placement to onboarding and beyond.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Recruitment Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Understanding Requirements",
                description: "Detailed analysis of your needs and culture",
              },
              {
                step: "2",
                title: "Candidate Search",
                description: "Thorough screening and shortlisting",
              },
              {
                step: "3",
                title: "Interview Process",
                description: "Coordinated interviews and assessments",
              },
              {
                step: "4",
                title: "Placement",
                description: "Offer management and onboarding support",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}