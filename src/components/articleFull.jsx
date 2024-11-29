import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

export default function ArticleFull ({dataArticle}) {

    if (!dataArticle || !dataArticle.attributes) {
        return <p>Article non disponible</p>;
    }

    const imageUrl = dataArticle?.attributes?.image?.data?.attributes?.url;
    const imageAlt = dataArticle?.attributes?.image?.data?.attributes?.name;
    const contenuArticle = dataArticle?.attributes?.contenue
    const htmlContent = { __html: DOMPurify.sanitize(contenuArticle) };

    return <article className="article_full sm:w-3/4 mx-auto flex flex-col justify-center items-center">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl m-5 sm:m-16 text-center">{dataArticle.attributes.titre}</h1>
    {imageUrl && <img className="object-cover rounded-3xl m-5" src={`https://my-strapi.kevinlebot.com${imageUrl}`} alt={imageAlt || "Image"} />}
    {contenuArticle ? (
        <div className="content w-3/4 m-7 pb-12 mx-auto flex flex-col justify-center" dangerouslySetInnerHTML={htmlContent}></div>
    ) : (
        <p className="content w-3/4 m-7 pb-12 mx-auto flex flex-col justify-center">Aucun contenue</p>
    )}
  </article>


}

ArticleFull.propTypes = {
    dataArticle: PropTypes.shape({
        attributes: PropTypes.shape({
            titre: PropTypes.string.isRequired,
            contenue: PropTypes.string,
            image: PropTypes.shape({
                data: PropTypes.shape({
                    attributes: PropTypes.shape({
                        url: PropTypes.string,
                        name: PropTypes.string,
                    }),
                }),
            }),
        }),
    }).isRequired,
};