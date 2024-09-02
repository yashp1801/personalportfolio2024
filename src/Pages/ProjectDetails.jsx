import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import data from "../data";
import Navbar from "../components/Navbar";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { TbCircleArrowUpRightFilled } from "react-icons/tb";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const overlayVariants = {
  hidden: { y: "0%" },
  visible: { y: "-100%" },
};

const cubicBezier = [0.76, 0, 0.24, 1];

const ProjectDetails = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const [isHovered, setIsHovered] = useState(false);

  const SingleProject = data.find((project) => project.name === name);
  const currentIndex = data.findIndex((project) => project.name === name);

  const prevProject =
    currentIndex > 0 ? data[currentIndex - 1] : data[data.length - 1];
  const nextProject =
    currentIndex < data.length - 1 ? data[currentIndex + 1] : data[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setOverlayVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  }, [location]);

  const handleNavigation = (projectName) => {
    navigate(`/${projectName}`);
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="overlay fixed inset-0 bg-black z-50"
        variants={overlayVariants}
        initial="hidden"
        animate={isOverlayVisible ? "hidden" : "visible"}
        transition={{
          duration: 2,
          ease: cubicBezier,
        }}
      />
      <AnimatePresence
        mode="wait"
        onExitComplete={() =>
          scroll.scrollToTop({ duration: 500, smooth: true })
        }
      >
        <motion.section
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{
            duration: 0.6,
            ease: cubicBezier,
          }}
          className="relative "
        >
          {SingleProject ? (
            <>
              <div className="main pt-10 h-full">
                <div className="title border-b p-6 sm:p-10 lg:p-20 mt-40 h-max">
                  <h1 className="font-custom text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] uppercase">
                    {SingleProject.title}
                  </h1>
                <div className="inline-flex w-full justify-between items-end">
                <a
                    href=""
                    className="relative inline-flex items-center justify-between text-base sm:text-lg md:text-xl font-customSecond py-4 sm:py-5 md:py-6 px-12 sm:px-14 md:px-16 rounded-[120px] bg-black text-white mt-12 sm:mt-16 md:mt-24 transition-all"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="flex items-center">
                      Github
                      <TbCircleArrowUpRightFilled
                        className={`text-5xl ml-5 transition-all ${
                          isHovered ? "ml-7" : ""
                        } `}
                      />
                    </span>
                  </a>
                  <p className="text-2xl font-customSecond" >{SingleProject.timeRange}</p>
                </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 px-6 sm:px-12 lg:px-20 pt-8 sm:pt-10 pb-10 sm:pb-20 font-customSecond text-base sm:text-xl md:text-[1.4rem] lg:text-[1.6rem]">
                  <p className="basis-1/4 sm:basis-1/3">Description</p>
                  <p className="basis-3/4 sm:basis-2/3">
                    {SingleProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 sm:mt-0 h-max 1/3">
                    {SingleProject.techUsed.map((item, index) => (
                      <p
                        key={index}
                        className="px-10 py-3 border-2 uppercase text-sm sm:text-[1.5rem] rounded-3xl font-medium h-max"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="projectImg h-[50vh] sm:h-[75vh] lg:h-[100vh] rounded-3xl  overflow-hidden">
                <img
                  src={SingleProject.image}
                  alt="Project Image"
                  className="h-full w-full object-cover"
                />
              </div>
            
              <div className="features flex flex-col sm:flex-row justify-between items-start p-6 sm:p-12 lg:p-20 font-customSecond text-base sm:text-xl lg:text-2xl border-b">
                <p className="basis-1/2 sm:basis-1/3  tracking-wide">
                  Key Features
                </p>
                <div className="basis-1/2 sm:basis-2/3 space-y-4 sm:space-y-6 text-gray-700">
                  {SingleProject.keyFeatures.map((line, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-3 animate-fadeIn"
                      >
                        <span className="text-indigo-600">•</span>
                        <p>{line}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="summary flex flex-col sm:flex-row justify-between items-start p-6 sm:p-12 lg:p-20 font-customSecond text-base sm:text-xl lg:text-2xl ">
                <p className="basis-1/2 sm:basis-1/3">Summary</p>
                <p className="basis-1/2 sm:basis-2/3">
                  {SingleProject.summary}
                </p>
              </div>
              <div className="navigation-buttons flex flex-col sm:flex-row justify-between p-6 sm:p-12 lg:p-20">
                <button
                  className="relative inline-flex items-center justify-between text-base sm:text-lg md:text-xl font-customSecond py-4 sm:py-5 md:py-6 px-12 sm:px-14 md:px-16 rounded-full bg-black text-white mt-12 sm:mt-0 sm:mr-4 transition-all"
                  onClick={() => handleNavigation(prevProject.name)}
                >
                  <IoMdArrowRoundBack className="mr-5" /> Previous Project
                </button>
                <button
                  className="relative inline-flex items-center justify-between text-base sm:text-lg md:text-xl font-customSecond py-4 sm:py-5 md:py-6 px-12 sm:px-14 md:px-16 rounded-full bg-black text-white mt-12 sm:mt-0 sm:ml-4 transition-all"
                  onClick={() => handleNavigation(nextProject.name)}
                >
                  Next Project <IoMdArrowRoundForward className="ml-5" />
                </button>
              </div>
            </>
          ) : (
            <p className="text-center p-6">Project not found</p>
          )}
        </motion.section>
      </AnimatePresence>
      <Connect />
      <Footer />
    </>
  );
};

export default ProjectDetails;
