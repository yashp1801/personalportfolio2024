import { useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { easeInOut, motion } from "framer-motion";
import { IoIosArrowForward, IoMdArrowRoundForward } from "react-icons/io";

const Projects = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      className="w-full font-customSecond overflow-hidden rounded-3xl py-10 sm:py-16 md:py-20 bg-white z-2"
      data-scroll
      data-scroll-speed="-0.1"
      id="work"
    >
      <div className="w-full px-10 sm:px-16 md:px-20 py-10 sm:py-16 md:py-20 border-b border-grey">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Featured Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 sm:p-16 md:p-20">
        {/* Card */}
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="card h-[60vh] sm:h-[70vh] md:h-[85vh] mb-8 flex flex-col justify-start relative"
            >
              <p className="w-full text-base sm:text-lg md:text-xl lg:text-2xl uppercase flex items-center mb-4 sm:mb-6">
                <GoDotFill className="text-xl sm:text-2xl md:text-3xl" />{" "}
                {item.title}
              </p>
              <Link
                to={`/${item.name}`}
                className="card_img_wrapper h-full w-full rounded-2xl overflow-hidden"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3, ease: easeInOut },
                  }}
                />
              </Link>
              <div className="flex mt-4 sm:mt-6">
                {item.techUsed.map((categories, index) => {
                  return (
                    <p
                      key={index}
                      className="px-3 py-1 sm:px-4 md:px-5 border uppercase text-sm sm:text-base md:text-lg lg:text-[1.5rem] lg:px-5 lg:py-2 rounded-3xl font-medium mr-2"
                    >
                      {categories}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <a
          href="https://github.com/yashp1801"
          className="relative inline-flex items-center justify-between text-base sm:text-lg md:text-xl font-customSecond py-4 sm:py-5 md:py-6 px-12 sm:px-14 md:px-16 rounded-[120px] bg-black text-white mt-12 sm:mt-16 md:mt-24 transition-all"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <span className="mr-3 uppercase">View all projects</span>
          <span
            className={`transition-all duration-200 transform ${
              isHover ? "ml-4" : "ml-0"
            }`}
          >
            {isHover ? (
              <IoMdArrowRoundForward size={24} />
            ) : (
              <IoIosArrowForward size={24} />
            )}
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
