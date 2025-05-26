import TitleH1 from "../components/TitleH1"
import ServicesCards from "../components/ServicesCards"

function Services () {
    return (
        <div>
            <img src="./src/assets/images/banner.jpg" alt="" />
            <TitleH1 title={"Mon offre des services"} complement={"Voici les prestations sur lesquelles je peux intervenir"}></TitleH1>
            <div className="grid grid-cols-3 gap-6 w-auto max-w-7xl content-center m-auto">
            <ServicesCards url={"pinceau"} title={"UX Design"} text = "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."></ServicesCards>
            <ServicesCards url={"code"} title={"Développement web"} text = "Le dévelopement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)."></ServicesCards>
            <ServicesCards url={"loupe"} title={"Référencement"} text = "Le référencement naturel (SEO) est une technique qui constiste à optimiser un site web pour le faire emonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."></ServicesCards>
            </div>
        </div>
    )
}

export default Services