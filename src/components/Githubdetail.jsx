import git from "../assets/git.PNG";

function Githubdetail({ show }) {
  return (
    <>
      {show && (
        <>
        <img src={git} alt="GitHub Analyzer" className=" rounded-lg w-full mt-140 h-110 " />
          <div className="flex mt-11 text-white gap-15">
            <div>
           
            <h1 className="text-3xl mt-7 font-bold mb-3">GitHub Profile Analyzer</h1>
            <p className="w-110">
              A sleek and interactive web application allowing users to input a GitHub username and instantly
              view a detailed snapshot of the corresponding GitHub profile. It fetches and displays essential
              information—like the user's avatar, bio, repositories, and statistics—providing a quick and elegant
              way to explore GitHub user activity.  
               </p>
               </div>
               <div>

              <h1 className="text-2xl mt-9 font-bold mb-3">Tech stack:</h1>
              <i class='bx bxl-html5 text-2xl '></i><span className="font-sans ml-1 text-lg ">HTML</span>
              <i class='bx bxl-css3 text-2xl ml-5' ></i><span className="font-sans ml-1 text-lg ">CSS</span>
              <i class='bx bxl-javascript text-2xl ml-5'></i><span className="font-sans ml-1 text-lg ">Javascript</span>
              
               
              </div>

        </div>
         <a href="https://github.com/Monika-saini21/Github-Profile-Analyzer" target="_blank" rel="noopener noreferrer"><button className="py-1 mt-15 hover:border-2 hover:border-white bg-[#764eb8] px-3 rounded-3xl border-2  border-[#764eb8]"><i class='bx bxl-github pt-1 text-2xl' ></i><samp className="relative bottom-1.5 pl-1 font-semibold">view on GitHub</samp></button></a>
                <a href="https://github-profile-monika.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="py-1 bg-[#764eb8] hover:border-2  hover:border-white pr-9 pl-4 ml-3 rounded-3xl border-2 border-[#764eb8]"><i class='bxr  bx-arrow-out-up-right-square pt-1.5 text-2xl'  ></i><samp className="relative bottom-1.5 pl-1 font-semibold">Live Demo</samp> </button></a>
              
          <h1 className="text-3xl mt-19 text-white font-bold mb-3 ">Key features:</h1>
          <ul className="space-y-4 text-white mt-6">
  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span className="">
      <b>Real-time GitHub Data:</b> Uses the Fetch API to call GitHub’s REST API and dynamically display user information.
    </span>
  </li>
  
  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span className="">
      <b>Profile Insights:</b> Shows avatar, bio, location, followers, following, and repository count.
    </span>
  </li>
  
  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span className="">
      <b>Repository List:</b> Displays repositories with details like description, language, and links.
    </span>
  </li>
  
  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span className="">
      <b>Responsive UI:</b> Clean and mobile-friendly layout for smooth viewing across all devices.
    </span>
  </li>
  
  <li className="flex items-start gap-3">
    <i className="bx bx-check-circle text-purple-600 text-xl mt-1"></i>
    <span className="">
      <b>Error Handling:</b> Notifies users if an invalid GitHub username is entered.
    </span>
  </li>
</ul>

        </>
      )}
    </>
  );
}

export default Githubdetail;
