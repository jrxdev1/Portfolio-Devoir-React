import { NavLink } from "react-router";

function Header () {
    return (
        <header className="bg-gray-800 grid grid-flow-col">
        <h1 className="text-white ml-4">John Doe</h1>
        <nav className="text-right flex justify-between mr-4">
            <NavLink className="text-white" to="/">HOME</NavLink>
            <NavLink className="text-white">SERVICES</NavLink>
            <NavLink className="text-white" to="/portfolio">PORTFOLIO</NavLink>
            <NavLink className="text-white" to="/contact">CONTACT</NavLink>
            <NavLink className="text-white" to="/mentionslegales">MENTIONS LEGALES</NavLink>
        </nav>
        </header>
    )
}

export default Header