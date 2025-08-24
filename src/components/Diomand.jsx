import diomand from "../assets/diomand.PNG";
import { TbBrandVite } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
function Diomand ({show}){
    return(
        <>
         {show && (
                <>
                <img src={diomand} alt="GitHub Analyzer" className=" rounded-lg w-full mt-120 h-110 " />
                  <div className="flex text-white mt-11 gap-15">
                    <div>
                   
                    <h1 className="text-3xl mt-7 font-bold mb-3">Diamond Emporium</h1>
                    <p className="w-110">
                     A responsive diamond jewellery brand website built with Vite, React, and Tailwind CSS, showcasing 
                     elegant UI design, smooth navigation, and a modern product display layout.
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
                 <a href="https://github.com/Monika-saini21/diamond-jewellery" target="_blank" rel="noopener noreferrer"><button className="py-1 mt-15 hover:border-2 hover:border-white bg-[#764eb8] px-3 rounded-3xl border-2  border-[#764eb8]"><i class='bx bxl-github pt-1 text-2xl' ></i><samp className="relative bottom-1.5 pl-1 font-semibold">view on GitHub</samp></button></a>
                        <a href="https://diamond-jewellery.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="py-1 bg-[#764eb8] hover:border-2  hover:border-white pr-9 pl-4 ml-3 rounded-3xl border-2 border-[#764eb8]"><i class='bxr  bx-arrow-out-up-right-square pt-1.5 text-2xl'  ></i><samp className="relative bottom-1.5 pl-1 font-semibold">Live Demo</samp> </button></a>
                      
                  <h1 className="text-3xl mt-19 text-white font-bold mb-3 ">Key features:</h1>
                 <ul className="space-y-3 text-white">
  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Elegant UI Design:</b> A visually appealing and refined layout crafted for showcasing luxury jewellery collections.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Responsive Product Grid:</b> Displays diamond collections in a beautifully structured, responsive grid suitable for all screen sizes.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Smooth Navigation:</b> Seamless browsing experience between different sections and product showcases.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Fully Responsive Design:</b> Optimized layout for both mobile and desktop, ensuring a great look and feel across devices.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Built with Vite & React:</b> Fast development environment powered by Vite, using React for a dynamic and performant UI.
    </span>
  </li>

  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span>
      <b>Styled with Tailwind CSS:</b> Clean, customizable styling with utility-first classes for rapid UI development.
    </span>
  </li>
</ul>

        
                </>
              )}
        </>
    )
}
export default Diomand;