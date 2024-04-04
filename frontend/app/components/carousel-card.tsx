import React from "react";

import FacultyCard from "./faculty-card";

import Image from "next/image";

import { FacultyCardCarouselParams } from "@/app/interfaces/Card/facultyCardParams.interface";

const CardCarousel: React.FC<FacultyCardCarouselParams> = ({ facultyInfo }) => {
  return (
    <div className="w-full flex flex-col flex-wrap ">
      {/* <div className="bg-[--background-color-blue] flex flex-wrap mb-[40px] items-center w-full h-[220px]">
        <h1 className="text-[40px] font-medium text-[#FFFFFF] mx-[126px]">
          ПРОЕКТЫ
        </h1>
        <a href="#!">
          <Image
            src="/svg/arrow-right.svg"
            alt="arrow pointing to right"
            width={40}
            height={10}
          />
        </a>
      </div> */}

      <div className="w-full flex items-center justify-center flex-nowrap">
        {facultyInfo.map((faculty, index) => (
          <FacultyCard key={index} {...faculty}></FacultyCard>
        ))}
      </div>
      <div className="bg-[--background-color-yellow] h-[56px] w-full flex justify-between items-center px-[150px] mt-[40px]">
        <a href="#!">
          <Image
            src="/svg/arrow-left.svg"
            alt="arrow pointing to left"
            width={40}
            height={32}
          />
        </a>

        {/* FIX LATER */}
        <p className="text-[20px] font-medium text-white">1-4/16</p>

        <a href="#!">
          <Image
            src="/svg/arrow-right.svg"
            alt="arrow pointing to right"
            width={40}
            height={32}
            className="fill-white"
          />
        </a>
      </div>
    </div>
  );
};

export default CardCarousel;
