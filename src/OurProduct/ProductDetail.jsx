import React from 'react';
import { useParams } from 'react-router-dom';
import { HoverImageData } from "../JsonData/Home_Json";
import { toast } from "react-toastify";

const ProductDetail = ({ card, setCard }) => {
  const { id } = useParams();
  const product = HoverImageData.find(item => item.id === parseInt(id));

  if (!product) return <div className="text-center py-20 text-2xl">Product Not Found!</div>;

  const addToCart = () => {
    setCard([...card, product]);
    toast.success("Added to cart!");
  };

  return (
    <div className="container mx-auto px-5 py-12 flex flex-col md:flex-row gap-12 bg-white">
      <div className="flex-1 border rounded-xl p-5 flex items-center justify-center bg-gray-50">
        <img src={product.image} alt={product.title} className="max-h-[500px] object-contain hover:scale-105 transition-transform" />
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-3xl text-red-700 font-bold">₹ {product.price}</p>
        <div className="border-t border-b py-4">
          <h3 className="font-semibold text-lg mb-2">Description:</h3>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>
        <button 
          onClick={addToCart}
          className="w-full md:w-64 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-lg transition-all shadow-lg active:scale-95"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;