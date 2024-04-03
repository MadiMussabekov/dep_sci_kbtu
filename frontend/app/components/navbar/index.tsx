'use client'

import Image from "next/image";
import React from "react";
import styles from './style.module.css';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()



  return (
    // <nav className="flex items-center justify-between flex-wrap bg-[color:var(--background-color-blue)] p-6">
    //   <div className="flex items-center flex-shrink-0 text-white mr-6">
    //     <Image
    //       src="https://kbtu.edu.kz/images/logoWh.svg"
    //       alt=""
    //       width={200}
    //       height={200}
    //     />
    //   </div>
    //   <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    //     <div className="text-sm lg:flex-grow">
    //       <a
    //         href="#projects"
    //         className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"
    //       >
    //         Проекты
    //       </a>
    //       <a
    //         href="#councils"
    //         className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-200 mr-4"
    //       >
    //         Научные советы
    //       </a>
    //       {/* Repeat for other navigation items */}
    //     </div>
    //     <div>
    //       <a
    //         href="#search"
    //         className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
    //       >
    //         Поиск
    //       </a>
    //     </div>
    //   </div>
    // </nav>
    <nav className="flex flex-col items-center justify-center w-full h-40 shadow">
      <div className={styles.nav__top}>
        <Image
          src="https://kbtu.edu.kz/images/logoWh.svg"
          alt=""
          width={150}
          height={150}

        />
        <div className={styles.switcher_container}>
          <select>
            <option>KAZ</option>
            <option>RUS</option>
            <option>ENG</option>
          </select>
        </div>
        <div className={styles.navbar__elements}>
          <p>ПРОЕКТЫ</p>
          <p>НАУЧНЫЕ СОВЕТЫ</p>
          <p>PhD ЗАЩИТА</p>
          <p>УЧЕНЫЕ</p>
          <p>ПРОФИЛЬ УЧЕНОГО</p>
          <p>БИЗНЕС-ИНКУБАТОР</p>
          <p>РЕГИСТРАЦИЯ/АВТОМАТИЗАЦИЯ</p>
        </div>
      </div>
      <div className={styles.nav__bottom}>
        <form className={styles.search_bar} action="/search" method="GET">
          <div className={styles.search_bar_inside}>
            <input type="text" name="query" id="search-query" placeholder="KBTU / Наука / О науке" aria-label="Search" />
            <button type="submit" aria-label="Submit Search">
              <div className={styles.search_icon_container}>
                <Image
                  src="/search_icon_white.svg"
                  alt="Search"
                  width={20}
                  height={20} />
              </div>
            </button>
          </div>
        </form>
        <div className={`${styles.navbar__elements}`}>
        <div className={pathname === "/" ? `${styles.highlighted}` : ``}><p>О НАУКЕ</p></div>
          <div><p>ДЕПАРТАМЕНТ НАУКИ И ИННОВАЦИИ</p></div>
          <div><p>ИНСТИТУТЫ</p></div>
          <div><p>ЦЕНТРЫ И ЛАБОРАТОРИИ</p></div>
          <div><p>ОБОРУДОВАНИЯ</p></div>
          <div><p>ВЕСТНИК</p></div>
        </div>
      </div>
    </nav>
  );
}
