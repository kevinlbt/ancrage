

export default function BigArticles ({lastArticle}) {

    return <article className="big_article w-4/5 bg-stone-200 mx-auto flex justify-between items-center rounded-xl m-24 mt-12">
                <div className="w-3/6 m-5">
                    <img className="object-cover rounded-3xl" srcSet={`https://my-strapi.kevinlebot.com${lastArticle.attributes.image.data.attributes.url}`} alt={lastArticle.attributes.image.data.attributes.name} />
                </div>
                <div className="w-2/3 flex flex-col justify-center items-center my-12 mr-12">
                    <h2 className="text-7xl m-6">{lastArticle.attributes.titre} </h2>
                    <p className="text-center my-5">{lastArticle.attributes.contenue} </p>
                    <button className="my-6 rounded-md px-6 py-3 text-lg font-semibold text-white shadow-sm">Lire la suite</button>
                </div>
            </article>
}