import { useSelector } from "react-redux";
import { useState } from "react";

// 🔹 Mobile SkillCard (toggle one at a time)
function MobileSkillCard({ img, title, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-28 h-28 rounded-3xl cursor-pointer transition
        ${active ? "bg-[#270d52] border-2 border-[#764eb8]" : "bg-[#180d27]"}`}
    >
      <img
        src={img}
        alt={title}
        className={`w-28 h-28 p-6 object-contain transition
          ${active ? "grayscale-0" : "grayscale-[0.9]"}`}
      />
      <p className="text-[#764eb8] text-sm font-bold text-center">{title}</p>
    </div>
  );
}

// 🔹 Desktop SkillCard (hover only)
function DesktopSkillCard({ img, title }) {
  return (
    <div
      className="md:w-40 md:h-40 rounded-3xl cursor-pointer transition 
      bg-[#180d27] hover:bg-[#270d52] hover:border-2 hover:border-[#764eb8]"
    >
      <img
        src={img}
        alt={title}
        className="md:w-40 md:h-40 p-11 object-contain grayscale-[0.9] hover:grayscale-0 transition"
      />
      <p className="text-[#764eb8] text-lg font-bold text-center">{title}</p>
    </div>
  );
}

function Skills() {
  const isDark = useSelector((state) => state.darkmode.dark);

  // 🔹 Track active skill index (for mobile only)
  const [activeIndex, setActiveIndex] = useState(null);

  const skills = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
      title: "HTML",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/16020/16020753.png",
      title: "CSS",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
      title: "JavaScript",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/875/875209.png",
      title: "React",
    },
    {
      img: "https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png",
      title: "Tailwindcss",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4494/4494740.png",
      title: "Git",
    },
  ];

  return (
    <div className="flex h-130 justify-center mb-30 md:mb-0 mt-10">
      <div className="flex flex-col items-center gap-3 md:gap-6">
        <h1
          className={` text-4xl md:text-6xl md:pb-6 pb-2 font-extrabold bg-gradient-to-r cursor-pointer from-[#8259c4] bg-clip-text text-transparent 
          ${isDark ? "to-[#0a000f]" : "to-white"}`}
        >
          My Skills
        </h1>
        <p className="md:text-lg text-sm text-wrap md:w-170 w-80 text-center">
          I transform your ideas and wishes into a unique web project that
          inspires both you and your customers.
        </p>

        <div className="flex flex-wrap justify-center gap-5 items-center mt-10">
          {/* 🔹 Mobile version */}
          <div className="flex flex-wrap mx-10 gap-5 justify-center md:hidden">
            {skills.map((s, i) => (
              <MobileSkillCard
                key={i}
                img={s.img}
                title={s.title}
                active={activeIndex === i}
                onClick={() =>
                  setActiveIndex(activeIndex === i ? null : i) // toggle one at a time
                }
              />
            ))}
          </div>

          {/* 🔹 Desktop version */}
          <div className="hidden md:flex flex-wrap gap-5 justify-center">
            {skills.map((s, i) => (
              <DesktopSkillCard key={i} img={s.img} title={s.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
