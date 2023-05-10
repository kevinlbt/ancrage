export default function AllArticles ({articlesData}) {

    return  <div className="all_article w-5/6 grid grid-cols-2 gap-6 mx-auto">
                {articlesData.map((article) => (
                    <div key={article.id} className="flex flex-col justify-between items-center bg-stone-200 m-16">
                        <div>
                            <img className="w-full object-cover" src={`https://my-strapi.kevinlebot.com${article.attributes.image.data.attributes.url}`} alt={article.attributes.image.data.attributes.name} />
                        </div>
                        <h3 className="text-7xl mb-6 mt-12">{article.attributes.titre} </h3>
                        <p className="m-5 px-12 text-center">{article.attributes.contenue} </p>
                        <button className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm">Lire la suite</button>
                    </div>
                ))}
            </div>
}