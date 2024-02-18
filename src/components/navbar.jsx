import { useState , useRef , useEffect} from "react"
import logo from "../assets/logo/logo.png"

export default function NavBar() {

    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const blocRef = useRef(null);

    function handleDisplay () {
        setDisplayMobileMenu((v) => !v)
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (blocRef.current && !blocRef.current.contains(event.target)) {
            // Clic en dehors du bloc
            setDisplayMobileMenu(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [blocRef]);

    return <nav className="navbar">
        <ul className="desktop_menu flex justify-evenly items-center m-5">
            <li className="menu"><a href="/"> Accueil </a></li>
            <li className="menu"><a href="/contact"> Contact </a></li>
            <li className="menu"><a href="/apropos"> Qui suis-je ? </a></li>
            <li className="logo h-auto"><a href="/"><img srcSet={logo} alt="logo" /></a></li>
            <li className="menu"><a href="/entretien"> entretien </a></li>
            <li className="menu"><a href="/parcours"> parcours commenté </a></li>
            <li className="menu"><a href="/articles"> Articles </a></li>
        </ul>
        <div ref={blocRef} className="relative mobile_menu flex justify-between items-center">
            <a href="/"><img className="w-44 m-7" srcSet={logo} alt="logo" /></a>
            <i onClick={handleDisplay} className="fa-solid fa-bars"></i>
            <ul className={`flex flex-col justify-evenly items-center relative ${displayMobileMenu ? "mobile_menu_display" : null}`}>
                <li><i onClick={handleDisplay} className="absolute fa-solid fa-xmark"></i></li>
                <li className="menu"><a href="/"> Accueil </a></li>
                <li className="menu"><a href="/entretien"> entretien </a></li>
                <li className="menu"><a href="/parcours"> parcours commenté </a></li>
                <li className="menu"><a href="/contact"> Contact </a></li>
                <li className="menu"><a href="/apropos"> Qui suis-je</a></li>
                <li className="menu"><a href="/articles"> Articles </a></li>
            </ul>
        </div>
    </nav>
}