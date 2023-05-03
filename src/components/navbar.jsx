
export default function NavBar() {

    return <nav className="navbar">
        <ul className="flex justify-evenly items-center m-5">
            <li className="menu"><a href="/"> Accueil </a></li>
            <li className="menu"><a href="/temoignage"> Témoignage</a></li>
            <li className="w-1/6 h-auto"><a href="/"><img srcSet="./assets/logo/Logo.png" alt="logo" /></a></li>
            <li className="menu"><a href="/apropos"> Qui suis-je</a></li>
            <li className="menu"><a href="/articles"> Articles </a></li>
        </ul>
    </nav>
}