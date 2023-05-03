import { useEffect, useState } from "react";
import axios from 'axios'

const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0"

export default function Articles() {

    const [allArticlesData, setAllArticlesData] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get("https://my-strapi.kevinlebot.com/api/articles?&populate=*", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAllArticlesData(data.data);

            console.log(data.data);
        })();
    }, [setAllArticlesData])

    console.log(allArticlesData)

    return <section className="articles_home">
        <h3 className="text-4xl text-center">articles</h3>
        <div className="grid grid-cols-3 gap-3">
            {allArticlesData.map((article) => (
                <div key={article.id} className="grid_item bg-stone-300 m-12 p-8 rounded-xl flex flex-col justify-center items-center" >
                    <div className="flex justify-center items-center">
                        <i className="fa-brands fa-pagelines text-4xl text-green-700 mx-1"></i>
                        <i className="fa-brands fa-pagelines text-4xl text-green-700 mx-1"></i>
                    </div>
                    <h3 className="text-4xl text-center m-5">{article.attributes.titre}</h3>
                    <div className="content_articles_overflow text-center my-4 whitespace-pre-line">{article.attributes.contenue}</div>
                    <div className="w-2/3 mx-auto">
                        <img className="rounded-xl" srcSet={`https://my-strapi.kevinlebot.com${article.attributes.image.data.attributes.url}`} alt="girl" />
                    </div>
                    <a className="mt-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500" href="./onearticle/">En savoir plus</a>
                </div>
            ))}
        </div>

    </section>
}