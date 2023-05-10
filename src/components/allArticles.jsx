export default function AllArticles ({articlesData}) {

    return  <div className="all_article lg:w-5/6 grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
                {articlesData.map((article) => (
                    <div key={article.id} className="flex flex-col justify-between items-center bg-stone-200 m-12 sm:m-5 mt-12 lg:m-16">
                        <div>
                            <img className="w-full object-cover" src={`https://my-strapi.kevinlebot.com${article.attributes.image.data.attributes.url}`} alt={article.attributes.image.data.attributes.name} />
                        </div>
                        <h3 className="text-center text-5xl lg:text-7xl my-5 lg:mb-6 lg:mt-12">{article.attributes.titre} </h3>
                        <p className="m-5 lg:px-12 text-center">{article.attributes.contenue} </p>
                        <a href={`/article/${article.id}`} className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm">Lire la suite</a>
                    </div>
                ))}
            </div>
}