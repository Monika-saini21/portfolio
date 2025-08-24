import todo from "../assets/todo.PNG";
import { TbBrandVite } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
function Todoproject({show}){
    return(
        <>
         {show && (
                        <>
                        <img src={todo} alt="GitHub Analyzer" className=" rounded-lg w-full mt-120 h-110 " />
                          <div className="flex mt-11 text-white gap-15">
                            <div>
                           
                            <h1 className="text-3xl mt-7 font-bold mb-3">Todo App</h1>
                            <p className="w-110">
                             A task management application built with React, Redux, and Tailwind CSS, designed to help 
                             users organize daily tasks efficiently. It includes features like adding, editing, deleting,
                              and marking tasks as complete, along with a dark/light mode toggle for better user
                               experience. 
                               </p>
                               </div>
                               <div>
                
                              <h1 className="text-2xl mt-9 font-bold mb-3">Tech stack:</h1>
                             <div className="flex  w-85 mt-7 flex-wrap">
                                                   <i class='bx bxl-react  text-2xl '></i><span className="font-sans ml-1 mr-16 text-lg ">React.js</span>
                                                                       <SiReactrouter className="text-2xl " /><span className="font-sans ml-1 text-lg ">React Router DOM</span>
                                                                       
                                                                         <i class='bx bxl-tailwind-css  text-2xl mt-8 '></i><span className="font-sans ml-1 text-lg mt-8 mr-6 ">Tailwind CSS</span>
                                                                       <TbBrandVite className="text-2xl mt-8 " title="React Router DOM"/><span className="font-sans ml-1 mt-8 text-lg "> Vite </span>
                                                                      </div>
                                                    
                                                   </div>
                        </div>
                         <a href="https://github.com/Monika-saini21/todo-list" target="_blank" rel="noopener noreferrer"><button className="py-1 mt-15 hover:border-2 hover:border-white bg-[#764eb8] px-3 rounded-3xl border-2  border-[#764eb8]"><i class='bx bxl-github pt-1 text-2xl' ></i><samp className="relative bottom-1.5 pl-1 font-semibold">view on GitHub</samp></button></a>
                                <a href="https://todo-app-monika.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="py-1 bg-[#764eb8] hover:border-2  hover:border-white pr-9 pl-4 ml-3 rounded-3xl border-2 border-[#764eb8]"><i class='bxr  bx-arrow-out-up-right-square pt-1.5 text-2xl'  ></i><samp className="relative bottom-1.5 pl-1 font-semibold">Live Demo</samp> </button></a>
                              
                          <h1 className="text-3xl mt-19 text-white font-bold mb-3 ">Key features:</h1>
                         <ul className="space-y-3 text-white">
  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Task Management:</b> Add, edit, and delete tasks with ease to stay organized.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Completion Tracking:</b> Mark tasks as completed or pending for better productivity tracking.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Dark/Light Mode:</b> Toggle between themes for a personalized user experience.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Calendar View:</b> Filter and manage tasks by date for better planning.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Responsive Design:</b> Works seamlessly across desktop and mobile devices.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Built with React + Redux:</b> State management handled efficiently with Redux and styled using Tailwind CSS.
    </span>
  </li>
</ul>

                
                        </>
                      )}
        </>
    )
}
export default Todoproject;