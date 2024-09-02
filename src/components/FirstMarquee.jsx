import React from "react";
import { motion } from "framer-motion";

const FirstMarquee = () => {
  const line = " Dream it. Believe it. Build it.";
  const repeat = 4;

  return (
    <section
      className=" bg-black h-screen  w-full rounded-tl-3xl rounded-tr-3xl  overflow-hidden z-10 "
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
    >
      <div className="inline-flex whitespace-nowrap gap-10  h-max  text-white  ">
        {Array.from({ length: repeat }).map((_, index) => {
          return (
            <motion.h1
              key={index}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
              className=" inline-block text-[30rem] align-top leanding-none font-custom uppercase"
            >
              {line}
            </motion.h1>
          );
        })}
      </div>
    </section>
  );
};

export default FirstMarquee;
