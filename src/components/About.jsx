import React from "react";

const About = () => {
  return (
    <section
      className="about h-max w-full font-customSecond p-10 xs:p-12 sm:p-16 md:p-20 bg-gold rounded-3xl"
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      id="about"
    >
      <div className="main w-full py-8 xs:py-12 sm:py-16">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug md:leading-none">
          I am <span className="underline">based in Mumbai, India,</span> and
          hold a{" "}
          <span className="underline">
            Bachelor’s degree in Computer Applications (BCA)
          </span>{" "}
          from Shailendra Education Society's College of Arts, Commerce, and
          Science. With{" "}
          <span className="underline">
            over a year of experience in front-end development
          </span>
          , I focus on designing and building intuitive, responsive web
          applications that enhance user experience.
        </h2>
      </div>
      <div className="flex flex-col md:flex-row py-10 sm:py-16 md:py-20 h-full align-bottom justify-between text-lg sm:text-xl md:text-2xl border-b border-t">
        <div className="basis-full md:basis-1/3 py-4 md:py-0">
          <h1 className="mb-4 md:mb-0 font-bold">More about my story</h1>
        </div>
        <div className="basis-full md:basis-2/3">
          <p>
            As a self-taught developer, I’m driven by a passion for coding and a
            commitment to continuous learning. My journey has taken me from
            building simple web pages to developing complex applications that
            deliver seamless user experiences. I thrive on solving challenging
            problems, optimizing performance, and staying at the forefront of
            web technologies.
          </p>
          <p className="mt-8 md:mt-12">
            Beyond the world of coding, I find joy in the realm of music.
            Listening to diverse genres enriches my creativity and provides
            inspiration in my work. I'm also on a journey of learning to play
            the violin, finding a harmonious balance between code and melody. As
            I navigate the intricacies of web development, my love for music
            serves as a source of inspiration and a reminder of the beauty in
            both logical and artistic expressions.
          </p>
        </div>
        <div className="basis-full md:basis-1/3 flex justify-center items-end pt-8 md:pt-0">
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl">S:</h1>
            <p>Instagram</p>
            <p>Instagram</p>
            <p>Instagram</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-10 sm:py-16 md:py-20">
        <div className="basis-full md:basis-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal">
            Tools and Tech:
          </h1>
        </div>
        <div className="basis-full md:basis-1/2">
          <p className="text-lg sm:text-2xl md:text-3xl">
            I possess a strong skill set in <span className="underline">HTML, CSS, SCSS, JavaScript, Tailwind CSS, React.js, and Next.js</span>, which I use to build responsive and efficient web applications. I have hands-on experience with <span className="underline">TypeScript and MongoDB</span>, and I’ve worked extensively with React libraries like Express, Jest for debugging, and Redux for state management. This combination of tools and technologies enables me to develop robust and scalable applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
