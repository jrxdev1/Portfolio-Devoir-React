import { NavLink } from "react-router";

function BackgroundImage () {
    return (
        <div className="bg-[url('./src/assets/images/hero-bg.jpg')] bg-cover bg-no-repeat bg-center h-170 flex flex-col justify-center items-center gap-5">
            <h1 className="text-white text-center text-5xl">Bonjour, je suis John Doe</h1>
            <h2 className="text-white text-center text-xl">Développeur web full stack</h2>
            <NavLink to="/profilGitHub">
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">En savoir plus</button>
            </NavLink>
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
        <div className="grid grid-cols-2 mb-8 min-w-200 max-w-350 m-auto mt-3 p-3 border border-solid border-gray-300 shadow-md rounded-lg shadow-s ">
            <div className="p-3 max-w-170">
                <h3>A propos</h3>
                <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6"/>
                <img src="./src/assets/images/john-doe-about.jpg" alt="John Doe" className=" w-full max-w-170"/>
                <div className="mt-3">
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio explicabo eos ipsum accusantium libero aliquam, voluptatem ea porro eum eaque dolores magni officiis nobis quod! Iure cupiditate laborum totam.</p>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis mollitia maxime aut, illum, repellendus esse a cum placeat debitis commodi magnam excepturi? Cumque, eos ad! Cupiditate dicta est explicabo corrupti.</p>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis facere culpa quod ipsa. Cupiditate repellendus magnam ipsam sunt ex aspernatur dolorum? Iste odit vero consectetur eos veniam. Quia, excepturi.</p>
                </div>
            </div>
            <div className="p-3">
                <h3>Mes compétences</h3>
                <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6"/>
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