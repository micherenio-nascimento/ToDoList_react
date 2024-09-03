import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineRocket } from "react-icons/md";

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    } 

    return (
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 bg-[#0AB6AB]">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl text-black flex items-center">
            <MdOutlineRocket className="mr-2" />ToDo List.
          </h1>
    
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <div
            className={`${
              nav ? "left-0" : "left-[-100%]"
            } fixed top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500`}
          >
            <h1 className="text-3xl font-bold text-black m-4">ToDo List.</h1>
          </div>
        </div>
      );
};

export default Navbar;
