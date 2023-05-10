import { useState } from "react"

export default function NavBar() {

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    function handleDisplay () {
        setDisplayMobileMenu((v) => !v)
    }

    return <nav className="navbar">
        <ul className="desktop_menu flex justify-evenly items-center m-5">
            <li className="menu"><a href="/"> Accueil </a></li>
            <li className="menu"><a href="/temoignage"> Témoignage</a></li>
            <li className="w-32 sm:w-44 lg:w-64 h-auto"><a href="/"><img srcSet="../assets/logo/logo.png" alt="logo" /></a></li>
            <li className="menu"><a href="/apropos"> Qui suis-je</a></li>
            <li className="menu"><a href="/articles"> Articles </a></li>
        </ul>
        <div className="relative mobile_menu flex justify-between items-center">
            <a href="/"><img className="w-44 m-7" srcSet="./assets/logo/logo.png" alt="logo" /></a>
            <i onClick={handleDisplay} className="fa-solid fa-bars"></i>
            <ul className={`flex flex-col justify-evenly items-center relative ${displayMobileMenu ? "mobile_menu_display" : null}`}>
                <li><i onClick={handleDisplay} className="absolute fa-solid fa-xmark"></i></li>
                <li className="menu"><a href="/"> Accueil </a></li>
                <li className="menu"><a href="/temoignage"> Témoignage</a></li>
                <li className="menu"><a href="/apropos"> Qui suis-je</a></li>
                <li className="menu"><a href="/articles"> Articles </a></li>
            </ul>
        </div>
    </nav>
}