import { Hero, Navbar } from ".";
import { useScroll, useTransform } from "framer-motion";
import HeaderBg from "/images/header.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Header = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end 200px"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "150%"]);

  return (
    <header
      ref={scrollRef}
      className="text-white relative bg-gradient-to-b overflow-hidden from-[rgba(0,0,0,0.5)] to-black"
    >
      <div
        className="scroll-wrapper"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        <div className="absolute inset-0 -z-10">
          <motion.img
            style={{ scale }}
            src={HeaderBg}
            alt="header-bg.jpg"
            className="h-full w-full object-cover"
          />
        </div>

        <Navbar />
        <Hero />
      </div>
    </header>
  );
};
