import React from "react";
import { useMediaQuery } from "react-responsive";
import { IconSparkles } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Macbook } from "../components/macbook";
import { Macbookmobile } from "../components/macbook_mobile";
import HowitWorks from "./HowitWorks";
import Pricing from "./Pricing";

const text = "Share Data\nIntelligently";

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
    },
  }),
};

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
};

export function Home() {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 850 });

  const MacbookComponent = isDesktopOrTablet ? Macbook : Macbookmobile;

  return (
    <div className="bg-[#121212] w-full overflow-hidden" id="title">
      <Navbar />
      <MacbookComponent
        header={
          <div>
            <div className="md:text-7xl text-5xl font-extrabold mt-20 md:mt-0 flex text-white flex-wrap">
              {text.split("\n").map((line, lineIndex) => (
                <div key={lineIndex} className="flex w-full text-center items-center justify-center">
                  {line.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      custom={lineIndex * line.length + charIndex}
                      initial="hidden"
                      animate="visible"
                      variants={textVariants}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>
            <motion.div
              className="text-lg text-gray-400 font-semibold mt-8"
              initial="hidden"
              animate="visible"
              variants={revealVariants}
            >
              upload any document and start getting information with no effort, in no time.
            </motion.div>
            <motion.div
              className="mt-8 flex flex-col items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={revealVariants}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <div className="flex flex-row">
                <motion.input
                  type="email"
                  id="name-with-label"
                  className="rounded-3xl border-2 flex-1 appearance-none border-neutral-500 w-80 py-2 px-4 bg-[#121212] text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  placeholder="email"
                  required=""
                  autoComplete="email"
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  transition={{ delay: 2.2, duration: 0.5 }}
                />
                <motion.button
                  className="bg-[#404040] hover:bg-black transition-colors delay-50 duration-200 px-4 py-2 text-lg font-bold rounded-3xl ml-2 flex flex-row gap-2 items-center justify-center text-white"
                  initial="hidden"
                  animate="visible"
                  variants={revealVariants}
                  transition={{ delay: 2.4, duration: 0.5 }}
                >
                  <IconSparkles />
                  Sign Up
                </motion.button>
              </div>
              <motion.span
                className="text-gray-400 text-sm font-normal ml-10"
                initial="hidden"
                animate="visible"
                variants={revealVariants}
                transition={{ delay: 2.6, duration: 0.5 }}
              >
                Currently on Beta
              </motion.span>
            </motion.div>
          </div>
        }
      />
      <div id="how-to-start">
        <HowitWorks />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}
