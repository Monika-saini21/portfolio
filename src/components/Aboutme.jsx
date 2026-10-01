import { useSelector } from "react-redux";


function Aboutme (){
     const isDark = useSelector((state) => state.darkmode.dark);
    return(
         <div className=" flex flex-col mx-6 md:mx-40 md:mt-25 md:mb-50 mt-10 mb-35 gap-8 justify-center items-center">
            <h1
             className={` text-4xl md:text-6xl md:pb-6 pb-2 font-extrabold bg-gradient-to-r cursor-pointer from-[#8259c4] bg-clip-text text-transparent 
             ${isDark ? "to-[#0a000f]" : "to-white"}`}
            >Know About Me</h1>
            <div className="flex text-base sm:text-lg  cursor-pointer flex-col gap-7 ">
                <p>Hi, I'm Monika saini, a passionate in Frontend developer. I completed my Bachelor of Computer Application (BCA) 
                    at  Lyallpur Khalsa College (LKC), Jalandhar. I'm excited to learn new skills and explore the endless
                    possibilities in the tech world.</p>
                <p>My primary focus is on web development, particularly in mastering HTML, CSS, JavaScript, React, TailwindCSS 
                    . I enjoy creating visually appealing and functional designs that enhance user 
                    experience.</p>
                <p>Right now, I'm honing my skills in Frontend development by building dynamic interfaces using React and
                    TailwindCSS. Every project is a chance for me to learn, experiment, and improve.</p>
            </div>
         </div>
    )
}
export  default Aboutme;