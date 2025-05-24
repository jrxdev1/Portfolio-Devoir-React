import TitleH1 from "../components/TitleH1"

function Forms ({remplissage}) {
    return (
    <input type="text" placeholder={remplissage} className="border rounded-md border-gray-200 p-1"/>
)
}

function Formulaire () {
return (
    <div className="p-3 max-w-170">
        <h3>Formulaire de contact</h3>
        <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6 "/>
        <form className="mt-3 flex flex-col gap-1">
            <Forms remplissage = "Votre nom"></Forms>
            <Forms remplissage = "Votre adresse mail"></Forms>
            <Forms remplissage = "Votre numéro de téléphone"></Forms>
            <Forms remplissage = "Sujet"></Forms>
            <textarea name="message" id="message" placeholder="Votre message" rows={18} className="border rounded-md border-gray-200 p-1"></textarea>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Envoyer</button>
        </form>
    </div>
)
}

function MesCoordonnees() {
    return (
        <div className="p-3 max-w-170">
            <h3>Mes coordonnées</h3>
            <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6"/>
            <div className="flex flex-col">
            <p className="mb-2 text-gray-5000">John Doe</p>
            <address className="flex flex-col">
                <span>40 rue Laure Diebold</span>
                <span>69009 Lyon, France</span>
            </address>
            <a href="tel:1020304050">10 20 30 40 50</a>
            <a href="mailto:john.do@gmail.com">john.do@gmail.com</a>
            </div>
        </div>
    )
}


function Contact () {
    return (
        <div>
            <TitleH1 title={"Contact"} complement={"Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact."}></TitleH1>
            <div className="grid grid-cols-2 mb-8 min-w-200 max-w-350 m-auto mt-3 p-3 border border-solid border-gray-300 shadow-md rounded-lg shadow-s ">
                <Formulaire></Formulaire>
                <MesCoordonnees></MesCoordonnees>
            </div>
        </div>
    )
}

export default Contact