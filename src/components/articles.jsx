import { useEffect, useState } from "react";
import { getParagraphContent } from "../utils/getParagraphContent"
import {UseApiData} from '../utils/UseApiData'


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

    const apiData = UseApiData();
    const [threeArticlesData, setThreeArticlesData] = useState([]);

    useEffect(() => {
        
        if (apiData) {

            apiData.sort((a, b) => b.dateCreation - a.dateCreation);
            setThreeArticlesData(apiData.slice(0, 3));
        }

    }, [setThreeArticlesData, apiData])

    return <section className="articles_home"> 
        <h3 className="text-6xl sm:text-8xl text-center m-12">Articles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mx-8 lg:mx-24">
            {threeArticlesData.map((article) => (
                <div key={article.id} className="grid_item bg-stone-200 m-6 lg:m-10 rounded-xl flex flex-col items-center" >
                    <div className="img_wrapper">
                        <img className="rounded-xl w-full object-cover" srcSet={`https://my-strapi.kevinlebot.com${article.attributes.image.data.attributes.url}`} alt="girl" />
                    </div>
                    <figcaption className="fig_date">{toDateTime(article.attributes.createdAt)} </figcaption>
                    <div className="flex justify-center items-center mt-8">
                        <i className="fa-brands fa-pagelines text-4xl text-green-800 mx-1"></i>
                        <i className="fa-brands fa-pagelines text-4xl text-green-800 mx-1"></i>
                    </div>
                    <h4 className="text-2xl lg:text-3xl text-center m-5">{article.attributes.titre}</h4>
                    <div className="content_articles_overflow text-center m-6">{getParagraphContent(article.attributes.contenue)}</div>
                    <a className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm" href={`/article/${article.id}`}>Lire la suite</a>
                </div>
            ))}
        </div>

    </section>
}