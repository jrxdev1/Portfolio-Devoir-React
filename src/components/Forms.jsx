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

export default Formulaire