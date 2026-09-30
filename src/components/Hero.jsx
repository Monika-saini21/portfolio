import { motion } from "framer-motion";




import { useSelector } from "react-redux";
export default function Hero() {
      const isDark = useSelector((state) => state.darkmode.dark);
  return (
    <>
   
     
    
    <section
      id="home"
      className="md:min-h-screen h-[40rem] absolute md:left-137  mb-40 md:mb-0 w-full md:w-auto flex items-center cursor-context-menu justify-center "
    >
      
     
      <div className="relative bottom-0  top-55 md:top-0 md:bottom-30 text-center">
       
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
         
           className={`absolute top-0 left-0  md:text-[15rem] text-[10rem]   font-extrabold font-mono
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

  
   
  

    </>
  );
}
