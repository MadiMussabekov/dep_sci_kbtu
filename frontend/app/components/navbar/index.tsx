"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar({ locale: initialLocale }: { locale: string }) {
  const [toggleDropdown, setToggleDropdown] = useState(true);

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
    <nav className={`${styles.navbar} h-40 shadow`}>
      <div
        className={`flex items-center justify-between md:pl-0 md:justify-center bg-[--background-color-blue] h-[50%] w-full pr-8 text-white `}
      >
        <div className="flex-center ml-7">
          <Image
            src="https://kbtu.edu.kz/images/logoWh.svg"
            alt=""
            width={150}
            height={80}
          />

          <div className={`flex-center mx-[2rem] border border-white`}>
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="w-[90px] h-full focus:outline-none bg-transparent px-4 py-3 text-[0.75rem] text-white"
              style={{ borderRight: "12px solid transparent" }}
            >
              <option value="kk">KAZ</option>
              <option value="ru">RUS</option>
              <option value="en">ENG</option>
            </select>
          </div>
        </div>
        <div
          className={`${styles.desktopMenu} text-xs lg:text-sm gap-2 items-center justify-center lg:gap-6`}
        >
          <p>{t("projects")}</p>
          <p>{t("scientific_advice")}</p>
          <p>{t("phd_defence")}</p>
          <p>{t("scientists")}</p>
          <p>{t("scientist_profile")}</p>
          <p>{t("business_incubator")}</p>
          <p>{t("reg/auto")}</p>
        </div>

        <div className={`${styles.dropdownIcon}`}>
          <Image
            src="/dehaze-rounded.svg"
            alt="dropdown-icon"
            width={36}
            height={28}
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />

          {toggleDropdown && (
            <div className={`${styles.dropdown}`}>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
              <Link
                href="/#!"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Create Prompt
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        className={`flex items-center justify-center h-[50%] w-full gap-0 sm:gap-10 lg:gap-16`}
      >
        {/* INPUT AND SEARCH ICON */}
        <div
          className="border border-[#dbdbdb] h-10 flex-center 
          md:block md:ml-16
        "
        >
          <form
            className="flex items-center justify-center w-[250px] h-full"
            action="/search"
            method="GET"
          >
            <input
              type="text"
              aria-label="search"
              placeholder={t("search_placeholder")}
              className="w-full h-full px-1 py-1 font-light text-sm pl-3 outline-none"
            />
            <div className="w-10 h-full flex items-center justify-center bg-[--background-color-blue]">
              <Image
                src="/search_icon_white.svg"
                alt="Search"
                width={20}
                height={20}
              />
            </div>
          </form>
        </div>

        {/* SECOND HEADER TITLES */}
        <div className={`${styles.desktopMenu} md:items-center gap-2 lg:gap-6 w-full bg-white text-black text-xs lg:text-sm`}>
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
