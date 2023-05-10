

export default function Footer () {

    return <footer className="flex flex-col justify-center">
        <section className="flex justify-between items-center">
            <div className="sm:w-1/6 h-64"></div>
            <div className="w-4/6 sm:w-2/6">
                <h4 className="text-5xl m-5 sm:pl-5 text-center">Newsletter</h4>
                <div className="flex flex-col sm:flex-row justify-around items-center">
                    <input className="lg:w-2/3 ring-2 ring-green-800 mb-5 lg:py-1.5 rounded focus:ring-4" type="text" />
                    <button className="rounded-md mx-5 bg-green-900 mb-5 px-6 lg:py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-green-700" type="button">S'abonner</button>
                </div>
            </div>
            <ul className="menu_footer w-2/6 sm:w-1/6">
                <li><a href="/"> Accueil </a></li>
                <li><a href="/temoignage"> Témoignage</a></li>
                <li><a href="/apropos"> Qui suis-je</a></li>
                <li><a href="/articles"> Articles </a></li>
                <li><a href="/contact"> Contact </a></li>
            </ul>
        </section>
        <div>
            <a href="/"><p className="text-lg text-center">@ancrage  -  mentions légales</p></a>
        </div>
    </footer>
}