import { getParagraphContent } from "../utils/getParagraphContent"
import PropTypes from 'prop-types';

export default function BigArticles ({lastArticle}) {

    return <article className="big_article w-4/5 bg-stone-200 mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center rounded-3xl m-8 lg:mt-12">
                <div className="sm:w-4/6 lg:w-4/6 lg:m-5">
                    <img className="object-cover rounded-3xl" srcSet={`https://my-strapi.kevinlebot.com${lastArticle.attributes.image.data.attributes.url}`} alt={lastArticle.attributes.image.data.attributes.name} />
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center items-center m-3 sm:mr-5 lg:my-5 lg:mr-12">
                    <h2 className="text-3xl lg:text-4xl mt-6 lg:m-6 text-center">{lastArticle.attributes.titre} </h2>
                    <p className="text-center my-3 lg:my-5">{getParagraphContent(lastArticle.attributes.contenue)} </p>
                    <a href={`/article/${lastArticle.id}`} className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm">Lire la suite</a>
                </div>
            </article>
}

BigArticles.propTypes = {
    lastArticle: PropTypes.object // Utilisez PropTypes.node pour représenter les enfants
  };