

export default function Categories ({categories, handleCategorie, catActive}) {


    return <ul className="categories relative flex justify-center items-center m-12">
                <li onClick={handleCategorie} className="mx-2 sm:mx-7 lg:mx-12"><button className={`bg-stone-200 py-1 px-3 lg:py-3 lg:px-6 rounded-xl text-xl sm:text-3xl ${catActive === "tous" ? "active_cat" : null}`}>tous</button></li>
                {categories.map((cat, index) => (
                    <li key={index} onClick={handleCategorie} className="mx-2 sm:mx-7 lg:mx-12"><button className={`bg-stone-200 py-1 px-3 lg:py-3 lg:px-6 rounded-xl text-xl sm:text-3xl ${catActive === cat ? "active_cat" : null}`}>{cat}</button></li>
                ))}
            </ul>
}