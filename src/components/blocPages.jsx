import React from "react";
import PropTypes from 'prop-types';
import { useElementOnScreen } from '../utils/useElementOnScreen'

export default function BlocPages ({imgSrc,title1, title2, text1, text2, button, stylized}) {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    })

    const [containerRefBis, isVisibleBis] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    })

    return <React.Fragment>
        <article ref={containerRef} className="about_me flex flex-col sm:flex-row justify-between relative pb-24 lg:pb-36">
            <div className={`bloc_about ${isVisible ? "bloc_anime" : null}`}></div>
            <div className={stylized}>
                <img className="absolute h-auto" srcSet={imgSrc} alt=""/>
            </div>
            <div className={`about_text p-2 sm:p-12 flex flex-col justify-center ${isVisible ? "bloc_anime" : null}`}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-12 text-center">{title1}</h2>
                <p className="text-sm md:text-base xl:text-xl text-center">{text1}</p>
            </div>
        </article>
        {button ? <div className="flex justify-center">
            <a className="contact_button w-2/4 sm:w-1/4 mx-auto mb-12 rounded-md px-6 py-3 text-xl text-center font-semibold text-white shadow-sm" href="/contact">me contacter</a>
        </div> : null }
        <article ref={containerRefBis} className="about_ancrage flex flex-col sm:flex-row justify-between mb-12 lg:mb-32">
            <div className={`bloc_about_ancrage sm:p-12 flex flex-col justify-center ${isVisibleBis ? "bloc_anime" : null}`}>
                {title2 ? <h2 className="text-5xl lg:text-7xl mb-12 pr-0 lg:pr-24 text-center">{title2}</h2> : null}
                <p className="text-sm md:text-base xl:text-xl text-center pr-0 sm:pr-12 lg:pr-32">{text2}</p>
            </div>
            <div className={`about_ancrage ${isVisibleBis ? "bloc_anime" : null}`}></div>
        </article>
    </React.Fragment>
}

BlocPages.propTypes = {
    imgSrc: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    button: PropTypes.bool,
    stylized: PropTypes.string,
  };