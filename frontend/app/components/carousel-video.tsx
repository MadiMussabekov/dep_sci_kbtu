"use client";
import React, { useState } from "react";
import Image from "next/image";

import { VideoCarouselParams } from "@/app/interfaces/Carousel/videoCarouselParams.interface";

const VideoCarousel: React.FC<VideoCarouselParams> = ({ videoInfo }) => {
  let [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = (event: MouseEvent) => {
    event.preventDefault();
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? videoInfo.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = (event: MouseEvent) => {
    event.preventDefault();
    setCurrentSlide((prevSlide) =>
      prevSlide === videoInfo.length - 1 ? 0 : prevSlide + 1
    );
  };

  const testClick = (event: MouseEvent) => {
    console.log("test");
  };

  return (
    <div className="overflow-hidden relative w-[580px] h-[380px] flex flex-col">
      <div
        className="flex transition-transform ease-out duration-300 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {videoInfo.map((video, ind) => (
          <div
            key={ind}
            className="flex-shrink-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${video.videoImagePreview})`,
            }}
          >
            <h1 className="relative font-bold text-black/30 text-[24px] top-0 left-0 max-w-[156px]">
              {video.videoTitle}
            </h1>

            <div className="flex items-center justify-center">
              <button type="button" onClick={testClick}>
                <Image
                  src="/svg/video-play-btn.svg"
                  alt="play button"
                  width={100}
                  height={100}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="absolute top-0 h-full w-full justify-between items-center flex px-10">
        
      </div> */}

      <div className="bg-[--background-color-yellow] ">
        <div className="flex justify-between items-center mx-5 p-2">
          <button type="button" onClick={previousSlide}>
            <Image
              src="/svg/arrow-left.svg"
              alt="arrow pointing to left"
              width={30}
              height={22}
            />
          </button>

          <div className="flex gap-5">
            {videoInfo.map((video, ind) => (
              <div
                key={ind}
                className={`bg-white rounded-full w-5 h-5 ${
                  currentSlide === ind ? "bg-transparent" : ""
                }`}
                style={{
                  border: currentSlide === ind ? "1px solid white" : "",
                }}
              ></div>
            ))}
          </div>

          <button type="button" onClick={nextSlide}>
            <Image
              src="/svg/arrow-right.svg"
              alt="arrow pointing to right"
              width={30}
              height={22}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
