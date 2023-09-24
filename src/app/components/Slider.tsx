"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

type SliderProps = {
  slides: { image: string }[];
};

const Slider = ({ slides }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(slides) || slides.length === 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-width-[1240px] mx-auto">
      <h2 className="p-4 text-center text-2xl font-bold">Gallery</h2>
      <div className="relative flex justify-center p-4">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === currentSlide
                  ? "opacity-[1] duration-1000 ease-in"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute left-[30px] top-[50%] z-[2] cursor-pointer select-none text-white/70"
                size={50}
              />
              {index === currentSlide && (
                <Image src={slide.image} alt="" width={1440} height={600} />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute right-[30px] top-[50%] z-[2] cursor-pointer select-none text-white/70"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
