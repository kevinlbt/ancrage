import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function ArticlesPrevNext ({dataArticle, id}) {

    const [prevArticle, setPrevArticle] = useState(null);
    const [nextArticle, setNextArticle] = useState(null);
    const [firstArticle, setFirstArticle] = useState(null);
    const [lastArticle, setLastArticle] = useState(null);

    useEffect(() => {

        const dataArticlePrev = dataArticle.find((elem) => elem.id === Number(id)-1)
        setPrevArticle(dataArticlePrev);
        const dataArticleNext = dataArticle.find((elem) => elem.id === Number(id)+1)
        setNextArticle(dataArticleNext)
        setFirstArticle(dataArticle[dataArticle.length-1])
        setLastArticle(dataArticle[0])

        
    }, [dataArticle, id])
    
    return <div className="prev_next flex flex-col sm:flex-row justify-between">
                <a href={`/article/${prevArticle ? prevArticle.id : dataArticle[0].id}`}>
                    <div className="m-2 sm:m-7 flex justify-start sm:justify-center items-center">
                        <i className="fa-solid fa-chevron-left text-4xl p-7"></i>
                        <div>
                            <p>Précedent</p>
                            {prevArticle ? <p className="text-base lg:text-xl">{prevArticle.attributes.titre} </p> : lastArticle ? <p className="text-base lg:text-xl">{lastArticle.attributes.titre}</p>: null}
                        </div>
                    </div>
                </a>
                <a href={`/article/${nextArticle ? nextArticle.id : dataArticle[dataArticle.length-1].id }`}>
                    <div className="m-2 sm:m-7 flex justify-end sm:justify-center items-center">
                        <div className="text-right">
                            <p>Suivant</p>
                            {nextArticle ? <p className="text-base lg:text-xl">{nextArticle.attributes.titre} </p> : firstArticle ? <p className="text-base lg:text-xl">{firstArticle.attributes.titre}</p> : null}
                        </div>
                        <i className="fa-solid fa-chevron-right text-4xl p-7"></i>
                    </div>
                </a>
            </div>
}

ArticlesPrevNext.propTypes = {
    dataArticle: PropTypes.array ,
    id: PropTypes.string// Utilisez PropTypes.node pour représenter les enfants
  };