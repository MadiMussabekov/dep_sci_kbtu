"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useTranslations } from "next-intl";

export default function Navbar({ locale: initialLocale }: { locale: string }) {
  const [language, setLanguage] = useState(initialLocale);

  const locales = ["en", "kk", "ru"] as const;
  const { useRouter, usePathname } = createSharedPathnamesNavigation({
    locales,
  });

  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Navbar");

  const handleLanguageChange = (newLocale: string) => {
    // Change it for UI
    setLanguage(newLocale);
    // Replace the URL with the new locale without changing the pathname
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    // Sync the `language` state whenever the `locale` prop changes
    setLanguage(initialLocale);
  }, [initialLocale]);

  return (
    <nav className="flex flex-col items-center justify-center w-full h-40 shadow">
      <div
        className={`flex items-center justify-between bg-[--background-color-blue] h-[50%] w-full px-8 text-white`}
      >
        <div className="flex ">
          <Image
            src="https://kbtu.edu.kz/images/logoWh.svg"
            alt=""
            width={150}
            height={80}
          />
          <div className={styles.switcher_container}>
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="focus:outline-none"
            >
              <option value="kk">KAZ</option>
              <option value="ru">RUS</option>
              <option value="en">ENG</option>
            </select>
          </div>
        </div>
        <div
          className={`text-xs lg:text-sm md:flex gap-3 items-center justify-center md:gap-6 hidden `}
        >
          <p>{t("projects")}</p>
          <p>{t("scientific_advice")}</p>
          <p>{t("phd_defence")}</p>
          <p>{t("scientists")}</p>
          <p>{t("scientist_profile")}</p>
          <p>{t("business_incubator")}</p>
          <p>{t("reg/auto")}</p>
        </div>

        <div className={`justify-center items-center md:hidden `}>
          <Image
            src="/dehaze-rounded.svg"
            alt="dropdown-icon"
            width={36}
            height={28}
          />
        </div>
      </div>
      <div className={styles.nav__bottom}>
        <form className={styles.search_bar} action="/search" method="GET">
          <div className={styles.search_bar_inside}>
            <input
              type="text"
              name="query"
              id="search-query"
              placeholder={t("search_placeholder")}
              aria-label="Search"
              className="text-[0.875rem]"
            />
            <button type="submit" aria-label="Submit Search">
              <div className={styles.search_icon_container}>
                <Image
                  src="/search_icon_white.svg"
                  alt="Search"
                  width={20}
                  height={20}
                />
              </div>
            </button>
          </div>
        </form>
        <div className="flex-center gap-2 lg:gap-6 w-full bg-white text-black text-xs lg:text-sm">
          {/* Using `md:` prefix to apply styles for medium screens and up */}
          <div className="p-2 font-light hidden md:block">
            <p className="text-sm font-light">{t("about_science")}</p>
          </div>

          <div className="p-2 font-light hidden md:block">
            <p className="text-sm cursor-pointer">{t("dept_sci_inov")}</p>
          </div>
          <div className="p-2 font-light hidden md:block">
            <p className="text-sm cursor-pointer">{t("institutions")}</p>
          </div>
          <div className="p-2 font-light hidden md:block">
            <p className="text-sm cursor-pointer">{t("centers_labs")}</p>
          </div>
          <div className="p-2 font-light hidden md:block">
            <p className="text-sm cursor-pointer">{t("equipment")}</p>
          </div>
          <div className="p-2 font-light hidden md:block">
            <p className="text-sm cursor-pointer">{t("newsletter")}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
