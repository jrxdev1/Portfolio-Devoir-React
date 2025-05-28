function Card ({infos}) {
    const urlImage = new URL (`../assets/images/${infos.picture}`, import.meta.url).href;

    return (
        <div className="flex flex-col items-center w-full md:w-1/4 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:shadow-md">
            <img src={urlImage} alt="" />
            <h2 className="text-xl font-semibold mb-2 mt-2">{infos.title}</h2>
            <p className="text-gray-600 mb-2">{infos.description}</p>
            <button type="button" className="text-white bg-blue-600 hover:bg-blue-400 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Voir le site</button>
            <p className="w-full p-3 bg-gray-100 border border-gray-300 self-end text-center">{infos.realisation}</p>
        </div>
    )
}

export default Card