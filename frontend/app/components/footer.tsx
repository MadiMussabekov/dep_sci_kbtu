import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-start flex-wrap bg-[color:var(--background-color-blue)] p-6">
      <Image
        src="https://kbtu.edu.kz/images/logoWh.svg"
        alt="Kbtu logo"
        width={200}
        height={200}
        className="mr-6"
      />
      <div className="flex flex-start flex-wrap grow">
        <p className="text-white font-extralight text-[26px]">©</p>
        <p className="text-white font-medium text-[10px] max-w-[140px] ">
          Казахстанско-Британский технический университет 2023. Все права
          защищены.
        </p>
      </div>
    </div>
  );
};

export default Footer;
