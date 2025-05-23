import Card from "../components/Cards"
import DatasCards from "../services/CardContent"
import TitleH1 from "../components/TitleH1"

function Portfolio () {
    const contentCard = DatasCards()
    return (
        <div>
            <img src="./src/assets/images/banner.jpg" alt="" />
            <TitleH1 title={"Portfolio"} complement={"Voici quelques unes de mes créations"}></TitleH1>
            <div className="flex flex-row flex-wrap justify-center gap-8 my-8">
                {contentCard.projects.map((project) =>(
                    <Card real={project}></Card>
                ))}
            </div>
        </div>
    )
}

export default Portfolio