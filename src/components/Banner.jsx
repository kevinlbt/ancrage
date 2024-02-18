import { useElementOnScreen } from '../utils/useElementOnScreen'

export default function Banner() {

    const [containerRef, isVisible] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
    })

    return <div className="banner flex justify-center items-center my-12">
        <div ref={containerRef} className="banner_wrapper w-5/6 sm:w-2/3">
            <div className={`banner_text rounded-xl p-4 sm:p-16 text-center ${isVisible ? "banner_wrapper_anim" : null}`}>
                <p> Nulla imperdiet mauris sed sapien dignissim id aliquam est aliquam. Maecenas non odio ipsum, a elementum nisi.
                    Mauris non erat eu erat placerat convallis.
                </p>
                <p className="cit mt-5"> Mauris in pretium urna </p>
            </div>
        </div>
    </div>
}