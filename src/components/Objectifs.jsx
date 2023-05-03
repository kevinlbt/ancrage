import React from "react";


export default function Objectifs() {

    return <React.Fragment>
        <div className="flex justify-evenly items-center">
            <div className="w-1/4 m-7 flex flex-col justify-center items-center">
                <i className="fa-solid fa-thumbtack text-7xl text-green-800"></i>
                <p className="text-center m-12 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit a commodi beatae consequatur ipsum esse consectetur sint.</p>
            </div>
            <div className="w-1/4 m-7 flex flex-col justify-center items-center">
                <i className="fa-solid fa-thumbtack text-7xl text-green-800"></i>
                <p className="text-center m-12 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit a commodi beatae consequatur ipsum esse consectetur sint.</p>
            </div>
            <div className="w-1/4 m-7 flex flex-col justify-center items-center">
                <i className="fa-solid fa-thumbtack text-7xl text-green-800"></i>
                <p className="text-center m-12 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit a commodi beatae consequatur ipsum esse consectetur sint.</p>
            </div>
        </div>
        <div className="description_text w-2/3 mx-auto m-10 text-center">
            <h2 className="text-7xl m-12">Psychologie et environnement</h2>
            <p className="text-lg">L’étude des lieux d'attachements nous amène à traiter de la psychologie sociale et
                environnementale. Proposant une approche multidisciplinaire, elle est une science qui étudie
                la relation entre l'homme et son environnement (Moser, 2009). Les interactions entre les
                deux objets rendront compte de plusieurs processus mis à l'œuvre dans la manière de
                s'adapter, d'utiliser, ou de modifier l’environnement. De ces processus reflètent différents
                niveaux d'analyses socio-spatiaux qui peuvent être d'ordre physique, social et temporel. Plus
                précisément, la psychologie environnementale permet de mettre en évidence le rapport
                subjectif qui existe entre les personnes et leur environnement afin de mieux saisir en quoi le
                lieu joue un rôle aussi bien dans les processus de perception et d'identité que dans la mise
                en œuvre de comportements écologiques.
                Nous prenons ici parti, dans le cadre d'Ancrage, d’étudier l'espace littoral tel qu’il est défini
                par les individus qui l’occupent sous le prisme de l’attachement, du désir de protection et de
                sa préoccupation écologique. Ainsi, vouloir protéger un lieu nécessite t-il un attachement ?
                Une identité à part entière ? Cela sous-entend-t-il nécessairement une sensibilité écologique
                ? Une culture ? Ce sont précisément ces questionnements qui maintienne notre curiosité.
            </p>
        </div>
    </React.Fragment>
}