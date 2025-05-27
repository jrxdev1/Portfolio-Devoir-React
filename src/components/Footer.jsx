import { NavLink } from "react-router";

function Footer () {
    return (
        <footer className="bg-gray-800 grid grid-cols-1 md:grid-cols-3 text-white p-7 gap-4 md:justify-items-center">
        <div>
            <h2 className="mb-2 text-xl">John Doe</h2>
            <div className="flex flex-col">
            <address>
                <span>40 rue Laure Diebold</span><br />
                <span>69009 Lyon, France</span>
           </address>
            <a href="tel:1020304050">10 20 30 40 50</a>
            <a href="mailto:john.do@gmail.com">john.do@gmail.com</a>
            <div className="flex flex-row w-25 gap-2 mt-4">
                <a href="https://github.com/github-john-doe" target="blank"><img src="./src/assets/images/github.png" alt="logo Github" className="invert grayscale hover:grayscale-0"/></a>
                <a href=""><img src="./src/assets/images/twitter.png" alt="logo X" className="invert grayscale"/></a>
                <a href=""><img src="./src/assets/images/linkedin.png" alt="logo Linkedin" className="invert grayscale"/></a>
            </div>
            </div>
        </div>
        <div>
            <h2 className="mb-2 text-xl">Liens utiles</h2>
            <nav className="flex flex-col">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Me contacter</NavLink>
            <NavLink to="/mentionslegales">Mentions légales</NavLink>
            </nav>
        </div>
        <div>
            <h2 className="mb-2 text-xl">Mes derniers réalisations</h2>
            <nav className="flex flex-col">
            <NavLink to="/portfolio">Fresh Food</NavLink>
            <NavLink to="/portfolio">Resaurant Akira</NavLink>
            <NavLink to="/portfolio">Espace bien-être</NavLink>
            <NavLink to="/portfolio">SEO</NavLink>
            <NavLink to="/portfolio">Création d'une API</NavLink>
            <NavLink to="/portfolio">Maquette d'un site</NavLink>
            </nav>
        </div>
        </footer>
    )
}

export default Footer