

export default function Header() {

    return <div className="header w-4/5 p-4 sm:p-12 mx-auto rounded-xl my-12 sm:my-24">
                <div className="flex flex-col lg:flex-row justify-around items-center p-5 sm:p-12 bg-white/70 rounded-xl">
                    <div className="header_text lg:w-2/4 flex flex-col justify-center items-center">
                        <h1>Ancrage c'est quoi ?</h1>
                        <p>Ancrage est une association qui a pour vocation de rendre
                            compte de la singularité d'un lieu sous le prisme de celui ou
                            celle qui y est attaché. Nous avons pour objectifs de relever
                            les lieux au-delà de leur aspect physique. En effets, Ancrage
                            perçoit aussi ces lieux comme des espaces d'attachements,
                            d'échanges et d'activités où les usagers y tissent une relation
                            chargée de signification avec le temps. Cette approche nous
                            amène à porter un regard les notions de désir de protection
                            et des enjeux sociaux et environnementaux qui peuvent en
                            découler.
                        </p>
                    </div>
                    <div className="header_img sm:w-2/3 sm:mt-12 lg:mt-0 lg:w-1/3">
                        <img className="object-cover rounded-xl" srcSet="./assets/images/tab.webp" alt="" />
                    </div>
                </div>
            </div>
}