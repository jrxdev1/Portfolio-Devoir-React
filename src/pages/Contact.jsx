import TitleH1 from "../components/TitleH1"

function Forms ({remplissage, type, pattern, onInput}) {
    return (
    <input type={type} placeholder={remplissage} pattern={pattern} onInput={onInput} required className="border rounded-md border-gray-200 p-1"/>
)
}

function Formulaire () {
return (
    <div className="p-3 max-w-170">
        <h3 className="text-xl font-semibold">Formulaire de contact</h3>
        <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6 "/>
        <form className="mt-3 flex flex-col gap-1">
            <Forms remplissage = "Votre nom" type="text"></Forms>
            <Forms remplissage = "Votre adresse mail" type="text"></Forms>
            <Forms remplissage = "Votre numéro de téléphone" type="tel" pattern="[0-9]{10}"
            onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, '');
            }}></Forms>
            <Forms remplissage = "Sujet" type="text"></Forms>
            <textarea name="message" id="message" placeholder="Votre message" type="text" rows={18} required className="border rounded-md border-gray-200 p-1"></textarea>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-auto mt-3 max-w-25">Envoyer</button>
        </form>
    </div>
)
}

const GoogleMapEmbed = () => {
    return (
      <div className="w-full h-100">
        <iframe 
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11130.508696056193!2d4.788700636563704!3d45.778661539217026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1748364329890!5m2!1sfr!2sfr"
        allowFullScreen
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>

      </div>
    );
  };


function MesCoordonnees() {
    return (
        <div className="p-3 max-w-170">
            <h3 className="text-xl font-semibold">Mes coordonnées</h3>
            <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6"/>
            <div className="flex flex-col">
            <p className="mb-2 text-gray-5000 text-2xl">John Doe</p>
            <address className="flex flex-col">
                <span className="flex flex-row mb-0.5 not-italic"><img src="./src/assets/images/carte.png" alt="" className="w-5 h-5 mr-2"/>40 rue Laure Diebold</span>
                <span className="flex flex-row mb-0.5 not-italic"><img src="./src/assets/images/epingle.png" alt="" className="w-5 h-5 mr-2"/>69009 Lyon, France</span>
            </address>
            <a href="tel:1020304050" className="flex flex-row mb-0.5"><img src="./src/assets/images/telephone.png" alt="" className="w-5 h-5 mr-2 mt-0.5"/>10 20 30 40 50</a>
            <a href="mailto:john.doe@gmail.com" className="flex flex-row mb-0.5"><img src="./src/assets/images/email.png" alt="" className="w-5 h-5 mr-2 mt-1"/>john.doe@gmail.com</a>
           <GoogleMapEmbed/>
            </div>
        </div>
    )
}


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