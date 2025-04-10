import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import '../../../Components/Header.css'
const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
      <nav>
        <div onClick={()=>setIsOpen(!isOpen)} className="md:hidden p-5 text-2xl bg-yellow-400 ">
          {isOpen?<MdClose className="cursor-pointer" />: <HiOutlineMenuAlt1 className="cursor-pointer" />}
        </div>
        <ul className={`w-[250px] shadow-2xl md:w-full rounded-xl md:rounded-none duration-1000 flex flex-col gap-2
            ${isOpen?'top-14':'-top-[300px]'}
          md:flex-row md:gap-20 bg-yellow-400 p-5  md:static absolute ml-4 md:ml-0`}>
          <li className="hover:bg-blue-400 w-28 p-2 hover:text-center rounded-xl hover:font-bold">
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li className="hover:bg-blue-400 hover:text-center w-28 p-2 rounded-xl hover:font-bold">
              <NavLink to={'/about'}>About</NavLink>
          </li>
          <li className="hover:bg-blue-400 hover:text-center w-28 p-2 rounded-xl hover:font-bold">
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>
          <li className="hover:bg-blue-400 hover:text-center w-28 p-2 rounded-xl hover:font-bold">
              <NavLink to={'/users'}>Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
