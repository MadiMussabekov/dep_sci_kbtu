"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import FacultyCard from "@/app/components/faculty-card";
import { FacultyCardCarouselParams } from "@/app/interfaces/Card/facultyCardParams.interface";
import styles from "./style.module.css";

const CardCarousel: React.FC<FacultyCardCarouselParams> = ({ facultyInfo, cardsNum }) => {
  // Assume we have a constant number of cards to show at a time
  const cardsPerPage = cardsNum;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate the total number of slides
  const totalSlides = Math.ceil(facultyInfo.length / cardsPerPage);

  const [animating, setAnimating] = useState(false);

  const handleSlideChange = (nextIndex: any) => {
    if (!animating) {
      setAnimating(true); // Start animation
      setTimeout(() => {
        setCurrentSlide(nextIndex); // Change the slide after the fade-out completes
        setAnimating(false); // Reset animation state
      }, 500); // This should match the duration of your fade-out animation
    }
  };

  const previousSlide = () => {
    const nextIndex = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    handleSlideChange(nextIndex);
  };

  const nextSlide = () => {
    const nextIndex = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    handleSlideChange(nextIndex);
  };

  useEffect(() => {
    startIdx = currentSlide * cardsPerPage;
    endIdx = startIdx + cardsPerPage;

    console.log(facultyInfo);
    console.log(startIdx, endIdx, facultyInfo.slice(startIdx, endIdx));
  }, [currentSlide]);
  // Determine the cards to show on the current slide
  let startIdx = currentSlide * cardsPerPage;
  let endIdx = startIdx + cardsPerPage;

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-x-hidden gap-10">
      {/* Cards display */}

      <div className={cardsNum === 1 ? "" : 'flex w-[100%] items-center justify-center'}>
        <div className="flex justify-between items-center w-[83%]">
          {facultyInfo.slice(startIdx, endIdx).map((faculty, index) => (
            <div key={index} className={`flex-shrink-0 ${animating ? styles.fadeOut : styles.fadeIn}`}>
              <FacultyCard {...faculty} />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation controls */}

      <div className="w-full h-14 text-white bg-[#F3C583] flex justify-between items-center px-[7rem] lg:px-[10rem]">
        <button onClick={previousSlide} className='w-[1.5rem]'>
          <Image src="/svg/arrow-left.svg" alt="Previous" width={30} height={22} />
        </button>

        <span>{`${startIdx + 1}-${endIdx} of ${facultyInfo.length}`}</span>

        <button onClick={nextSlide} className="w-[1.5rem]">
          <Image src="/svg/arrow-right.svg" alt="Next" width={30} height={22} />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
