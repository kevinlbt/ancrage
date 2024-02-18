import { getParagraphContent } from "../utils/getParagraphContent"
import PropTypes from 'prop-types';

export default function AllArticles ({articlesData}) {

    
    return  <div className="all_article sm:w-5/6 grid sm:grid-cols-2 2xl:grid-cols-3 gap-6 mx-auto">
                {articlesData.map((article) => (
                    <div key={article.id} className="flex flex-col justify-between items-center bg-stone-200 m-8 sm:m-5 mt-12 lg:m-14">
                        <div>
                            <img className="w-full object-cover" src={`https://my-strapi.kevinlebot.com${article.attributes.image.data.attributes.url}`} alt={article.attributes.image.data.attributes.name} />
                        </div>
                        <h3 className="text-center text-2xl lg:text-3xl my-5 lg:mb-6 lg:mt-12">{article.attributes.titre} </h3>
                        <p className="px-2 lg:px-7 text-center">{getParagraphContent(article.attributes.contenue)} </p>
                        <a href={`/article/${article.id}`} className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm">Lire la suite</a>
                    </div>
                ))}
            </div>
}

AllArticles.propTypes = {
    articlesData: PropTypes.array // Utilisez PropTypes.node pour représenter les enfants
  };