"use client";
import { useEffect, useState } from "react";

const GoUp = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > window.innerHeight && !show) {
          setShow(true);
        } else if (window.scrollY < window.innerHeight && show) {
          setShow(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);

  if (!show) return null;

  return (
    <span
      onClick={() =>
        typeof window !== "undefined" && // Check if window is defined before using it
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="flex justify-center items-center cursor-pointer p-[2rem] h-[2rem] w-[2rem] text-[2.2rem] text-white bg-[#ff4d30] hover:bg-[#fa4226] border-[3px] border-white fixed bottom-[2rem] right-[2rem] z-20"
    >
      {"^"}
    </span>
  );
};

export default GoUp;
