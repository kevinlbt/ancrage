import React, { useEffect, useState } from 'react'
import BigArticles from '../components/BigArticle'
import AllArticles from '../components/allArticles'
import Categories from '../components/Categories'
import {UseApiData}  from '../utils/UseApiData'


export default function ArticlePage () {

    const apiData = UseApiData();
    const [allArticlesData, setAllArticlesData] = useState([]);
    const [articlesData, setArticlesData] = useState([]);
    const [lastArticle, setLastArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [catActive, setCatActive] = useState("tous");


    useEffect(() => {

        if (apiData) {
            setLastArticles(apiData.shift())
            setAllArticlesData(apiData);
            setArticlesData(apiData);
            const categories = apiData.reduce((acc, cat) => acc.includes(cat.attributes.julie_categorie.data.attributes.categorie) ? acc : acc.concat(cat.attributes.julie_categorie.data.attributes.categorie), [])
            setCategories(categories)
        }
        
      }, [apiData]);

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
            <h1 className='text-4xl lg:text-5xl text-center sm:text-left sm:ml-24 lg:ml-48'>- Dernier Article -</h1>
            <BigArticles lastArticle={lastArticle} />
            <h2 className='text-4xl lg:text-5xl text-center sm:ml-24 lg:ml-48 pt-12'>- tous les articles -</h2>
            <Categories categories={categories} handleCategorie={handleCategorie} catActive={catActive} />
            <AllArticles articlesData={articlesData} />
        </React.Fragment>
        }
    </section>
}