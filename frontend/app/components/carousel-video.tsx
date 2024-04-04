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

  return (
    <div className="overflow-hidden relative w-[580px] h-[380px]">
      <div
        // BROKEN SOMEWHERE HERE
        className="flex transition-transform ease-out duration-300 w-full h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {videoInfo.map((video, ind) => (
          <div
            key={ind}
            className={`w-full min-w-[580px]`}
            style={{ display: ind === currentSlide ? "block" : "none" }}
          >
            <Image
              src={`${video.videoImagePreview}`}
              alt="video preview image"
              fill
            />
            <h1 className="relative font-bold text-black/30 text-[24px] top-0 left-0 max-w-[156px] z-10">
              {video.videoTitle}
            </h1>
            <button className="block mx-auto mt-auto z-10">
              <Image
                src="/svg/video-play-btn.svg"
                alt="play button"
                width={100}
                height={100}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex px-10">
        <button type="button" onClick={previousSlide}>
          <Image
            src="/svg/arrow-left.svg"
            alt="arrow pointing to left"
            width={40}
            height={32}
          />
        </button>

        <button type="button" onClick={nextSlide}>
          <Image
            src="/svg/arrow-right.svg"
            alt="arrow pointing to right"
            width={40}
            height={32}
          />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
