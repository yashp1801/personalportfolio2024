import React from "react";
import Logo from "../assets/images/YP.png"

const Footer = () => {
  return (
    <section className="h-auto md:h-[70vh] w-full rounded-3xl ">
      <div className="contentwrapper p-10 sm:p-20 md:p-40 h-full w-full flex flex-col md:flex-row justify-between">
        <div className="logo basis-full md:basis-1/2 mb-10 md:mb-0 select-none" >
          <img src={Logo} alt="Yash Patil Logo" className="h-80 w-auto " />
        </div>
        <div className="footerlinks flex flex-col md:flex-row justify-between basis-full md:basis-1/2 font-customSecond text-lg sm:text-xl md:text-2xl h-full">
          <div className="h-full flex flex-col justify-between mb-10 md:mb-0">
            <div className="socials mb-10 md:mb-0">
              <p className="mb-4 md:mb-8">S :</p>
              <p>Instagram</p>
              <p>Instagram</p>
              <p>Instagram</p>
              <p>Instagram</p>
            </div>
            <div className="mail">
              <p className="mb-4 md:mb-8">E :</p>
              <p>yashh.1801@gmail.com</p>
            </div>
          </div>
          <div className="menuLink flex flex-col justify-center">
            <p className="mb-4 md:mb-8">M :</p>
            <p>About</p>
            <p>Work</p>
            <p>Home</p>
          </div>
        </div>
      </div>
      <div className="copyright text-center p-5">
        <p className="text-base sm:text-lg md:text-2xl font-customSecond">© Yash Patil</p>
      </div>
    </section>
  );
};

export default Footer;
