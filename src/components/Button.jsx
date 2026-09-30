
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkmode } from "../features/darkmode";





function Button() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.darkmode.dark);

  return (
   
    
      
       <button className=" font-semibold text-3xl  rounded-4xl cursor-pointer text-[#764eb8] " onClick={() => dispatch(toggleDarkmode())}>
      <i
        className= {`${
                isDark
                  ? 'bx bx-moon '
                  :  'bx bxs-sun '
              }`}>
              </i>
     </button>
         

  );
}

export default Button;