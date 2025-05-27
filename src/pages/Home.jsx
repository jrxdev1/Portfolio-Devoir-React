import PopUpGitHub from "../components/profil";


function BackgroundImage () {
    return (
        <div className="bg-[url('./src/assets/images/hero-bg.jpg')] w-full bg-no-repeat h-screen flex flex-col justify-center items-center gap-7">
            <h1 className="text-white text-center text-8xl">Bonjour, je suis John Doe</h1>
            <h2 className="text-white text-center text-6xl">Développeur web full stack</h2>
            <PopUpGitHub></PopUpGitHub>
        </div>
    )
}

function Progress ({competence, pourcentage, color}) {
    return (
        <div>
        <span className="text-base font-medium">{competence} {pourcentage}</span>
        <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans bg-gray-200 mb-5">
            <div className="flex h-full items-center justify-center overflow-hidden break-all text-white" style={{width: pourcentage, backgroundColor: color}}></div>
        </div>
        </div>
    )
}

function Presentation () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8 max-w-7xl mx-auto mt-3 p-3 border border-solid border-gray-300 shadow-md rounded-lg shadow-s ">
            <div className="p-3 max-w-170">
                <h3 className="text-xl font-semibold">A propos</h3>
                <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6"/>
                <img src="./src/assets/images/john-doe-about.jpg" alt="John Doe" className=" w-full max-w-170"/>
                <div className="mt-3 p-1.5">
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio explicabo eos ipsum accusantium libero aliquam, voluptatem ea porro eum eaque dolores magni officiis nobis quod! Iure cupiditate laborum totam.</p>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis mollitia maxime aut, illum, repellendus esse a cum placeat debitis commodi magnam excepturi? Cumque, eos ad! Cupiditate dicta est explicabo corrupti.</p>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis facere culpa quod ipsa. Cupiditate repellendus magnam ipsam sunt ex aspernatur dolorum? Iste odit vero consectetur eos veniam. Quia, excepturi.</p>
                </div>
            </div>
            <div className="p-3">
                <h3 className="text-xl font-semibold">Mes compétences</h3>
                <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6"/>
                <Progress competence = "HTML5" pourcentage="90%" color={"red"}></Progress>
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