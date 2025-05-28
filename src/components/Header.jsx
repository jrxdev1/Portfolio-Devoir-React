import { NavLink } from "react-router";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

function Header () {
    useEffect(() => {
        initFlowbite();
    }, []);

    return (

<nav>
  <div className="flex flex-wrap items-center justify-between mx-auto p-4 bg-gray-800">
        <span className="self-center text-2xl whitespace-nowrap text-white">JOHN DOE</span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li><NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "text-white underline font-bold" : "text-white hover:underline"}
                >HOME</NavLink></li>
        <li><NavLink
            to="/services"
            className={({ isActive }) =>
            isActive ? "text-white underline font-bold" : "text-white hover:underline"}
            >SERVICES</NavLink></li>
        <li><NavLink 
            to="/portfolio"
            className={({ isActive }) =>
                isActive ? "text-white underline font-bold" : "text-white hover:underline"}
                >PORTFOLIO</NavLink></li>
        <li><NavLink
            to="/contact"
            className={({ isActive }) =>
                isActive ? "text-white underline font-bold" : "text-white hover:underline"}
                >CONTACT</NavLink></li>
        <li><NavLink
            to="/mentionslegales"
            className={({ isActive }) =>
                isActive ? "text-white underline font-bold" : "text-white hover:underline"}
                >MENTIONS LEGALES</NavLink></li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header

/*
<header className="bg-gray-800 grid grid-flow-col">
<h1 className="text-white ml-4">JOHN DOE</h1>
<nav className="text-right flex justify-between mr-4">
    <NavLink className="text-white" to="/">HOME</NavLink>
    <NavLink className="text-white" to="/services">SERVICES</NavLink>
    <NavLink className="text-white" to="/portfolio">PORTFOLIO</NavLink>
    <NavLink className="text-white" to="/contact">CONTACT</NavLink>
    <NavLink className="text-white" to="/mentionslegales">MENTIONS LEGALES</NavLink>
</nav>
</header>
*/