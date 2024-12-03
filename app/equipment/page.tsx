"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const equipment = {
  // ...other equipment categories
  models: [
    {
      name: "Air Compressor",
      model: "Hollman",
      quantity: "2",
      age: "4 years",
      image: "/images/compressor_.jpg",
    },
    {
      name: "Jack Hammer",
      model: "Hollman",
      quantity: "1",
      age: "5 fr",
      image: "/images/jackham_.jpg",
    },
    {
      name: "Bulldozer D8 R",
      model: "CAT 3406",
      quantity: "2",
      age: "27 years",
      image: "/images/bulldozer.jpg", 
    },
    {
      name: "Scaffold Pins",
      model: "1Ron",
      quantity: "1,500",
      age: "64 years",
      image: "/images/scaffoldpins.jpg", 
    },
    {
      name: "Scaffold Plank",
      model: "IRON",
      quantity: "1820",
      age: "46 months",
      image: "/images/scaffoldplank.jpg",
    },
    {
      name: "Crane 60 Tons",
      model: "Amenca",
      quantity: "14",
      age: "10413",
      image: "/images/crane.jpg",
    },
    {
      name: "Welding Machine",
      model: "Linto",
      description: "Electric welding machine",
      age: "2428",
      image: "/images/weldingmachine.jpg",
    },
    {
      name: "Drilling Machine",
      model: "Bosch",
      quantity: "2",
      origin: "German Product",
      age: "ما",
      image:"/images/drillingmachine.jpg",
    },
    {
      name: "Cable Tester",
      model: "China Cat",
      quantity: "4",
      origin: "China",
      age: "3 years",
      image: "/images/cabletester.jpg",
    },
    {
      name: "Pliers",
      model: "China",
      quantity: "5",
      description: "pliers available",
      age: "3yrs",
      image: "/images/screwdrivers_.jpg",
    },
    {
      name: "Drilling Bit",
      model: "China",
      quantity: "30",
      age: "5yrs",
      image: "/images/drillingbit.jpg",
    },
    {
      name: "Spinners",
      model: "China",
      quantity: "50",
      age: "6yrs",
      image: "/images/spanners.jpg",
    },
    {
      name: "Snedge Hammer",
      model: "China",
      quantity: "6",
      age: "4yrs",
      image: "/images/snedgehammers.jpg",
    },
    {
      name: "Signal Finder",
      model: "America",
      quantity: "3",
      age: "5yrs",
      image: "/images/signalfinder.jpg",
    },
    {
      name: "ScrewDrivers",
      model: "America",
      quantity: "100",
      age: "6yrs",
      image: "/images/screwdrivers_.jpg",
    },
  ],
};

export default function EquipmentPage() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const categories = Object.keys(equipment);
  const items = Object.values(equipment);

  const handlePrev = () => {
    setCurrentCategory((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentCategory((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Equipment"
          subtitle="State-of-the-art technology for optimal learning and performance"
          centered
        />

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentCategory * 100}%)`,
            }}
          >
            {items.map((categoryItems, index) => (
              <div key={index} className="min-w-full flex-shrink-0 p-4">
                <h3 className="text-2xl font-bold mb-8 capitalize text-center">
                  {categories[index]} Equipment
                </h3>
                
                {/* Models Section with Flexbox */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {categoryItems.map((item, i) => (
                    <Card key={i} className="border border-gray-200 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                      <div className="relative h-48 w-full"> {/* Fixed height for consistent image sizing */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-center object-contain bg-white" // Changed to object-contain
                          
                          
                        />
                      </div>
                      <CardContent className="p-4 bg-white">
                        <h4 className="text-lg font-bold mb-2 text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3 min-h-[40px]">
                          {item.description || `Model: ${item.model}`}
                        </p>
                        <div className="bg-gray-100 px-3 py-2 rounded-md mb-3 text-sm">
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-700">Quantity:</span>
                            <span className="text-gray-600">{item.quantity || 'N/A'}</span>
                          </div>
                        </div>
                        <a
                          href={`https://wa.me/233558110828?text=Hi! I am interested in ${item.name}. Can you provide more details?`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-center bg-green-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition-colors"
                        >
                          Inquire on WhatsApp
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}