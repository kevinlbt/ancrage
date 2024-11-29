
import parcours from "../assets/images/walking.svg"
import BlocPages from "../components/blocPages";
import PropTypes from 'prop-types';

export default function Parcours () {

    const imgSrc = parcours
    const title1 = "Parcour commenté"
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
                stylized={"img_about_walking"}
            />
        </div>
}

BlocPages.propTypes = {
    imgSrc: PropTypes.string.isRequired, // Le chemin de l'image (obligatoire)
    title1: PropTypes.string.isRequired, // Titre principal (obligatoire)
    title2: PropTypes.string, // Titre secondaire (optionnel)
    text1: PropTypes.string.isRequired, // Premier texte (obligatoire)
    text2: PropTypes.string.isRequired, // Deuxième texte (obligatoire)
    button: PropTypes.bool, // Affichage d'un bouton (optionnel)
    stylized: PropTypes.string, // Classe CSS supplémentaire (optionnelle)
  };