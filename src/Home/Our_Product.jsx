import React, { useState } from "react";
import { HoverImageData } from "../JsonData/Home_Json";
import { FaEye, FaHeart, FaShareAlt } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductModals from "../Component/ProductModals";
import { Link, useNavigate } from "react-router-dom"; // useNavigate add kiya

const Our_Product = ({ card, setCard }) => {
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Hook initialize kiya

  const addToCard = (id, price, title, image) => {
    setCard([...card, { id, price, title, image }]);
    toast.success("Added to cart successfully", {
      position: "top-right",
      autoClose: 1500,
      theme: "dark",
      transition: Bounce,
    });
  };

  const addModals = (id) => {
    const handle = HoverImageData.filter((item) => item.id === id);
    setCategory(handle);
    setShow(true);
  };

  // Category page par bhejne ke liye function
  const goToCategory = (categoryName) => {
    const slug = categoryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${slug}`);
  };

  return (
    <>
      <ToastContainer />

      <div className="w-full py-12 bg-white">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-red-800 uppercase tracking-wide">
            OUR PRODUCTS
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5">
          {HoverImageData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col border border-gray-100"
            >
              {/* IMAGE AREA - Clickable */}
              <div 
                onClick={() => goToCategory(item.category || "all")} 
                className="relative h-60 bg-white flex items-center justify-center overflow-hidden rounded-t-xl group cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain p-4 transition-all duration-500 group-hover:scale-110"
                />

                {/* HOVER ICONS */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Parent click prevent karne ke liye
                      addToCard(item.id, item.price, item.title, item.image);
                    }}
                    className="p-3 bg-white rounded-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:animate-bounce hover:bg-red-500 hover:text-white"
                  >
                    <FaHeart />
                  </button>

                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white rounded-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:animate-bounce hover:bg-blue-500 hover:text-white"
                  >
                    <FaShareAlt />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addModals(item.id);
                    }}
                    className="p-3 bg-white rounded-full transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:animate-bounce hover:bg-green-600 hover:text-white"
                  >
                    <FaEye />
                  </button>
                </div>
              </div>

              {/* CONTENT AREA */}
              <div className="p-4 text-center flex-grow group-hover:animate-pulse">
                <h1 
                  onClick={() => goToCategory(item.category || "all")}
                  className="text-lg text-black font-medium cursor-pointer hover:text-red-800 transition-colors"
                >
                  {item.title}
                </h1>
                <div className="flex justify-between items-center mt-3 px-2">
                  <p className="text-yellow-500 text-xs font-bold">
                    Rating ★★★★★
                  </p>
                  <p className="text-black font-bold text-lg">
                    ₹ {item.price}
                  </p>
                </div>
              </div>

              {/* ADD TO CART BUTTON */}
              <div className="p-4 pt-0">
                <button
                  onClick={() => addToCard(item.id, item.price, item.title, item.image)}
                  className="w-full bg-[#FFD700] text-black py-3 rounded-md font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#e6c200] active:scale-95 shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {show && (
        <ProductModals
          onClose={() => setShow(false)}
          category={category}
          card={card}
          setCard={setCard}
        />
      )}
    </>
  );
};

export default Our_Product;