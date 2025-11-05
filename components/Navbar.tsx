"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  faBars,
  faX,
  faChevronDown,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [langMenu, setLangMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isEnglish = pathname.endsWith("/en");

  const cleanPath = isEnglish ? pathname.replace(/\/en$/, "") : pathname;

  const handleLocaleChange = (lang: "ar" | "en") => {
    if (lang === "ar") {
      router.push(cleanPath || "/");
    } else {
      router.push(`${cleanPath === "/" ? "" : cleanPath}/en`);
    }
  };

  const menuItems = isEnglish
    ? [
              { href: "/contact/en", label: "Contact" },
        { href: "/our-clients/en", label: "Our Clients" },
        { href: "/blog/en", label: "Blog" },
                { href: "/about/en", label: "About" },
        { href: "/en", label: "Home" },
      ]
    : [
        { href: "/contact", label: "تواصل معنا" },
        { href: "/our-clients", label: "عملائنا" },
        { href: "/blog", label: "مدونة" },
        { href: "/about", label: "نبذة عنا" },
        { href: "/", label: "الرئيسية" },
      ];

  const directionClass = isEnglish ? "flex-row" : "flex-row-reverse";

  return (
    <div className="fixed top-0 left-0 w-full  backdrop-blur-sm shadow-md z-999 " >
      <div
        className={`flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 ${directionClass}`}
      >
        <div className="rounded-3xl flex items-center gap-1 px-2">
          <Image src="/logo.webp" alt="logo" width={120} height={90} />
        </div>

        <div
          className={`hidden lg:flex items-center gap-10 px-8 py-2 rounded-3xl  ${directionClass}`}
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-2xl transition-colors duration-200 ${
                  isActive
                    ? "text-[#ffa500]"
                    : "text-white hover:text-[#ffa500]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div
          className="hidden lg:relative lg:block"
          onMouseEnter={() => setLangMenu(true)}
          onMouseLeave={() => setLangMenu(false)}
        >
          <button className="flex items-center gap-2 border-0 text-white text-lg font-semibold px-4 py-2 hover:text-[#ffa500]">
            {isEnglish ? "English" : "العربية"}
            <FontAwesomeIcon icon={faCaretDown} className="w-3 h-3" />
          </button>

          {langMenu && (
            <div className="absolute top-[45px] left-0 bg-[#2b2b2c] shadow-lg rounded-lg z-999 w-full text-center min-w-[120px]">
              <button
                onClick={() => handleLocaleChange("ar")}
                className={`w-full px-4 py-2 text-lg font-medium hover:bg-gray-100 ${
                  !isEnglish ? "bg-[#ffa500] text-white" : ""
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => handleLocaleChange("en")}
                className={`w-full px-4 py-2 text-lg font-medium hover:bg-gray-100 ${
                  isEnglish ? "bg-[#ffa500] text-white" : ""
                }`}
              >
                English
              </button>
            </div>
          )}
        </div>

        <div className="lg:hidden flex items-center">
          <div
            className="cursor-pointer p-4 text-white"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? (
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            ) : (
              <FontAwesomeIcon icon={faX} className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>

      {toggle && (
        <div className="fixed top-[70px] left-0 w-full h-[350px] py-4 shadow-lg flex bg-white/80  flex-col justify-center items-center gap-6 z-50 lg:hidden">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setToggle(false)}
                className={`font-semibold text-lg ${
                  isActive
                    ? "text-[#ffa500]"
                    : "text-gray-900 hover:text-[#ffa500]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* 🌐 Mobile Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenu(!langMenu)}
              className="rounded-3xl bg-gray-100 px-4 py-2 font-semibold text-lg flex items-center gap-2"
            >
              {isEnglish ? "English" : "العربية"}
              <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
            </button>

            {langMenu && (
              <div className="absolute top-[45px] left-0 bg-white shadow-lg rounded-lg w-full text-center min-w-[120px]">
                {/* Always show both language options */}
                <button
                  onClick={() => {
                    handleLocaleChange("ar");
                    setToggle(false);
                    setLangMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-lg font-medium hover:bg-gray-100 ${
                    !isEnglish ? "bg-[#ffa500] text-white" : ""
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => {
                    handleLocaleChange("en");
                    setToggle(false);
                    setLangMenu(false);
                  }}
                  className={`w-full px-4 py-2 text-lg font-medium hover:bg-gray-100 ${
                    isEnglish ? "bg-[#ffa500] text-white" : ""
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
