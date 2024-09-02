import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PreLoader = ({ onComplete }) => {
  const preloaderRef = useRef();
  const spansRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete,
    });

    // Animate each span one by one
    spansRef.current.forEach((span, index) => {
      tl.fromTo(
        span,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
        index * 1 // Stagger each span's animation
      );
    });

    // Animate the preloader slide-up after all spans are revealed
    tl.to(preloaderRef.current, {
      y: "-100%",
      duration: 3,
      ease: "power3.inOut",
    });
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 flex items-center justify-center bg-darkblack z-50"
    >
      <div className="text-white flex font-custom text-7xl uppercase">
        {["dream it.", "believe it.", "build it."].map((text, index) => (
          <div className="overflow-hidden mr-8">
            <span
              key={index}
              ref={(el) => (spansRef.current[index] = el)}
              className="block"
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreLoader;
