import PopUpGitHub from "../components/profil";
import Presentation from "../components/Presentation";


function BackgroundImage () {
    return (
        <div className="bg-[url('./src/assets/images/hero-bg.jpg')] w-full bg-no-repeat h-screen flex flex-col justify-center items-center gap-7">
            <h1 className="text-white text-center text-4xl md:text-8xl">Bonjour, je suis John Doe</h1>
            <h2 className="text-white text-center text-xl md:text-6xl">Développeur web full stack</h2>
            <PopUpGitHub></PopUpGitHub>
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