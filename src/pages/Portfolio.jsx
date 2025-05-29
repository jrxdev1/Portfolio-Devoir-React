import Card from "../components/Cards"
import DatasCards from "../services/CardContent"
import TitleH1 from "../components/TitleH1"

function Portfolio () {
    const contentCard = DatasCards()
    return (
        <div>
            <img src="./src/assets/images/banner.jpg" alt="" />
            <TitleH1 title={"Portfolio"} complement={"Voici quelques unes de mes créations"}></TitleH1>
            <div className="md:flex md:flex-row md:flex-wrap md:justify-center md:gap-8 md:my-8 flex flex-col gap-3 justify-center">
                {contentCard.projects.map((project,index) =>(
                    <Card key={index} infos={project}></Card>
                ))}
            </div>
        </div>
    )
}

export default Portfolio