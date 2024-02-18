import PropTypes from 'prop-types';

export default function Categories ({categories, handleCategorie, catActive}) {


    return <ul className="categories relative flex flex-wrap justify-center items-center m-4 sm:m-12">
                <li onClick={handleCategorie} className="m-2 sm:m-7 lg:m-7"><button className={`bg-stone-200 py-1 px-3 lg:py-3 lg:px-6 rounded-xl text-xl sm:text-3xl ${catActive === "tous" ? "active_cat" : null}`}>tous</button></li>
                {categories.map((cat, index) => (
                    <li key={index} onClick={handleCategorie} className="my-5 sm:my-0 m-2 sm:m-7 lg:m-7"><button className={`bg-stone-200 py-1 px-3 lg:py-3 lg:px-6 rounded-xl text-xl sm:text-3xl ${catActive === cat ? "active_cat" : null}`}>{cat}</button></li>
                ))}
            </ul>
}

Categories.propTypes = {
    categories: PropTypes.array,
    handleCategorie: PropTypes.func,
    catActive: PropTypes.node,
  };