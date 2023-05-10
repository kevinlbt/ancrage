import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BigArticles from '../components/BigArticle'
import AllArticles from '../components/allArticles'
import Categories from '../components/Categories'

const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0"

export default function ArticlePage () {

    const [allArticlesData, setAllArticlesData] = useState([]);
    const [articlesData, setArticlesData] = useState([]);
    const [lastArticle, setLastArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [catActive, setCatActive] = useState("tous");

    useEffect(() => {
        (async function () {
            const { data } = await axios.get("https://my-strapi.kevinlebot.com/api/articles?&populate=*&sort[0]=createdAt%3Adesc", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            //console.log(data.data);
            setLastArticles(data.data.shift())
            setAllArticlesData(data.data);
            setArticlesData(data.data);
            setCategories(data.data.reduce((acc, cat) => acc.includes(cat.attributes.julie_categorie.data.attributes.categorie) ? acc : acc.concat(cat.attributes.julie_categorie.data.attributes.categorie), []))
        })();
    }, [setAllArticlesData, setLastArticles])

    function handleCategorie (e) {
        let cat = e.target.innerHTML;
        if (cat === "tous") {
            setArticlesData(allArticlesData);
            setCatActive(cat)
        }
        else {
            let newAllArticles = allArticlesData.filter((article) => article.attributes.julie_categorie.data.attributes.categorie === cat)
            setArticlesData(newAllArticles);
            setCatActive(cat)
        } 
    }

    return <section className='article_back pt-1'>
        {allArticlesData.length === 0 ? 
        <div className="loader mx-auto my-48"></div> 
        : 
        <React.Fragment>
            <h1 className='text-6xl ml-48'>- Dernier Article -</h1>
            <BigArticles lastArticle={lastArticle} />
            <Categories categories={categories} handleCategorie={handleCategorie} catActive={catActive} />
            <AllArticles articlesData={articlesData} />
        </React.Fragment>
        }
    </section>
}