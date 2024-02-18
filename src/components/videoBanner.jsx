
import Video from "../assets/vidéo/phare-siteju.mp4"


export default function VideoBanner () {

    return <div className="video-banner my-12">
                <video aria-hidden={true} autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
                <div className="overlay-text">
                    <h1>Recherche et propos pour mieux comprendre les
                        liens entre l’individu et son environnement
                        physique</h1>
                </div>
            </div>
}