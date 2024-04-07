import React, { useState } from "react";
import Image from "next/image";
// ... other imports as needed

import { FacultyCardCarouselParams } from "@/app/interfaces/Card/facultyCardParams.interface";
import FacultyCard from "@/app/components/faculty-card";

const CardCarousel: React.FC<FacultyCardCarouselParams> = ({ facultyInfo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardWidth = 1180 / 4; // Adjust as needed based on your card's CSS

  const totalSlides = Math.ceil(facultyInfo.length / 4); // Total number of slides, each containing 4 cards

  const previousSlide = () => {
    setCurrentSlide((prev) => {
      return prev === 0 ? totalSlides - 1 : prev - 1;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      return prev === totalSlides - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden gap-10">
      <div
        className="flex transition-transform ease-out duration-150 w-full h-full"
        style={{ transform: `translateX(-${currentSlide * cardWidth * 4}px)` }}
      >
        {facultyInfo.map((faculty, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-full"
            style={{ width: `${cardWidth}px` }}
          >
            <FacultyCard {...faculty} />
          </div>
        ))}
      </div>

      <div className="w-full h-14 bg-[#F3C583] flex justify-between items-center p-2">
        <button onClick={previousSlide}>
          <Image
            src="/svg/arrow-left.svg"
            alt="Previous"
            width={30}
            height={22}
          />
        </button>

        <span className="text-white">{`${currentSlide * 4 + 1}-${Math.min(
          (currentSlide + 1) * 4,
          facultyInfo.length
        )}/${facultyInfo.length}`}</span>

        <button onClick={nextSlide}>
          <Image src="/svg/arrow-right.svg" alt="Next" width={30} height={22} />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
