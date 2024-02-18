import PropTypes from 'prop-types';

export default function ArticleFull ({dataArticle}) {

    const htmlContent = { __html: dataArticle.attributes.contenue };

    return <article className="article_full sm:w-3/4 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl m-5 sm:m-16 text-center">{dataArticle.attributes.titre}</h1>
        <img className="object-cover rounded-3xl m-5" srcSet={`https://my-strapi.kevinlebot.com${dataArticle.attributes.image.data.attributes.url}`} alt={dataArticle.attributes.image.data.attributes.name} />
        <div className="content w-3/4 m-7 pb-12 mx-auto flex flex-col justify-center" dangerouslySetInnerHTML={htmlContent}></div>
    </article>
}

ArticleFull.propTypes = {
    dataArticle: PropTypes.object // Utilisez PropTypes.node pour représenter les enfants
  };