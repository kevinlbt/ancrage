

export default function Footer () {

    return <footer className="flex flex-col justify-center">
            <ul className="menu_footer flex flex-col sm:flex-row">
                <li><a href="/"> Accueil </a></li>
                <li><a href="/contact"> Contact </a></li>
                <li><a href="/apropos"> qui suis-je ? </a></li>
                <li><a href="/entretien"> entretien </a></li>
                <li><a href="/parcours"> Parcours commenté </a></li>
                <li><a href="/articles"> Articles </a></li>
            </ul>
        <div>
            <a href="/mentions"><p className="text-lg text-center">@ancrage  -  mentions légales</p></a>
        </div>
    </footer>
}