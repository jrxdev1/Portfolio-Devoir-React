import TitleH1 from "../components/TitleH1"
import Formulaire from "../components/Forms"; 
import MesCoordonnees from "../components/ContactDetails";


function Contact () {
    return (
        <div>
            <TitleH1 title={"Contact"} complement={"Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."}></TitleH1>
            <div className="grid md:grid-cols-2 mb-8 max-w-350 m-auto mt-3 p-3 border border-solid border-gray-300 shadow-md rounded-lg shadow-s ">
                <Formulaire></Formulaire>
                <MesCoordonnees></MesCoordonnees>
            </div>
        </div>
    )
}

export default Contact