import { useState } from "react";
import aboutimg from "../assets/images/about.jpg"
import BlocPages from "../components/blocPages";
import aut from "../assets/images/aut.jpg"
import girl from "../assets/images/tab.webp"
import ville from "../assets/images/flower.png"
import pay from "../assets/images/pay.jpg"
import view from "../assets/images/view.png"
import riv from "../assets/images/riv.jpg"
import PropTypes from 'prop-types';


function Card({ imageSrc, altText, backText }) {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleMouseEnter = () => {
      setIsFlipped(true);
    };
  
    const handleMouseLeave = () => {
      setIsFlipped(false);
    };
  
    return (
      <div className={`carde ${isFlipped ? 'flipped' : ''}`}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        <div className="fronte">
          <img className="object-cover" src={imageSrc} alt={altText} />
        </div>
        <div className="backe">
          <p>{backText}</p>
        </div>
      </div>
    );
  }

  
export default function About () {

    const imgSrc = aboutimg
    const title1 = "Mon parcours"
    const title2 = "A propos d'ancrage"
    const text1 = "De formation, je suis psychologue en psychologie sociale spécialisée dans l’étude des représentations (2022). Je travaille actuellement au sein d’un laboratoire de recherche en psychologie sociale à Brest. Je me suis spécialisée dans les représentations et les pratiques liées à son lieu de vie. Autrement dit, je m’intéresse à la façon dont les individus conçoivent leur réalité en fonction de là où il se trouve. J’ai ainsi mené plusieurs études sur les liens entre attachement au lieu, identité, valeurs, comportements, ou encore sensibilité écologique. J’ai étudié différents territoires (Bretagne, Pays de la Loire, Islande…) ce qui me permet d’avoir une vision d’ensemble sur la manière l’environnement physique peut influer sur l’individu."
    const text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nec sem vitae porta.  Pellentesque leo dolor, rutrum quis ultrices nec, malesuada in ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus in interdum. In dignissim tortor tristique interdum volutpat.  in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus  in interdum. In dignissim tortor tristique interdum volutpat. "
    const button = false

    return <section className="flex flex-col mt-24">
        
        <BlocPages 
            imgSrc={imgSrc}
            title1={title1}
            title2={title2}
            text1={text1}
            text2={text2}
            button={button}
            stylized={"img_about_ju"}
         />

        <article className="theme_ancrage m-3 sm:m-12">
            <h2 className="text-5xl lg:text-7xl mb-24 text-center">Mes thématiques de recherches</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center w-3/4 mx-auto">
                <Card imageSrc={aut} altText="Image 1" backText="Texte pour Image 1" />
                <Card imageSrc={girl} altText="Image 2" backText="Texte pour Image 2" />
                <Card imageSrc={ville} altText="Image 3" backText="Texte pour Image 3" />
                <Card imageSrc={pay} altText="Image 4" backText="Texte pour Image 4" />
                <Card imageSrc={view} altText="Image 5" backText="Texte pour Image 5" />
                <Card imageSrc={riv} altText="Image 6" backText="Texte pour Image 6" />
            </div>
        </article>
    </section>
}

Card.propTypes = {
    imageSrc: PropTypes.string,
    altText: PropTypes.string,
    backText: PropTypes.string,
  };