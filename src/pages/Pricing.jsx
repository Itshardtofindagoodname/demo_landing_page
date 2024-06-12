import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IconArrowDown } from "@tabler/icons-react";
import { Link } from 'react-scroll';

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isVisible, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      ref={containerRef} 
      className="flex flex-col font-poppins justify-center min-h-screen p-10 bg-[#121212] text-white"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.span className='md:ml-48 xl:ml-32 text-xl font-semibold mb-4' variants={itemVariants}>
        the pricing <br /> plans?
      </motion.span>
      <div className="flex xl:flex-row flex-col justify-center items-center space-y-6 xl:space-x-6 w-full px-6">
        {/* PRO Plan */}
        <motion.div className="bg-[#121212] p-6 rounded-lg border-l-2 border-t-2 border-b-2 xl:border-r-0 border-r-2 border-purple-500 relative flex-grow w-full max-w-xl" variants={itemVariants}>
          <h2 className="text-lg font-semibold mb-4 text-neutral-200">PERSONAL</h2>
          <p className="text-4xl font-bold mb-2 text-white">Free</p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-white">
              <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
              <span>Upto 3 Knowledge Bases</span>
            </li>
            <li className="flex items-center text-white">
              <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
              <span>Upto 3 pdfs/urls</span>
            </li>
            <li className="flex items-center text-gray-400">
              <span className="bg-gray-300 w-3 h-3 rounded-full mr-3"></span>
              <span>No extra knowledge bases</span>
            </li>
            <li className="flex items-center text-gray-400">
              <span className="bg-gray-300 w-3 h-3 rounded-full mr-3"></span>
              <span>Limits on sharing</span>
            </li>
          </ul>
          <Link to='title'
            smooth={true}
            duration={700}
            className="px-6 py-3 bg-[#121212] rounded-full border-2 cursor-pointer text-gray-200 font-semibold hover:bg-neutral-700 flex flex-row justify-center items-center gap-2">
            <IconArrowDown className="h-6 w-6" />
            SIGN UP NOW
          </Link>
        </motion.div>

        {/* Personal Plan */}
        <motion.div className="bg-[#232323] p-6 rounded-lg shadow-lg text-black flex-grow w-full max-w-xl" variants={itemVariants}>
        <h2 className="text-lg font-semibold mb-4 text-neutral-500">PRO</h2>
        <p className="text-4xl font-bold mb-2 text-neutral-400">COMING SOON</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;
