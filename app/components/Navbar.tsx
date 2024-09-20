"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../imgs/logo.png";
import { useEffect, useState } from "react";

interface Target {
  innerWidth: number;
}

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      const x = e.currentTarget as Target | null;
      if (x!.innerWidth > 900 && expand) setExpand(false);
    });

    return () =>
      window.removeEventListener("resize", (e) => {
        const x = e.currentTarget as Target | null;
        if (x!.innerWidth > 900 && expand) setExpand(false);
      });
  });
  return (
    <header className="relative max-w-[133rem] mx-auto">
      <div className="absolute left-0 top-0 w-full flex justify-between items-center py-[2.7rem] px-[2rem]">
        <div className="w-[14.5rem]">
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <nav
          className={`flex gap-[2.1rem] max-lg:gap-[3rem] max-lg:absolute max-lg:left-[-100rem] ${
            expand && "max-lg:!left-0"
          } transition-[left] ease-in-out duration-500 z-50 max-lg:top-0 max-lg:w-screen max-lg:h-screen max-lg:bg-white max-lg:items-center max-lg:justify-center max-lg:flex-col`}
        >
          <span
            onClick={() => setExpand(false)}
            className="lg:hidden absolute right-[3.5rem] top-[3.5rem] cursor-pointer hover:text-[#ff4d30] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tabler-icon tabler-icon-x"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </span>
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal hover:text-[#ff4d30] transition-colors duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal hover:text-[#ff4d30] transition-colors duration-300"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal hover:text-[#ff4d30] transition-colors duration-300"
            href="/models"
          >
            <span className="max-lg:hidden">Vehicle</span> Models
          </Link>
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal hover:text-[#ff4d30] transition-colors duration-300"
            href="/testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal hover:text-[#ff4d30] transition-colors duration-300"
            href="/team"
          >
            Our Team
          </Link>
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal hover:text-[#ff4d30] transition-colors duration-300"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-[2.5rem] max-lg:hidden">
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal hover:text-[#ff4d30] transition-colors duration-300"
            href="/"
          >
            Sign In
          </Link>
          <Link
            className="text-[1.6rem] max-lg:text-[2.3rem] font-medium leading-normal text-white rounded-[.3rem] bg-[#ff4d30] py-[1.5rem] px-[3rem] shadow-link transition-[box-shadow,background-color] duration-300 hover:bg-[#fa4226] hover:shadow-link-hover"
            href="/"
          >
            Register
          </Link>
        </div>
        <span
          onClick={() => setExpand(true)}
          className="lg:hidden cursor-pointer hover:text-[#ff4d30] transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-menu-2"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </span>
      </div>
    </header>
  );
};
export default Navbar;
