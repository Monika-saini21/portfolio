import { motion } from "framer-motion";

import About from "./About.jsx";

import Button from "./Button.jsx";
import { useSelector } from "react-redux";
export default function Hero() {
      const isDark = useSelector((state) => state.darkmode.dark);
  return (
    <>
   
    <Button />
    
    <section
      id="home"
      className="md:min-h-screen h-[40rem] mb-40 md:mb-0 w-full md:w-auto flex items-center cursor-context-menu justify-center "
    >
      
     
      <div className="relative text-center">
       
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
         
           className={`absolute top-0 left-0 md:text-[15rem] text-[10rem]   font-extrabold font-mono
        ${isDark ? ' opacity-20  text-[#2c0546]' : 'text-[#2c0546] opacity-80'}
      `}
          style={{ WebkitTextStroke: "3px " }} 
        >
          HI
        </motion.h1>

       
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`md:text-[15rem] text-[10rem]     font-extrabold  font-mono
        ${isDark ? 'text-white ' : 'text-[#0e0111] '}
      `}
        >
          HI
        </motion.h1>
      </div>

      
    </section>

    <About/>
   
  

    </>
  );
}
