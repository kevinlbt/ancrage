import React from "react";

export default function About () {

    return <section className="flex flex-col mt-24">
        <article className="about_me flex flex-col sm:flex-row justify-between relative mb-48 lg:mb-64">
            <div className="bloc_about"></div>
            <div className="img_about">
                <img className="absolute h-auto" srcSet="./assets/images/about.jpg" alt=""/>
            </div>
            <div className="about_text p-12 flex flex-col justify-center">
                <h4 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2 sm:mb-12 text-center">A propos de moi</h4>
                <p className="text-sm md:text-base xl:text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nec sem vitae porta. Pellentesque leo dolor, rutrum quis ultrices nec, malesuada in ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus in interdum. In dignissim tortor tristique interdum volutpat.  in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus in interdum. In dignissim tortor tristique interdum volutpat. </p>
            </div>
            <p className="absolute anchor">Ancrage</p>
        </article>

        <article className="about_ancrage flex flex-col sm:flex-row justify-between mb-32">
            <div className="bloc_about_ancrage p-12 flex flex-col justify-center">
                <h4 className="text-6xl lg:text-8xl mb-12 pr-0 sm:pr-12 lg:pr-24 text-center">A propos d'ancrage</h4>
                <p className="text-base lg:text-lg text-center pr-0 sm:pr-12 lg:pr-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium nec sem vitae porta. Pellentesque leo dolor, rutrum quis ultrices nec, malesuada in ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus in interdum. In dignissim tortor tristique interdum volutpat.  in faucibus orci luctus et ultrices posuere cubilia curae; Fusce tincidunt eu lacus in interdum. In dignissim tortor tristique interdum volutpat. </p>
            </div>
            <div className="about_ancrage"></div>
        </article>
    </section>
}