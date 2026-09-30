import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contect from "./components/Contect";
import Navbar from "./components/Navbar";


function App() {
  const isDark = useSelector((state) => state.darkmode.dark);

  return (
    <div
      className={`min-h-screen w-full transition-all duration-500 ${
        isDark
          ? "bg-white text-black"
          : "bg-[#0e0111] text-white"
      }`}
    >
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About/>
              <Skills />
              <Projects />
             
            </>
          }
        />

        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contect />} />
      </Routes>

      {/* Footer har route par show hoga */}
      <Contect />
    </div>
  );
}

export default App;