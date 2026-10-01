import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex md:flex-row flex-col md:justify-end mx-4 md:gap-46 items-end gap-3 md:items-center  py-6 sm:pt-9">

      <div className="relative flex w-full  max-w-[820px] items-center justify-between rounded-full border border-gray-200 bg-white px-5 py-2 shadow-lg md:px-8">

        {/* Logo */}
        <h1 className="text-lg font-bold text-black sm:text-xl">
          Monika
        </h1>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 text-black md:flex">

          <Link
            to="/"
            className="rounded-full px-4 py-2 hover:bg-[#8259c4] hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="rounded-full px-4 py-2 hover:bg-[#8259c4] hover:text-white"
          >
            About
          </Link>

          <Link
            to="/skills"
            className="rounded-full px-4 py-2 hover:bg-[#8259c4] hover:text-white"
          >
            Skills
          </Link>

          <Link
            to="/projects"
            className="rounded-full px-4 py-2 hover:bg-[#8259c4] hover:text-white"
          >
            Projects
          </Link>

          

        </div>

       {/* Mobile Hamburger Button */}
<button
  onClick={() => setMenuOpen((prev) => !prev)}
  className="relative z-50 flex flex-col gap-1.5 rounded-lg p-2 md:hidden"
>
  <span className="h-0.5 w-6 bg-black"></span>
  <span className="h-0.5 w-6 bg-black"></span>
  <span className="h-0.5 w-6 bg-black"></span>
</button>

{/* Mobile Menu */}
{menuOpen && (
  <div className="absolute right-4 top-16 z-50 flex w-40 flex-col gap-2 rounded-2xl border bg-white p-3 text-black shadow-lg md:hidden">

    <Link
      to="/"
      onClick={() => setMenuOpen(false)}
      className="rounded-lg px-4 py-2 hover:bg-black hover:text-white"
    >
      Home
    </Link>

    <Link
      to="/about"
      onClick={() => setMenuOpen(false)}
      className="rounded-lg px-4 py-2 hover:bg-black hover:text-white"
    >
      About
    </Link>

    <Link
      to="/skills"
      onClick={() => setMenuOpen(false)}
      className="rounded-lg px-4 py-2 hover:bg-black hover:text-white"
    >
      Skills
    </Link>

    <Link
      to="/projects"
      onClick={() => setMenuOpen(false)}
      className="rounded-lg px-4 py-2 hover:bg-black hover:text-white"
    >
      Projects
    </Link>

  </div>
)}
      </div>

      {/* Button */}
      <div className="px-8">
        <Button />
      </div>

    </nav>
  );
}

export default Navbar;