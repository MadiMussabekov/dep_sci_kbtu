import Image from "next/image";
import React from "react";

import { FacultyCardParams } from "../interfaces/Card/facultyCardParams.interface";

export default function FacultyCard({
  imageUrl,
  facultyName,
  facultyDesc,
}: FacultyCardParams) {
  return (
    <div className="flex flex-col border border-solid border-[#DBDBDB] items-center justify-center mr-6 ml-6">
      <Image
        src={imageUrl}
        alt={`image of  ${facultyName} faculty`}
        width={220}
        height={200}
        className="mb-[27px] mt-[40px] mx-[30px]"
      />
      <p className="max-w-[223px] text-[16px] text-[#424242] mb-[13px] ml-[20px] mr-[37px] font-light">
        {facultyDesc}
      </p>
      <p className="block w-full border text-center border-[#DBDBDB] text-[20px] text-[#424242]">
        {facultyName}
      </p>
    </div>
  );
}
