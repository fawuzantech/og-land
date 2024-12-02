"use client"
import { useState } from "react";

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "High-performance smartphone with stunning display.",
      price: "$499",
      image: "/images/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      description: "Lightweight laptop with powerful features.",
      price: "$899",
      image: "/images/laptop.jpg",
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise-cancelling headphones for immersive sound.",
      price: "$199",
      image: "/images/headphones.jpg",
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "Track your fitness and stay connected.",
      price: "$299",
      image: "/images/smartwatch.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      <div className="relative w-full overflow-hidden">
        {/* Slider */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-full flex-shrink-0 p-4 flex justify-center"
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{product.price}</span>
                    <button className="bg-primary text-white px-4 py-2 rounded">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
