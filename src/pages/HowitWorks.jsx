import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Phase1 from '../assets/phase1.mp4';
import Phase2 from '../assets/phase2.mp4';
import Phase3 from '../assets/phase3.mp4';

const steps = [
  { step: 1, title: 'This is step 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to.', gif: Phase1 },
  { step: 2, title: 'This is step 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to.', gif: Phase2 },
  { step: 3, title: 'This is step 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to.', gif: Phase3 },
];

function HowitWorks() {
  const [selectedStep, setSelectedStep] = useState(1);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

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
      controls.start((index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.5, duration: 0.5 },
      }));
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isVisible, controls]);

  const handleVideoEnd = () => {
    setSelectedStep((prevStep) => (prevStep % 3) + 1);
  };

  const handleClick = (step) => {
    setSelectedStep(step);
  };

  return (
    <div ref={containerRef} className="lg:h-screenfont-poppins flex lg:justify-around lg:items-center lg:flex-row flex-col items-center bg-[#121212] p-4">
      <div className="w-full max-w-md">
        <span className='text-2xl font-bold text-white'>here's how to <br/>get started</span>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            onClick={() => handleClick(step.step)}
            className="mt-4 py-2 px-2 mb-4 rounded-lg cursor-pointer bg-[#121212] border-2 border-neutral-600"
          >
            <div className="flex items-center mb-1 ml-2">
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full ${
                  selectedStep === step.step ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`text-lg font-semibold ${
                    selectedStep === step.step ? 'text-white' : 'text-gray-200'
                  }`}
                >
                  {step.step}
                </span>
              </div>
              <h3 className={`ml-4 text-lg font-semibold ${selectedStep === step.step ? 'text-white' : 'text-neutral-400'}`}>
                {step.title}
              </h3>
            </div>
            <hr className='text-gray-600'/>
            <p className="text-gray-400 mt-2 ml-2">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="xl:w-[600px] md:w-[460px] md:h-[400px] xl:h-[440px] h-96 w-96 bg-[#121212] rounded-lg shadow-lg shadow-violet-200 flex items-center justify-center">
        {selectedStep && (
          <video
            src={steps.find(step => step.step === selectedStep).gif}
            alt={`Video for step ${selectedStep}`}
            className="xl:w-[560px] xl:h-[400px] md:w-[420px] md:h-[360px] h-80 w-80 object-fill rounded-lg"
            autoPlay
            loop={false}
            muted
            onEnded={handleVideoEnd}
          />
        )}
      </div>
    </div>
  );
}

export default HowitWorks;
