import TitleH1 from "../components/TitleH1"

function MentionsLegales () {
    return (
    <div>
        <TitleH1 title={"Mentions légales"}></TitleH1>
        <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 text-blue-600">
        <h2 id="accordion-color-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 hover:bg-blue-100  gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
            <span>Editeur du site</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </h2>
        <div id="accordion-color-body-1" className="hidden" aria-labelledby="accordion-color-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 flex flex-col">
            <p className="mb-2 text-gray-5000">John Doe</p>
            <address>
                <span>40 rue Laure Diebold</span> <br />
                <span>69009 Lyon, France</span>
            </address>
            <a href="tel:1020304050">10 20 30 40 50</a>
            <a href="mailto:john.do@gmail.com">john.do@gmail.com</a>
            </div>
        </div>
        <h2 id="accordion-color-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-100  gap-3" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
            <span>Hébergeur</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </h2>
        <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
            <div className="p-5 border border-b-0 border-gray-200">
            <p className="mb-2 text-gray-5000 font-bold">alwaysdata</p>
            <address>91 Rue du Faubourg Saint-Honoré, 75008 Paris</address>
            <a href="www.alwaysdata.com">www.alwaysdata.com</a>
            </div>
        </div>
        <h2 id="accordion-color-heading-3">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 hover:bg-blue-100  gap-3" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
            <span>Crédits</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
            </svg>
            </button>
        </h2>
        <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
            <div className="p-5 border border-t-0 border-gray-200">
            <p className="mb-2 text-gray-5000">Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" className="text-blue-500 underline">Centre Européen de formation</a>.</p>
            <p className="mb-2 text-gray-5000 italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" className="text-blue-500 underline">Pixabay</a></p>
            <div>
            <p className="mb-2 text-gray-5000 italic">Le favison ainsi que les icones de ce site ont été obtenues sur le site <a href="https://www.flaticon.com/fr/" className="text-blue-500 underline">Flaticon</a></p>
            <a href="https://www.flaticon.com/fr/icones-gratuites/artiste" title="artiste icônes">Artiste icônes créées par juicy_fish - Flaticon</a>
            <a href="https://www.flaticon.com/fr/icones-gratuites/loupe" title="loupe icônes">Loupe icônes créées par Muhammad_Usman - Flaticon</a>
            <a href="https://www.flaticon.com/fr/icones-gratuites/code" title="code icônes">Code icônes créées par KP Arts - Flaticon</a>
            </div>

            </div>
        </div>
        </div>
</div>
    )
}

export default MentionsLegales