import { useState } from "react";
import profile1 from "../assets/profile1.jpg";

function Image() {
  const [rotated, setRotated] = useState(true); // pehle rotate hoga

  // 🔹 Mobile toggle handler
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setRotated(!rotated); // toggle only in mobile
    }
  };

  return (
    <>
      <div className="   ">
        {/* <div className="absolute -left-29 md:top-125 top-60 w-60 h-60 
                        bg-purple-400 rounded-full blur-3xl opacity-50"></div>

        <div className="relative left-10 bottom-40 md:bottom-10 md:left-60 w-48 h-48 
                        bg-purple-400 rounded-full blur-3xl opacity-50"></div> */}

        <img
          src={profile1}
          alt="profile-image"
          onClick={handleClick}
          className={` md:h-120 md:w-120 w-60 h-60 object-cover cursor-pointer rounded-3xl 
                      border-2 border-[#2c0546] 
                      transition-transform duration-500 
                      ${rotated ? "rotate-8" : "rotate-0 border-[#764eb8]"} 
                      md:hover:rotate-0 md:hover:border-[#764eb8]`}
        />
      </div>
    </>
  );
}

export default Image;
