import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BigArticles from '../components/BigArticle'

const token = "e98e1b6a60e1cce2296a55b9bbb7a62e16436ddea249e42b733df5df240520867e8a9fa4ee90332b8cc7d1d38b40ef8492a07a60c93e912e2ce184470272893f5e6b65fa3fb6a2c0668e4daedd88dd5fda997e557622a86f784a70fe60d071c9e1d55afd4e6c63b3701142bb694a7bc25d03f6aadcadb1a8edc87019c1c9d5e0"

export default function ArticleSolo () {

    const { id } = useParams();
    const [articleSoloData, setArticleSoloData] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`https://my-strapi.kevinlebot.com/api/articles/${id}?populate=*`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            //console.log(data.data);
            setArticleSoloData(data.data);
        })();
    }, [setArticleSoloData, id])


    return <div>
        {articleSoloData.length === 0 ? 
        <div className="loader mx-auto my-48"></div> 
        : 
        <React.Fragment>
            <h1 className='text-5xl lg:text-6xl ml-24 lg:ml-48'>- Article -</h1>
            <BigArticles lastArticle={articleSoloData} />
        </React.Fragment>
        }
    </div>
}