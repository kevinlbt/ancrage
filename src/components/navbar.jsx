
export default function NavBar() {

    return <nav className="navbar">
        <ul className="flex justify-evenly items-center m-5">
            <li><a href="/test-website/"> Accueil </a></li>
            <li><a href="/test-website/apropos"> Qui suis-je </a></li>
            <li className="w-1/6 h-auto"><a href="/"><img srcSet="./assets/logo/Logo.png" alt="logo" /></a></li>
            <li><a href="/test-website/articles"> Articles </a></li>
            <li><a href="/test-website/parcours"> Témoignage </a></li>
        </ul>
    </nav>
}