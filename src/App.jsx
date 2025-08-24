import { useSelector } from "react-redux";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contect from "./components/Contect";


function App() {
    const isDark = useSelector((state) => state.darkmode.dark);
  return (
    
      <div
      className={`min-h-screen  w-full md:w-auto transition-all duration-500
        ${isDark ? 'bg-white text-black' : 'bg-[#0e0111] text-white'}
      `}
      >
      <Hero />
      <Skills/>
      <Projects/>
      <Contect/>
    </div>
  );
}

export default App;
