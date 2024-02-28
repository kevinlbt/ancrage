
import Video from "../assets/vidéo/phare-siteju.mp4"


export default function VideoBanner () {

    return <div className="video-banner my-12 px-20">
                <video className="rounded-xl" aria-hidden={true} autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>
                <div className="overlay-text">
                    
                </div>
            </div>
}