"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const directors = [
  {
    name: "JOHNSON Adebayo",
    position: "Managing Director",
    image: "https://via.placeholder.com/150", // Replace with actual image
    description: "Oversees company-wide operations and strategy implementation.",
    expertise: ["Leadership", "Strategic Planning", "Operations Management"],
  },
  {
    name: "Engr Marlande Adedotum",
    position: "Project Director",
    image: "https://via.placeholder.com/150", // Replace with actual image
    description: "Experienced in leading large-scale engineering projects.",
    expertise: ["Project Management", "Engineering Design", "Team Coordination"],
  },
];

const teamMembers = {
  site: [
    {
      name: "Charles Hammond",
      position: "Site Engineer",
      image: "https://via.placeholder.com/150", // Replace with actual image
      expertise: ["Construction Supervision", "Site Coordination"],
    },
    {
      name: "Victor Ferammi",
      position: "Field Engineer",
      image: "https://via.placeholder.com/150", // Replace with actual image
      expertise: ["Field Operations", "Safety Management"],
    },
    {
      name: "Laila Abdulmalik",
      position: "Site Safety Officer",
      image: "https://via.placeholder.com/150", // Replace with actual image
      expertise: ["Workplace Safety", "Risk Assessment"],
    },
  ],
  process: [
    {
      name: "Charles Samuel",
      position: "Process Engineer",
      image: "https://via.placeholder.com/150", // Replace with actual image
      expertise: ["Process Optimization", "Workflow Analysis"],
    },
  ],
};

export default function ProjectTeamPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Board of Directors"
          subtitle="Meet our experienced leaders driving project success"
          centered
        />

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">Board Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Project Team</h3>
          <Tabs defaultValue="site" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="site">Site Team</TabsTrigger>
              <TabsTrigger value="process">Process Team</TabsTrigger>
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
