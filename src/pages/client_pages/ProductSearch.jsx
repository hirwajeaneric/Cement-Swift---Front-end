import ProductCard from "../../components/sections/ProductCard";
import { CEMENT_CATEGORIES } from "../../utils/CementCategories";
import { LIST_OF_PRODUCTS } from "../../utils/fake_data/LIST_OF_PRODUCTS";

const ProductSearch = () => {
    const range = {
        from: 1,
        to: 9
    }

    const searchResults = 45;

    const submitSearchQuery = (e) => {
        e.preventDefault();

    }

    const handleInput = (e) => {

    }

    const handleSorting = (e) => {

    }

    return (
        <div className="w-full flex justify-center items-start">
            <div className="full_with_container flex-col md:flex-row pt-7 justify-between items-start">
                {/* Navigation  */}
                <form onSubmit={submitSearchQuery} className="w-full md:w-1/4 vertical_filter flex flex-col gap-7">
                    <p className="font-bold">Product Categories</p>
                    <div className="product_categories">
                        {CEMENT_CATEGORIES.map((category, index) => {
                            return (
                                <div key={index} className="search_input_element">
                                    <input type="checkbox" id={category.name} name={category.name.split(" ").join("")} value={category.name} onChange={handleInput} />
                                    <label htmlFor={category.name}>{category.name}</label>
                                </div>
                            )
                        })}
                    </div>
                    <p className="font-bold mt-6">Sort by</p>
                    <div className="sort_by">
                        <div className="search_input_element">
                            <input type="radio" name="latest" checked value={'latest'} onChange={handleSorting} />
                            <label htmlFor="latest">Latest</label>
                        </div>
                        <div className="search_input_element">
                            <input type="radio" name="oldest" value={'oldest'} onChange={handleSorting} />
                            <label htmlFor="oldest">Oldest</label>
                        </div>
                    </div>
                </form>

                {/* Product list  */}
                <div className="w-full md:w-3/4 pl-10 flex flex-col justify-start gap-8">
                    <h2 className="font-bold">Showing {range.from} - {range.to} of {searchResults}</h2>
                    <div className="w-full flex justify-between items-start flex-wrap">
                        {LIST_OF_PRODUCTS.map((product, index) => {
                            if (index > 9) {
                                return <></>
                            }
                            return (
                                <ProductCard key={index} product={product} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductSearch