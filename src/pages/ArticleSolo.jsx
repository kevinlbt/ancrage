import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import ArticleFull from "../components/articleFull";
import ArticlesPrevNext from "../components/articlesPrevNext";
import {UseApiData} from '../utils/UseApiData'


export default function ArticleSolo () {

    const apiData = UseApiData();
    const { id } = useParams();
    const [articleSoloData, setArticleSoloData] = useState([]);

    useEffect(() => {
        
        if (apiData) {
            const dataArticle = apiData.find((elem) => elem.id === Number(id))
            setArticleSoloData(dataArticle);
        }
        
    }, [setArticleSoloData, apiData, id])


    return <div>
        {articleSoloData.length === 0 ? 
        <div className="loader mx-auto my-48"></div> 
        : 
        <React.Fragment>
            <ArticleFull dataArticle={articleSoloData} />
            <ArticlesPrevNext id={id} dataArticle={apiData}/>
        </React.Fragment>
        }
    </div>
}