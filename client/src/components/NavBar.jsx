import { HiMenuAlt4 } from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai'

import logo from "../../images/logo.png";

const NavBarItem = ({title, classProps})=>{
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const NavBar = ()=>{
    const navBarItems = ["Market", "Exchange", "Tutorials", "Wallets"]
    return (
        <nav className="w-full flex md:justify-center justofy-center item-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="log" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {navBarItems.map(()=>)}
            </ul>

        </nav>
    )
}
export default NavBar;