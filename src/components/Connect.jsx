import { useState } from "react";
import { IoIosArrowForward, IoMdArrowRoundForward } from "react-icons/io";

const Connect = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section
      className="h-[100vh] bg-gold font-custom flex justify-center items-center flex-col w-full p-10 sm:p-16 md:p-20 text-black rounded-3xl"
      data-scroll
      data-scroll-speed="0.2"
    >
      <h1 className="text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[18rem] uppercase text-center leading-[0.8]">
        Let’s <br /> Start a <br />
        Conversation!
      </h1>
      <a
        href="mailto:yashh.p1801@gmail.com"
        className="relative inline-flex items-center justify-between text-base sm:text-lg md:text-xl lg:text-2xl font-customSecond py-4 sm:py-5 md:py-6 px-10 sm:px-12 md:px-16 rounded-[120px] bg-black text-white mt-12 sm:mt-16 md:mt-24 transition-all"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        aria-label="Send an email to yashh.p1801@gmail.com"
      >
        <span className="mr-3">yashh.p1801@gmail.com</span>
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
    </section>
  );
};

export default Connect;