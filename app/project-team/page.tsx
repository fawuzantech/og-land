"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

const projectDirectors = [
  {
    name: "James Wilson",
    position: "Senior Project Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    description: "15+ years experience in managing large-scale procurement projects",
    expertise: ["Strategic Planning", "Risk Management", "Team Leadership"],
    email: "james.wilson@proserve.com",
    linkedin: "linkedin.com/in/jameswilson",
  },
  {
    name: "Maria Rodriguez",
    position: "Technical Project Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    description: "Expert in IT infrastructure and digital transformation projects",
    expertise: ["Technical Architecture", "Digital Transformation", "Agile Methodologies"],
    email: "maria.r@proserve.com",
    linkedin: "linkedin.com/in/mariarodriguez",
  },
];

const teamMembers = {
  procurement: [
    {
      name: "Alex Chen",
      position: "Senior Procurement Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      expertise: ["Contract Negotiation", "Supplier Management"],
    },
    {
      name: "Sarah Miller",
      position: "Procurement Analyst",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      expertise: ["Data Analysis", "Cost Optimization"],
    },
  ],
  technical: [
    {
      name: "David Kumar",
      position: "Solutions Architect",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
      expertise: ["System Design", "Cloud Architecture"],
    },
    {
      name: "Lisa Zhang",
      position: "Technical Lead",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
      expertise: ["Project Management", "Technical Implementation"],
    },
  ],
  consulting: [
    {
      name: "Michael Brown",
      position: "Senior Consultant",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      expertise: ["Business Strategy", "Process Optimization"],
    },
    {
      name: "Emma Davis",
      position: "Business Analyst",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      expertise: ["Requirements Analysis", "Process Mapping"],
    },
  ],
};

export default function ProjectTeamPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Project Directors & Team"
          subtitle="Meet our experienced project leaders and specialists"
          centered
        />

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Project Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectDirectors.map((director, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-32 h-32 mx-auto md:mx-0 rounded-full overflow-hidden">
                      <Image
                        src={director.image}
                        alt={director.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{director.name}</h3>
                      <p className="text-primary mb-2">{director.position}</p>
                      <p className="text-gray-600 mb-4">{director.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Areas of Expertise:</h4>
                        <div className="flex flex-wrap gap-2">
                          {director.expertise.map((skill, i) => (
                            <span
                              key={i}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={`mailto:${director.email}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-primary"
                        >
                          <Mail className="h-4 w-4" />
                          <span>Email</span>
                        </a>
                        <a
                          href={`https://${director.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-600 hover:text-primary"
                        >
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Our Team</h3>
          <Tabs defaultValue="procurement" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="procurement">Procurement Team</TabsTrigger>
              <TabsTrigger value="technical">Technical Team</TabsTrigger>
              <TabsTrigger value="consulting">Consulting Team</TabsTrigger>
            </TabsList>
            {Object.entries(teamMembers).map(([category, members]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {members.map((member, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold">{member.name}</h4>
                            <p className="text-primary mb-2">{member.position}</p>
                            <div className="flex flex-wrap gap-2">
                              {member.expertise.map((skill, i) => (
                                <span
                                  key={i}
                                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}