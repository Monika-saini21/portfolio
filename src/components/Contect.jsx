function  Contect(){
    return(
        <>
        <div className="bg-black md:flex-row flex flex-col mt-20 w-full md:w-auto justify-center md:justify-center">
        <div className=" md:w-150 md:pt-20  p-4 pt-9">
             <h1 className="md:text-5xl text-4xl w-60 font-extrabold cursor-pointer bg-gradient-to-r from-[#764eb8] to-white bg-clip-text text-transparent">
  About Me
</h1>
<p className="text-wrap md:text-xl text-sm text-white mt-6 cursor-pointer">As a passionate frontend developer, I help individuals and businesses transform their ideas into unique web projects.My goal is to bring ideas to life through interactive and engaging digital solutions.</p>
        </div>
        <div className="flex md:flex-col flex-col ml-3 justify-start items-start md:justify-end md:items-end md:py-20 py-6 md:w-150 w-80 gap-4  " >
            <div className="flex md:gap-6 gap-3 md:w-100 w-80  ">
             <i className='bx bx-phone-call text-xl border-2 mt-2 text-white border-white 
            bg-[#431c81] md:h-11 h-9 md:p-2 p-1.5 rounded-3xl cursor-pointer'></i>
                <div>
                    <p className=" text-md text-white cursor-pointer">Phone</p>
                    <h1 className="md:text-2xl text-lg text-white cursor-pointer">+91 83607-85822</h1>
                </div>
            </div>    
            <div className="flex md:gap-6 gap-3 md:w-100 w-80 ">
             <i className='bx bxl-gmail text-xl border-2 mt-2 text-white border-white 
            bg-[#431c81] md:h-11 h-9 md:p-2 p-1.5 rounded-3xl cursor-pointer'></i>
                <div>
                    <p className=" text-md text-white cursor-pointer">Email</p>
                    <h1 className="md:text-2xl text-lg text-white cursor-pointer">monikasaini4717@gmail.com</h1>
                </div>
            </div>    
                
        </div>
        </div>
        <p className="text-center p-10 text-white bg-black">© 2025 Monika Saini. All rights reserved.</p>
        </>
    )
}
export default Contect;