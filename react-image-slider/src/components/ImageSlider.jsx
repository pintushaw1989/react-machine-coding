import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <img
        className="slide-image"
        src={images[index].url}
        alt={images[index].alt}
      />
      <div className="nav-buttons">
        <button onClick={prevSlide} className="prev">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="next">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="image-indicator">
        {images.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
