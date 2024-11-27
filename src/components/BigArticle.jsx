import { getParagraphContent } from "../utils/getParagraphContent"
import PropTypes from 'prop-types';

export default function BigArticles ({lastArticle}) {

    if (!lastArticle || !lastArticle.attributes) {
        return <p>Article non disponible</p>;
      }

    const imageUrl = lastArticle?.attributes?.image?.data?.attributes?.url;
    const imageAlt = lastArticle?.attributes?.image?.data?.attributes?.name;
    const contenueArticle = lastArticle?.attributes?.contenue;

    return <article className="big_article w-4/5 bg-stone-200 mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center rounded-3xl m-8 lg:mt-12">
                 <div className="sm:w-4/6 lg:w-4/6 lg:m-5">
                    {/* Vérifie si une image est disponible avant d'afficher l'élément */}
                    {imageUrl ? (
                        <img
                            className="object-cover rounded-3xl"
                            src={`https://my-strapi.kevinlebot.com${imageUrl}`}
                            alt={imageAlt || "Image de l'article"}
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-700">
                            Image indisponible
                        </div>
                    )}
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center items-center m-3 sm:mr-5 lg:my-5 lg:mr-12">
                    <h2 className="text-3xl lg:text-4xl mt-6 lg:m-6 text-center">{lastArticle.attributes.titre} </h2>
                    {contenueArticle ? (
                        <p className="text-center my-3 lg:my-5">{getParagraphContent(contenueArticle)} </p>
                    ) : (
                        <p className="text-center my-3 lg:my-5">Aucun contenue trouvé</p>
                    )}
                    {lastArticle.id && (
                        <a href={`/article/${lastArticle.id}`} className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm">
                            Lire la suite
                        </a>
                    )}
                </div>
            </article>
}

BigArticles.propTypes = {
    lastArticle: PropTypes.shape({
        id: PropTypes.number.isRequired,
        attributes: PropTypes.shape({
            titre: PropTypes.string.isRequired,
            contenue: PropTypes.string,
            image: PropTypes.shape({
                data: PropTypes.shape({
                    attributes: PropTypes.shape({
                        url: PropTypes.string,
                        name: PropTypes.string,
                    }),
                }),
            }),
        }),
    }).isRequired,
};