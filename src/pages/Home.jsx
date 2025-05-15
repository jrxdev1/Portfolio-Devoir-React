function BackgroundImage () {
    return (
        <div className="bg-[url('./src/assets/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center h-170 flex flex-col justify-center items-center gap-5">
            <h1 className="text-white text-center text-5xl">Bonjour, je suis John Doe</h1>
            <h2 className="text-white text-center text-xl">Développeur web full stack</h2>
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">En savoir plus</button>
        </div>
    )
}

function Progress ({competence, pourcentage, color}) {
    return (
        <div>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium">{competence}</span>
            <span className="text-sm font-medium">{pourcentage}</span>
        </div>
        <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium bg-gray-200 mb-5">
            <div className="flex h-full items-center justify-center overflow-hidden break-all rounded-full text-white" style={{width: pourcentage, backgroundColor: color}}></div>
        </div>
        </div>
    )
}

function Presentation () {
    return (
        <div>%
            <div>
                <h3>A propos</h3>
            </div>
            <div>
                <h3>Mes compétences</h3>
                <Progress competence = "HTML 5" pourcentage="90%" color={"red"}></Progress>
                <Progress competence = "CSS3" pourcentage="80%" color={"lightblue"}></Progress>
                <Progress competence = "JAVASCRIPT" pourcentage="70%" color={"yellow"}></Progress>
                <Progress competence = "PHP" pourcentage="60%" color={"green"}></Progress>
                <Progress competence = "REACT" pourcentage="50%" color={"blue"}></Progress>
            </div>
        </div>
    )
}



function Home () {
    return (
        <>
        <BackgroundImage></BackgroundImage>
        <Presentation></Presentation>
        </>
    )
}
export default Home