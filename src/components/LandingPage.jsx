import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="w-full h-screen z-0 overflow-hidden" data-scroll data-scroll-speed="-.7">
      <div
        className="
          headingtext
          font-custom 
          font-semibold 
          uppercase 
          text-[2.5rem]   /* Base font size for smaller screens */
          xs:text-[3rem]  /* Extra small devices */
          sm:text-[4rem]  /* Small devices */
          md:text-[6rem]  /* Medium devices */
          lg:text-[8rem]  /* Large devices */
          xl:text-[10rem] /* Extra large devices */
          tracking-normal 
          leading-[3rem]  /* Base line height for smaller screens */
          xs:leading-[4rem]
          sm:leading-[4.5rem]
          md:leading-[6rem]
          lg:leading-[7rem]
          xl:leading-[9rem]
          h-3/4 
          border-b border-grey 
          flex flex-col justify-center 
          text-black 
          p-8   /* Base padding for smaller screens */
          xs:p-10 
          sm:p-12 
          md:p-16 
          lg:p-20 
          xl:p-24
        "
      >
        <div className="text overflow-hidden z-0">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 5 }}
          >
            I’m <span className="text-gold">Yash Patil</span>.
          </motion.h1>
        </div>
        <div className="text overflow-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 5.2 }}
          >
            Creating Front-End Magic
          </motion.h1>
        </div>
        <div className="text overflow-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 5.4 }}
          >
            & Designing on the Side.
          </motion.h1>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 6 }}
        className="
          font-customSecond 
          px-8   /* Base padding for smaller screens */
          py-3 
          text-base   /* Base font size for smaller screens */
          xs:text-lg 
          sm:text-xl 
          md:text-2xl 
          lg:text-3xl 
          flex 
          justify-between 
          items-center 
          overflow-hidden
          z-0
        "
      >
        <a
          href=""
          download={"pdfname"}
          className="
            relative 
            inline-flex 
            items-center 
            justify-center 
            text-base 
            xs:text-lg 
            sm:text-xl 
            md:text-2xl 
            font-customSecond 
            py-2   /* Base padding for smaller screens */
            px-8 
            xs:px-10 
            sm:px-12 
            md:px-14 
            lg:px-16 
            rounded-[120px] 
            bg-black 
            text-white 
            uppercase 
            hover:bg-darkblack 
            transition 
          "
        >
          Download Resume
        </a>
        <p className="scroll-text text-slate-600 text-base md:text-lg lg:text-xl">
          Scroll Down
        </p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
