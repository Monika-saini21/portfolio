
import demovedio from "../assets/demovedio.mp4"
import { TbBrandVite } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
function Swiggy ({show}){
    return(
        <>
        {show && (
                <>
                
                <video 
        src={demovedio} 
        controls 
        autoPlay 
        loop 
        muted 
        className="rounded-lg w-full mt-140 "
      />
                  <div className="flex mt-11 text-white gap-15">
                    <div>
                   
                    <h1 className="text-3xl mt-7 font-bold mb-3">Swiggy (clone)</h1>
                    <p className="w-110">
                     This project is a Swiggy-inspired food delivery application built to replicate the core functionality 
                     of an online restaurant and food ordering platform. It allows users to browse a list of restaurants, explore menus,
                     add items to the cart, and manage their orders—all within a responsive and user-friendly interface. The project
                     demonstrates strong skills in React.js, state management, API handling, and UI design. 
                       </p>
                       </div>
                       <div >
        
                      <h1 className="text-2xl mt-9 font-bold mb-3">Tech stack:</h1>
                      <div className="flex  w-85 mt-7 flex-wrap" >
                      <i class='bx bxl-react  text-2xl '></i><span className="font-sans ml-1 mr-16 text-lg ">React.js</span>
                     <SiReactrouter className="text-2xl " /><span className="font-sans ml-1 text-lg ">React Router DOM</span>
                     
                       <i class='bx bxl-tailwind-css  text-2xl mt-8 '></i><span className="font-sans ml-1 text-lg mt-8 mr-6 ">Tailwind CSS</span>
                     <TbBrandVite className="text-2xl mt-8 " title="React Router DOM"/><span className="font-sans ml-1 mt-8 text-lg "> Vite </span>
                     <i class='bx bxl-github text-2xl mt-8 '> <span className="font-sans mt-8 text-lg "> GeaLocationAPI</span></i> 
                      </div>
                      </div>
        
                </div>
                  <a href="https://github.com/Monika-saini21/swiggy-api" target="_blank" rel="noopener noreferrer"><button className="py-1 mt-15 hover:border-2 hover:border-white bg-[#764eb8] px-3 rounded-3xl border-2  border-[#764eb8]"><i class='bx bxl-github pt-1 text-2xl' ></i><samp className="relative bottom-1.5 pl-1 font-semibold">view on GitHub</samp></button></a>
                      
                  <h1 className="text-3xl mt-19 text-white font-bold mb-3 ">Key features:</h1>
                  <ul className="space-y-4 text-white mt-6">
          <li className="flex items-start gap-3">
            <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
            <span className="">
              <b>Restaurant Listing:</b>Displays a dynamic list of restaurants with name, ratings, and cuisine details.
            </span>
          </li>
          
          <li className="flex items-start gap-3">
            <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
            <span className="">
              <b>Menu Page:</b> Clicking a restaurant shows its complete menu, fetched from the Swiggy API (or mock API).
            </span>
          </li>
          
          <li className="flex items-start gap-3">
            <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
            <span className="">
              <b>Cart Functionality:</b>Add/remove food items, update quantity, and view total bill.
            </span>
          </li>
          
          <li className="flex items-start gap-3">
            <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
            <span className="">
              <b>Search & Filter:</b>Easily search restaurants by name and filter based on cuisine or rating.
            </span>
          </li>
          
          <li className="flex items-start gap-3">
            <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
            <span className="">
              <b>Routing:</b>Implemented navigation between restaurant list, menu, and cart using React Router.
            </span>
          </li>
          
          <li className="flex items-start gap-3">
            <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
            <span className="">
              <b>Error Handling:</b>Graceful error messages for failed API calls or empty states.
            </span>
          </li>
        </ul>
        
                </>
              )}
        </>
    )
}
export default Swiggy;