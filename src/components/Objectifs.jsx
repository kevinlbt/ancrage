import React from "react";
import { useElementOnScreen } from '../utils/useElementOnScreen'
import objs1 from "../assets/images/obj-1.webp"
import objs2 from "../assets/images/objs-1.jpg"
import objs3 from "../assets/images/obj-3.webp"

export default function Objectifs() {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    })

    return <React.Fragment>
        <div ref={containerRef} className="my-24 objs flex flex-col sm:flex-row justify-evenly items-center flex-wrap">
            <div className={`sm:w-1/4 m-7 flex flex-col justify-center items-center left ${isVisible ? "appear" : null}`}>
                <img className="w-3/5 sm:w-4/6 lg:w-2/5" srcSet={objs1} alt=""></img>
                <p className="text-center m-2 lg:m-8 text-base text-xl lg:text-2xl"><strong>Axe 1</strong> : rapport à son environnement physique (attitude, comportement, représentation, risque).</p>
            </div>
            <div className={`sm:w-1/4 m-7 flex flex-col justify-center items-center bot ${isVisible ? "appear" : null}`}>
                <img className="w-2/4 sm:w-3/5 lg:w-1/3" srcSet={objs2} alt=""></img>
                <p className="text-center m-2 lg:m-8 text-base text-xl lg:text-2xl"><strong>Axe 2</strong> : santé mentale, bien-être, rapport de la nature</p>
            </div>
            <div className={`sm:w-1/4 m-7 flex flex-col justify-center items-center right ${isVisible ? "appear" : null}`}>
                <img className="w-2/4 sm:w-3/5 lg:w-1/3" srcSet={objs3} alt=""></img>
                <p className="text-center m-2 lg:m-8 text-base text-xl lg:text-2xl"><strong>Axe 3</strong> : Enjeux territoriaux, volonté et projection du lieu de vie</p>
            </div>
        </div>
        <div className="description_text sm:w-2/3 mx-2 sm:mx-auto mb-24 mt-12 text-center">
            <h2 className="sm:text-5xl text-4xl mb-12 text-center">Psychologie et environnement</h2>
            <p className="text-lg">L&#39;étude des lieux d&#39;attachements nous amène à traiter de la psychologie sociale et
                environnementale. Proposant une approche multidisciplinaire, elle est une science qui étudie
                la relation entre l&#39;homme et son environnement (Moser, 2009). Les interactions entre les
                deux objets rendront compte de plusieurs processus mis à l&#39;œuvre dans la manière de
                s&#39;adapter, d&#39;utiliser, ou de modifier l’environnement. De ces processus reflètent différents
                niveaux d&#39;analyses socio-spatiaux qui peuvent être d&#39;ordre physique, social et temporel. Plus
                précisément, la psychologie environnementale permet de mettre en évidence le rapport
                subjectif qui existe entre les personnes et leur environnement afin de mieux saisir en quoi le
                lieu joue un rôle aussi bien dans les processus de perception et d&#39;identité que dans la mise
                en œuvre de comportements écologiques.
                Nous prenons ici parti, dans le cadre d&#39;Ancrage, d&#39;étudier l&#39;espace littoral tel qu&#39;il est défini
                par les individus qui l&#39;occupent sous le prisme de l&#39;attachement, du désir de protection et de
                sa préoccupation écologique. Ainsi, vouloir protéger un lieu nécessite t-il un attachement ?
                Une identité à part entière ? Cela sous-entend-t-il nécessairement une sensibilité écologique
                ? Une culture ? Ce sont précisément ces questionnements qui maintienne notre curiosité.
            </p>
        </div>
    </React.Fragment>
}