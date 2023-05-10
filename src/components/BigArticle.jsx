

export default function BigArticles ({lastArticle}) {

    return <article className="big_article w-4/5 bg-stone-200 mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center rounded-3xl m-8 lg:mt-12">
                <div className="w-full sm:w-4/6 lg:w-3/6 lg:m-5">
                    <img className="object-cover rounded-3xl" srcSet={`https://my-strapi.kevinlebot.com${lastArticle.attributes.image.data.attributes.url}`} alt={lastArticle.attributes.image.data.attributes.name} />
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center items-center m-3 sm:mr-5 lg:my-5 lg:mr-12">
                    <h2 className="text-4xl lg:text-5xl mt-6 lg:m-6">{lastArticle.attributes.titre} </h2>
                    <p className="text-center my-3 lg:my-5">{lastArticle.attributes.contenue} </p>
                    <button className="my-3 lg:my-6 rounded-md px-3 py-1 lg:px-6 lg:py-3 text-lg font-semibold text-white shadow-sm">Lire la suite</button>
                </div>
            </article>
}