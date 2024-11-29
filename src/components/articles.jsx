import { useEffect, useState } from "react";
import { getParagraphContent } from "../utils/getParagraphContent"
import {UseApiData} from '../utils/UseApiData'
import PropTypes from 'prop-types';


function toDateTime(date) {

    const articleDate = new Date(date);

    const formattedDate = new Intl.DateTimeFormat('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(articleDate);

    return formattedDate
}

export default function Articles() {

    const apiData = UseApiData().apiData;
    const Loading = UseApiData().loading;
    const error = UseApiData().error;
    const [threeArticlesData, setThreeArticlesData] = useState([]);

    useEffect(() => {

        if (Array.isArray(apiData) && apiData.length > 0) {

            setThreeArticlesData(apiData.slice(0, 3));
        }
    }, [apiData]);

    return <section className="articles_home"> 
        <h3 className="text-6xl sm:text-8xl text-center m-12">Articles</h3>
        {Loading ? 
        <div className="loader mx-auto my-48"></div> 
        : error ? 
        <div className="mx-auto my-48 text-center text-5xl text-red-600">{error.message} </div> 
        :
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mx-8 lg:mx-24">
            {threeArticlesData.map((article) => {
                
                const imageUrl = article?.attributes?.image?.data?.attributes?.url;
                const imageAlt = article?.attributes?.image?.data?.attributes?.name;
                const contenueArticle = article?.attributes?.contenue;

                return (
                <div key={article.id} className="grid_item bg-stone-200 m-6 lg:m-10 rounded-xl flex flex-col items-center" >
                    <div className="img_wrapper">
                            {/* Vérifie si une image est disponible avant d'afficher l'élément */}
                            {imageUrl ? (
                                <img
                                    className="rounded-xl w-full object-cover"
                                    srcSet={`https://my-strapi.kevinlebot.com${imageUrl}`}
                                    alt={imageAlt || "Image de l'article"}
                                />
                            ) : (
                                <div className="w-full h-72 bg-gray-300 flex items-center justify-center text-gray-700 rounded-xl">
                                    Image indisponible
                                </div>
                            )}
                    </div>
                    <figcaption className="fig_date">{toDateTime(article.attributes.createdAt)} </figcaption>
                    <div className="flex justify-center items-center mt-8">
                        <i className="fa-brands fa-pagelines text-4xl text-green-800 mx-1">
                            <span className="sr-only">Icône branche d&#39;arbre</span>
                        </i>
                        <i className="fa-brands fa-pagelines text-4xl text-green-800 mx-1">
                            <span className="sr-only">Icône branche d&#39;arbre</span>
                        </i>
                    </div>
                    <h4 className="text-2xl lg:text-3xl text-center m-5">{article.attributes.titre}</h4>
                    {contenueArticle ? (
                        <div className="content_articles_overflow text-center m-6">{getParagraphContent(contenueArticle)}</div>
                    ) : (
                        <div className="content_articles_overflow text-center m-6">Le contenue de l&#39;article n&#39;existe pas</div>
                    )}
                    <a className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm" href={`/article/${article.id}`}>Lire la suite</a>
                </div>
            )})}
        </div>
        }
    </section>
}

Articles.propTypes = {
    articlesData: PropTypes.array.isRequired // Utilisez PropTypes.node pour représenter les enfants
  };