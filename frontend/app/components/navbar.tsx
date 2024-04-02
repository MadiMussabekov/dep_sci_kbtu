import Image from "next/image";
import React from "react";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[color:var(--background-color-blue)] p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image
          src="https://kbtu.edu.kz/images/logoWh.svg"
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#projects"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"
          >
            Проекты
          </a>
          <a
            href="#councils"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"
          >
            Научные советы
          </a>
          {/* Repeat for other navigation items */}
        </div>
        <div>
          <a
            href="#search"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
          >
            Поиск
          </a>
        </div>
      </div>
    </nav>
  );
}
