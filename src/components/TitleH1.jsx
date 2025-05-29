function TitleH1 ({title, complement}) {
    return (
        <div className="text-center mb-10 mt-10">
            <h1 className="text-4xl my-5 font-semibold">{title}</h1>
            <h2 className="mb-6">{complement}</h2>
            <div className="max-w-lg m-auto bg-blue-600 h-1.5 rounded-full"/>
        </div>
    )
}

export default TitleH1