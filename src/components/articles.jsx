import { useEffect, useState } from "react";
import axios from 'axios'

const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0"

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

    const [allArticlesData, setAllArticlesData] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get("https://my-strapi.kevinlebot.com/api/articles?&populate=*&pagination[pageSize]=3", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAllArticlesData(data.data);

            //console.log(data.data);
        })();
    }, [setAllArticlesData])

    return <section className="articles_home">
        <h3 className="text-7xl text-center m-8">articles</h3>
        <div className="grid grid-cols-3 gap-3 mx-24">
            {allArticlesData.map((article) => (
                <div key={article.id} className="grid_item bg-stone-200 m-10 rounded-xl flex flex-col justify-center items-center" >
                    <div className="img_wrapper">
                        <img className="rounded-xl w-full object-cover object-center" srcSet={`https://my-strapi.kevinlebot.com${article.attributes.image.data.attributes.url}`} alt="girl" />
                    </div>
                    <figcaption className="fig_date">{toDateTime(article.attributes.createdAt)} </figcaption>
                    <div className="flex justify-center items-center mt-8">
                        <i className="fa-brands fa-pagelines text-4xl text-green-800 mx-1"></i>
                        <i className="fa-brands fa-pagelines text-4xl text-green-800 mx-1"></i>
                    </div>
                    <h3 className="text-5xl text-center m-5">{article.attributes.titre}</h3>
                    <div className="content_articles_overflow text-center m-6">{article.attributes.contenue}</div>
                    <a className="my-6 rounded-md bg-green-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-700" href="./onearticle/">Lire la suite</a>
                </div>
            ))}
        </div>

    </section>
}