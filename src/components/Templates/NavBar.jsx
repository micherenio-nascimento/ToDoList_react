import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    } 

    return (
        <div className=' flex text-center items-center h-24 max-w-[1240px] mx-auto px-4 bg-[#0AB6AB]'>
            <h1 className='w-full text-3xl items-center font-bold  text-black'>ToDo List.</h1>
            
            <div onClick={handleNav} className='block md:hidden'>

                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
               <h1 className='w-full text-3xl font-bold text-black m-4'>ToDo List.</h1>
               
            </div>
        </div>
    );
};

export default Navbar;
