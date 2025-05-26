function ServicesCards ({title, text, url}) {
    return (
            <div className="flex flex-col items-center justify-start h-5/6 bg-white rounded-lg border border-gray-200 p-3 m-a mb-15 hover:bg-gray-100 hover:shadow-md">
                <img src={`../src/assets/images/${url}.png`} alt="" className="w-1/12 mt-12 mb-9"/>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="mb-2 text-center">{text}</p>
            </div>
    )
}

export default ServicesCards