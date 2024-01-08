import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { LIST_OF_PRODUCTS } from "../../utils/fake_data/LIST_OF_PRODUCTS";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  
  useEffect(() => {
    var selectedProduct = LIST_OF_PRODUCTS.find(p => p.id === params.id);
    setProduct(selectedProduct);
  }, []);

  const addToCart = (e) => {
    e.preventDefault();


  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="full_with_container flex-col md:flex-row pt-7 justify-between items-start flex-wrap md:flex-nowrap">
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <img src={product.image} alt="" className=""/>
        </div>
        <form onSubmit={addToCart} className="flex flex-col gap-2 w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p>{product.category} &nbsp;&nbsp;<span className="text-gray-400">|</span>&nbsp;&nbsp; <span className="text-green-500">{'In Stock'}</span></p>
          <p>{product.price}</p>
          <h2 className="font-bold mt-5">Description</h2>
          <p>{product.description}</p>
          <button type="submit" className="bg-black text-white p-4 rounded-lg mt-6">Book now</button>
        </form>
      </div>
    </div>
  )
}

export default ProductDetails