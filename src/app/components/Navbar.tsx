"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navBgColor, setNavBgColor] = useState("transparent");
  const [navTextColor, setNavTextColor] = useState("#fff");

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const changeNavColorOnScroll = () => {
      if (window.scrollY >= 90) {
        setNavBgColor("#fff");
        setNavTextColor("#000");
      } else {
        setNavBgColor("transparent");
        setNavTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeNavColorOnScroll);
  }, []);

  return (
    <div
      style={{ backgroundColor: navBgColor }}
      className="fixed left-0 top-0 z-10 w-full duration-300 ease-in"
    >
      <div className="m-auto flex max-w-[1240px] items-center justify-between p-4 text-white">
        <Link href="/">
          <h1 style={{ color: navTextColor }} className="text-4xl font-bold">
            Captur
          </h1>
        </Link>
        <ul style={{ color: navTextColor }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile menu toggle button */}
        <div onClick={toggleNav} className="z-10 block sm:hidden">
          {isNavOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu style={{ color: navTextColor }} size={20} />
          )}
        </div>

        {/* Mobile menu */}
        <div
          className={
            isNavOpen
              ? "absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
              : "absolute bottom-0 left-[-100%] right-0 top-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
