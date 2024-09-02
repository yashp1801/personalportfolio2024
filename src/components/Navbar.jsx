import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../assets/images/YP.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }} // Initial state when the component first mounts
      animate={{ y: isVisible ? 0 : -200, opacity: 1 }} // Move up when visible, move down when not
      transition={{
        y: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className={`w-full px-8 md:px-20 py-6 font-customSecond flex justify-between items-center bg-transparent text-gray-800 fixed top-0 z-10 shadow-sm text-lg md:text-2xl backdrop-blur-[10px] transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ transitionDelay: isVisible ? "0s" : "0s" }}
    >
      <div className="logo flex items-center font-semibold text-gray-900 hover:text-gray-700 transition-colors basis-2/3 w-max">
        <Link to="/">
          <img src={Logo} alt="Yash Patil Logo" className="h-10 w-auto mr-2" />
        </Link>
      </div>

      {/* Hamburger Icon for screens below 800px */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
      </div>

      {/* Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 uppercase text-sm md:text-base absolute md:relative top-16 left-0 right-0 md:top-0 md:bg-transparent p-6 md:p-0 z-20 md:z-0 basis-1/3`}
      >
        {["About", "Work"].map((item, index) => (
          <ScrollLink
            to={item.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")} // Remove non-alphanumeric characters
            smooth={true}
            key={index}
            duration={1000}
            className="underline-animation relative text-[1.4rem]"
          >
            {item}
          </ScrollLink>
        ))}
      </div>
      <div className="basis-1/3 w-max text-end">
        <a
          href="mailto:yashh.p1801@gmail.com"
          className="underline-animation relative"
        >
          yashh.p1801@gmail.com
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
