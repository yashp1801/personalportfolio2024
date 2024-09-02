import { useState } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import FirstMarquee from "../components/FirstMarquee";
import About from "../components/About";
import Projects from "../components/Projects";
import Connect from "../components/Connect";
import Footer from "../components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import BgImg from "../components/BgImg";
import PreLoader from "../components/PreLoader";
import { gsap } from "gsap";

const MainLayout = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [loading, setLoading] = useState(true);

  const handleComplete = () => {
    setLoading(false);
    gsap.fromTo(
      ".content",
      { opacity: 0 },
      { opacity: 1, duration: 5, ease: "power2.inOut" }
    );
  };

  return (
    <>
      <Navbar />
      <PreLoader onComplete={handleComplete} />
      <LandingPage loading={loading} />
      <FirstMarquee />
      <About />
      <BgImg />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
};

export default MainLayout;
