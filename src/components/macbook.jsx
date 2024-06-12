import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "../assets/image.png";
import { Trackpad, Keypad } from "./keyboard";
import Demo from "../assets/demo.png";
import CatGpt from "../assets/catgpt.png";

export const Macbook = ({ header }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 0.9]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 0.6]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 820]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 0.5], [0, 240]);

  return (
    <div ref={ref} className="relative bg-[#121212] overflow-hidden flex flex-col font-poppins items-center py-0 md:py-48 flex-shrink-0 [perspective:800px] transform md:scale-100 scale-[0.35] sm:scale-50">

      <motion.div style={{ translateY: textTransform, opacity: textOpacity }} className="text-neutral-800 text-3xl font-bold mb-20 text-center">
        {header}
      </motion.div>
      <Lid scaleX={scaleX} scaleY={scaleY} rotate={rotate} translateY={translateY} translateX={translateX} />
      
      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-[#2B2D30] rounded-2xl overflow-hidden relative z-10">
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
        </div>
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#121212] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent z-50"></div>
      </div>

      {/* New section */}
      <div className="mt-40 text-center">
        <h2 className="text-neutral-300 text-3xl font-bold mb-4">Well this is how it's better than what you normally use</h2>
        <p className="text-neutral-400 text-xl mb-8">this is just an example of how better our product can be</p>
        <div className="flex justify-center items-center gap-28">
          <div className="relative h-[250px] w-[30rem] flex items-center justify-center">
            <img src={CatGpt} alt="cat gpt image" className="object-fill absolute inset-0 h-full w-full" />
          </div>
          <div className="w-[25rem]" />
        </div>
      </div>
      <span className="mt-20 text-3xl text-white font-bold">So now you know why we're better?</span>
    </div>
  );
};

export const Lid = ({ scaleX, scaleY, rotate, translateY, translateX }) => {
  return (
    <div className="relative [perspective:800px] z-50">
      <div
        style={{
          transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
      >
        <div
          style={{
            boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
          }}
          className="absolute inset-0 bg-black rounded-lg flex items-center justify-center"
        >
          <img src={Image} alt="background image" className="text-white h-40 w-[490px]" />
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translateY,
          translateX: translateX,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 rounded-2xl p-2"
      >
        <img src={Demo} alt="placeholder image of product demo" fill="true" className="object-fill absolute inset-0 h-full w-full" />
      </motion.div>
    </div>
  );
};
