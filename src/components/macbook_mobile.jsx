import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trackpad, Keypad } from "./keyboard";
import Demo from "../assets/demo.png";
import Catgpt from "../assets/catgpt.png";
import Image from "../assets/image.png";

export const Macbookmobile = ({
  header,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, 0.66]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, 0.7]
  );
  const translate = useTransform(scrollYProgress, [0, 0.35], [0, 800]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center py-0 md:py-80 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100 scale-90 "
    >
      <motion.div style={{ translateY: textTransform, opacity: textOpacity }} className="text-neutral-800 text-3xl font-bold mb-20 text-center">
        {header}
      </motion.div>
      <Lid scaleX={scaleX} scaleY={scaleY} rotate={rotate}translate={translate} />
      {/* Base area */}
      <div className="h-[22rem] w-[32rem] bg-[#2B2D30] rounded-2xl overflow-hidden relative -z-10">
        {/* above keyboard bar */}
        <div className="h-10 w-full relative">
          <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
        </div>
        <div className="flex relative">
          <div className="mx-auto w-[80%] h-full">
            <Keypad />
          </div>
        </div>
        <Trackpad />
        <div className="h-2 w-20 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
        <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#121212] via-[#121212] to-transparent z-50"></div>
      </div>

      {/* New section */}
      <div className="mt-40 text-center">
        <h2 className="text-neutral-100 text-3xl font-bold mb-2">Well this is how it's better than what you normally use</h2>
        <p className="text-neutral-400 text-xl mb-8">This is just an example of how better our product can be</p>
        <div className="flex flex-col items-center gap-4">
          <div className="relative h-[251px] w-[335px] flex items-center justify-center">
          </div>
          <div className="relative h-[300px] w-[360px] flex items-center justify-center mt-8">
            <img src={Catgpt} alt="CatGPT image" className="object-fill absolute inset-0 h-full w-full rounded-lg" />
          </div>
        </div>
      </div>
      <span className="mt-20 text-3xl font-bold text-white">So now you know why we're better?</span>
    </div>
  );
};

export const Lid = ({
  scaleX,
  scaleY,
  rotate,
  translate,
}) => {
  return (
    <div className="relative [perspective:800px]">
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
          className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
        >
          <img src={Image} alt="background image" className="text-white h-40 w-[490px]" />
        </div>
      </div>
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "top",
        }}
        className="h-96 w-[32rem] absolute inset-0 rounded-2xl p-2"
      >
        <div className="absolute inset-0 rounded-lg" />
        <img
          src={Demo}
          alt="product image"
          fill="true"
          className="object-fill absolute rounded-lg inset-0 h-full w-full"
        />
      </motion.div>
    </div>
  );
};

