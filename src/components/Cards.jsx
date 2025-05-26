function Card ({real}) {
    const urlImage = new URL (`../assets/images/${real.picture}`, import.meta.url).href;

    return (
        <div className="flex flex-col items-center w-1/4 bg-white shadow-md rounded-lg border border-gray-200">
            <img src={urlImage} alt="" />
            <h2 className="text-xl font-semibold mb-2">{real.title}</h2>
            <p className="text-gray-600 mb-2">{real.description}</p>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Voir le site</button>
            <p className="w-full p-3 bg-gray-200 border border-gray-300 self-end text-center">{real.realisation}</p>
        </div>
    )
}

export default Card