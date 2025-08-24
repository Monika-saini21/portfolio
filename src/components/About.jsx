import { useSelector } from "react-redux";

import Image from "./Image.jsx";
function About() {
  const isDark = useSelector((state) => state.darkmode.dark);

  return (
    <>
      <div
        className="
           md:w-full md:max-w-[1150px]  
            w-full 
          flex flex-col 
          gap-3 md:gap-7 
          absolute 
          left-0 p-4 md:left-32 
          top-12 bottom-0 md:top-30 md:bottom-10
          
        "
      >
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-extrabold cursor-pointer">
          I am Monika
        </h1>

        {/* Title */}
        <div>
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r cursor-pointer from-[#8259c4] bg-clip-text text-transparent 
              ${isDark ? "to-[#0a000f]" : "to-white"}
            `}
          >
            Front-End
          </h1>
          <h1
            className={`text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r cursor-pointer from-[#8259c4] bg-clip-text text-transparent 
              ${isDark ? "to-[#0a000f]" : "to-white"}
            `}
          >
            Web Developer
          </h1>
        </div>

        {/* 👇 Add Image component here */}
        <div className="flex justify-center md:justify-start">
          <Image />
        </div>

        {/* Paragraph */}
        <p className="text-base sm:text-lg  cursor-pointer leading-relaxed max-w-xl">
          I’m a creative frontend developer. Passionate about crafting interactive
          and engaging designs, specializing in React, Tailwind CSS, and modern
          web technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 gap-5">
          <button className={`px-8 sm:px-12 py-3 font-semibold text-lg rounded-4xl cursor-pointer  border-2  md:border-[#764eb8] border-white text-white md:border-2 md:text-[#764eb8] hover:bg-[#764eb8] hover:text-white
               ${isDark ? 'md:bg-white bg-[#764eb8]' : 'md:bg-[#0e0111]  bg-[#764eb8]'}`}>
            View My CV
          </button>

          {/* Social Icons */}
          <div className="flex gap-4 pl-4 h-9">
            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/monika-saini-27a426351/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin cursor-pointer text-2xl border-2 border-[#764eb8] text-[#764eb8] hover:bg-[#764eb8] hover:text-white p-1 rounded-3xl"></i>
            </a>

            {/* Github */}
            <a
              href="https://github.com/Monika-saini21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github text-2xl cursor-pointer border-2 border-[#764eb8] text-[#764eb8] hover:bg-[#764eb8] hover:text-white p-1 rounded-3xl"></i>
            </a>

            {/* Gmail */}
            <a
              href="mailto:monikasaini4717@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-gmail text-2xl border-2 cursor-pointer border-[#764eb8] text-[#764eb8] hover:bg-[#764eb8] hover:text-white p-1 rounded-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
