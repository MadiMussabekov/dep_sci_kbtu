import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-start justify-start flex-wrap bg-[color:var(--background-color-blue)] py-4 px-6 ">
      <Image
        src="https://kbtu.edu.kz/images/logoWh.svg"
        alt="Kbtu logo"
        width={200}
        height={200}
        className="mr-6"
      />
      <div className="flex flex-start flex-wrap grow  ">
        <p className="text-white font-extralight text-[26px] mr-1 ">©</p>
        <p className="text-white font-medium text-[12px] max-w-44 max-h-[2.125rem] mt-1">
          Казахстанско-Британский технический университет 2023. Все права
          защищены.
        </p>
      </div>
    </div>
  );
};

export default Footer;
