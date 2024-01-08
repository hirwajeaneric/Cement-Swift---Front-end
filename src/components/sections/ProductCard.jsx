import { Link } from "react-router-dom";
import { stringCompressor } from "../../utils/helper_functions/StringCompressor";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    const { image, name, description, price } = product;
    return (
        <Link to={`/products/${product.id}`} className="flex flex-col w-1/3 p-4 mb-8 cursor-pointer">
            <img src={image} alt="" />
            <p className="font-bold my-3">{stringCompressor(name, 25)}...</p>
            <span>{stringCompressor(description, 24)}...</span>
            <span>{price} Rwf</span>
        </Link>
    )
}

export default ProductCard