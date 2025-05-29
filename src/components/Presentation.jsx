import Progress from "./ProgressBar"

function Presentation () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-8 max-w-7xl mx-auto mt-3 p-3 border border-solid border-gray-300 shadow-md rounded-lg shadow-s ">
            <div className="p-3 max-w-170">
                <h3 className="text-2xl font-semibold">A propos</h3>
                <div className="max-w-2lg m-auto bg-blue-500 h-1 rounded-full mt-2 mb-6"/>
                <img src="./src/assets/images/john-doe-about.jpg" alt="John Doe" className=" w-full max-w-170"/>
                <div className="mt-3 p-1.5">
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio explicabo eos ipsum accusantium libero aliquam, voluptatem ea porro eum eaque dolores magni officiis nobis quod! Iure cupiditate laborum totam.</p>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis mollitia maxime aut, illum, repellendus esse a cum placeat debitis commodi magnam excepturi? Cumque, eos ad! Cupiditate dicta est explicabo corrupti.</p>
                    <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis facere culpa quod ipsa. Cupiditate repellendus magnam ipsam sunt ex aspernatur dolorum? Iste odit vero consectetur eos veniam. Quia, excepturi.</p>
                </div>
            </div>
            <div className="p-3">
                <h3 className="text-2xl font-semibold">Mes compétences</h3>
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

export default Presentation