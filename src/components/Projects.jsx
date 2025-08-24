import git from "../assets/git.PNG";
import swiggy from "../assets/swiggy.PNG";
import diomand from "../assets/diomand.PNG";
import todo from "../assets/todo.PNG";
import { useSelector } from "react-redux";
import { useState } from "react";
import Githubdetail from "./Githubdetail.jsx";
import Todoproject from "./Todoproject.jsx";
import Diomand from "./Diomand.jsx";
import Swiggy from "./Swiggy.jsx";
import demovedio from "../assets/demovedio.mp4"

function Projects() {
  const isDark = useSelector((state) => state.darkmode.dark);
  const [show, SetShow] = useState(null); // desktop popup
  const [mobileOverlay, setMobileOverlay] = useState(null); // overlay state
  const [clickedOnce, setClickedOnce] = useState(null); // mobile double-click

  const isMobile = window.innerWidth < 768;

  // reusable card
  const ProjectCard = ({ id, img, title, desc, githubLink, liveLink }) => {
    const handleMobileClick = (e, linkId) => {
      if (clickedOnce !== linkId) {
        // first click → only show overlay
        e.preventDefault();
        setClickedOnce(linkId);
        setMobileOverlay(linkId);
      } else {
        // second click → allow link to open
        setClickedOnce(null);
        setMobileOverlay(null);
      }
    };

    return (
      <div
        className="bg-[#180d27] relative cursor-pointer overflow-hidden 
          md:w-150 md:h-90 w-80 h-60 rounded-lg group"
        onClick={() => {
          if (!isMobile) {
            SetShow(id); // desktop → popup
          } else {
            setMobileOverlay(mobileOverlay === id ? null : id); // mobile → overlay toggle
          }
        }}
      >
        <img
          className="md:w-150 md:h-90 w-84 h-60 md:pt-11 pt-4 md:px-11 px-4 
            grayscale-[0.9] opacity-70 group-hover:grayscale-0 transition duration-500"
          src={img}
          alt={title}
        />

        {/* overlay */}
        <div
          className={`absolute inset-0 bg-black/60 flex justify-center items-end text-white 
            transition duration-500 
            ${isMobile ? (mobileOverlay === id ? "opacity-100" : "opacity-0") 
                       : "opacity-0 group-hover:opacity-100"}`}
        >
          <div className="bg-gradient-to-r from-[#905add] to-[#484985] 
            text-3xl w-75 md:w-130 md:h-25 mb-5 font-bold px-2 pt-3 rounded-2xl shadow-lg">
            <p className="text-xl md:text-3xl">{title}</p> 
            <p className="text-sm font-normal md:mb-9 flex justify-between">
              {desc}
              <i className="bx bx-arrow-up-right text-4xl relative mb-5 bottom-4"></i>
            </p>

            {/* buttons */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => isMobile && handleMobileClick(e, id + "-git")}
            >
              <button className="border-2 rounded-2xl px-2 mr-3 mb-5 border-white">
                <i className="bx bxl-github text-sm"></i>
                <samp className="relative bottom-0.5 pl-1 text-sm font-semibold">
                  view on GitHub
                </samp>
              </button>
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => isMobile && handleMobileClick(e, id + "-live")}
            >
              <button className="border-2 rounded-2xl border-white px-2">
                <i className="bx bx-arrow-out-up-right-square text-sm"></i>
                <samp className="relative bottom-0.5 text-sm pl-1 font-semibold">
                  Live Demo
                </samp>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1
          className={`text-4xl md:text-6xl md:pb-6 pb-4 font-extrabold bg-gradient-to-r cursor-pointer from-[#8259c4] bg-clip-text text-transparent ${
            isDark ? "to-[#0a000f]" : " to-white"
          }`}
        >
          My Projects
        </h1>
        <p className="md:text-lg text-sm text-wrap md:w-170 mb-10 text-white w-80 text-center">
          Some of the most interesting projects that I made. Feel free to
          explore my Github for more projects.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <ProjectCard
            id="todo"
            img={todo}
            title="Todo App"
            desc="This project is designed to keep track of tasks and their completion status."
            githubLink="https://github.com/Monika-saini21/todo-list"
            liveLink="https://todo-app-monika.netlify.app/"
          />
          <ProjectCard
            id="diamond"
            img={diomand}
            title="Diamond Jewellery"
            desc="A full jewellery brand website built with Vite + React."
            githubLink="https://github.com/Monika-saini21/diamond-jewellery"
            liveLink="https://diamond-jewellery.netlify.app/"
          />
          <ProjectCard
            id="swiggy"
            img={swiggy}
            title="Swiggy Clone"
            desc="Food ordering app clone with search, cart, and menu features."
            githubLink="https://github.com/Monika-saini21/swiggy-api"
            liveLink={demovedio}
          />
          <ProjectCard
            id="github"
            img={git}
            title="GitHub Analyzer"
            desc="A tool that fetches and analyzes GitHub user details."
            githubLink="https://github.com/Monika-saini21/Github-Profile-Analyzer"
            liveLink="https://github-profile-monika.netlify.app/"
          />
        </div>
      </div>

      {/* ✅ Popup (desktop only) */}
      {show && !isMobile && (
        <div className="fixed inset-0 bg-black/70 flex justify-center overflow-y-auto items-center z-50">
          <div className="bg-[#180d27] p-6 rounded-xl relative w-[900px]">
            <button
              className="sticky z-20 left-full top-3 cursor-pointer bg-purple-600 p-2 rounded-4xl text-black"
              onClick={() => SetShow(null)}
            >
              <i className="bx bx-message-square-x text-white text-3xl"></i>
            </button>
            {show === "github" && <Githubdetail show={show} />}
            {show === "todo" && <Todoproject show={show} />}
            {show === "diamond" && <Diomand show={show} />}
            {show === "swiggy" && <Swiggy show={show} />}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
