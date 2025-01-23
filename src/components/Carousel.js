import React, { useState, useEffect } from "react";

const Carousel = ({
  slides = [],
  buttonColor = "bg-red-500",
  autoScrollDelay = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoScrollDelay);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length, autoScrollDelay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center h-40 md:h-60 text-white px-6 md:px-12"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" p-4 md:p-6 rounded-lg">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg mb-4">{slide.subtitle}</p>
              <button
                className={`${buttonColor} text-white px-4 py-2 md:px-6 md:py-3 rounded-lg`}
                onClick={() => (window.location.href = slide.buttonLink)}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-2 w-12 h-12 rounded-full hover:bg-opacity-100 focus:outline-none"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-2 w-12 h-12 rounded-full hover:bg-opacity-100 focus:outline-none"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-yellow-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
