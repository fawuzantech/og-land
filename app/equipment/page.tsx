"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";

const equipment = {
  training: [
    {
      image: "/images/display.jpg",
      name: "High-Resolution Displays",
      description: "27-inch 4K monitors for clear visual presentations",
      quantity: "30 units",
    },
    {
      image: "/images/decoder.jpg",
      name: "Decoders",
      description: "Latest-gen laptops with procurement software",
      quantity: "25 units",
    },
    {
      image: "/images/cams.jpg",
      name: "HD CCTV Cameras",
      description: "4K Cameras for security",
      quantity: "5 units",
    },
    {
      image: "/images/cam30.jpg",
      name: "CCTV camera",
      description: "CCTV Camera",
      quantity: "20 units",
    },
  ],
  peripherals: [
    {
      image: "/images/broadband.jpg",
      name: "Broadbands",
      description: "Redundant setup",
      quantity: "3 units",
    },
    {
      image: "/images/band.jpg",
      name: "Mobile Wifi",
      description: "HD webcams for virtual training sessions",
      quantity: "30 units",
    },
    {
      image: "/images/dish.jpg",
      name: "Satellite Dish",
      description: "Professional-grade audio headsets",
      quantity: "30 units",
    },
    {
      image: "/images/band1.jpg",
      name: "Internet Connectivity",
      description: "1Gbps dedicated internet connection",
      quantity: "Redundant Setup",
    },
  ],
  models: [
    {
      name: "Air Compressor",
      model: "Hollman",
      quantity: "2",
      age: "4 years",
      image: "/images/compressor.jpg", // Unsplash image for Air Compressor
    },
    {
      name: "Jack Hammer",
      model: "Hollman",
      quantity: "T",
      age: "5 fr",
      image: "/images/jackhammer.jpg", // Unsplash image for Jack Hammer
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
      image: "/images/scaffold.jpg", // Unsplash image for Scaffold Plank
    },
    {
      name: "Crane 60 Tons",
      model: "Amenca",
      quantity: "14",
      age: "10413",
      image: "/images/crane.jpg", // Unsplash image for Crane
    },
    {
      name: "Welding Machine",
      model: "Linto",
      description: "Electric welding machine",
      age: "2428",
      image: "/images/welding.jpg", // Unsplash image for Welding Machine
    },
    {
      name: "Drilling Machine",
      model: "Bosch",
      quantity: "2",
      origin: "German Product",
      age: "ما",
      image:"/images/drill.jpg", // Unsplash image for Drilling Machine
    },
    {
      name: "Cable Tester",
      model: "China Cat",
      quantity: "4",
      origin: "China",
      age: "3 years",
      image: "/images/cabletester.jpg", // Unsplash image for Cable Tester
    },
    {
      name: "Cutting Machine",
      model: "China",
      quantity: "4",
      description: "With Disc",
      age: "673",
      image: "/images/cuttingmachine.jpg", // Unsplash image for Cutting Machine
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
    <div className="pt-24 pb-20">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryItems.map((item, i) => (
                    <Card key={i}>
                      <div className="relative h-48">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-t-lg"
                          onError={(e) =>
                            (e.target.src = "/images/placeholder.jpg") // Fallback image
                          }
                        />
                      </div>
                      <CardContent className="pt-6">
                        <h4 className="text-xl font-semibold mb-2">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="bg-gray-50 px-3 py-2 rounded-md mb-4">
                          <span className="text-sm font-medium">Quantity: </span>
                          <span className="text-sm text-gray-600">{item.quantity}</span>
                        </div>
                        <a
                          href={`https://wa.me/23558110828?text=Hi! I am interested in ${item.name}. Can you provide more details?`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition inline-block"
                        >
                          Chat on WhatsApp
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          >
            &#8594;
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {categories.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentCategory === index ? "bg-primary" : "bg-gray-400"
              }`}
              onClick={() => setCurrentCategory(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
