
import interview from "../assets/images/entretien.svg"
import BlocPages from "../components/blocPages";

export default function Entretien () {

    const imgSrc = interview
    const title1 = "Entretien"
    const title2 = null
    const text1 = "De formation, je suis psychologue en psychologie sociale spécialisée dans l’étude des représentations (2022). Je travaille actuellement au sein d’un laboratoire de recherche en psychologie sociale à Brest. Je me suis spécialisée dans les représentations et les pratiques liées à son lieu de vie. Autrement dit, je m’intéresse à la façon dont les individus conçoivent leur réalité en fonction de là où il se trouve. J’ai ainsi mené plusieurs études sur les liens entre attachement au lieu, identité, valeurs, comportements, ou encore sensibilité écologique. J’ai étudié différents territoires (Bretagne, Pays de la Loire, Islande…) ce qui me permet d’avoir une vision d’ensemble sur la manière l’environnement physique peut influer sur l’individu."
    const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nec sem vitae porta.  Pellentesque leo dolor, rutrum quis ultrices nec, malesuada in ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus in interdum. In dignissim tortor tristique interdum volutpat.  in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus  in interdum. In dignissim tortor tristique interdum volutpat. "
    const button = true

    return <div className="my-12">
            <BlocPages 
                imgSrc={imgSrc}
                title1={title1}
                title2={title2}
                text1={text1}
                text2={text2}
                button={button}
                stylized={"img_about"}
            />
        </div>
}