import React, { useState } from "react";
import ProductModals from "../Component/ProductModals";
import { Link } from "react-router-dom";

// IMAGES
import side1 from "../assets/Images/side11.png";
import side2 from "../assets/Images/side1.webp";
import side3 from "../assets/Images/side23.jpg";
import side5 from "../assets/Images/side5.jpg";
import side6 from "../assets/Images/side6.jpg";
import side7 from "../assets/Images/side7.jpg";
import side9 from "../assets/Images/side9.jpg";
import side11 from "../assets/Images/side11.png";

const Video = ({ card, setCard }) => {
  const [category, setCategory] = useState([]);
  const [show, setShow] = useState(false);

  // ✅ 8 ITEMS
  const myCategories = [
    { title: "Lunch Box", image: side3, count: 12 },
    { title: "Casserole Set", image: side2, count: 11 },
    { title: "Kettles", image: side1, count: 4 },
    { title: "Pressure Cookers", image: side5, count: 4 },
    { title: "Cookware Set", image: side6, count: 8 },
    { title: "Copper Utensils", image: side7, count: 5 },
    { title: "Steel Bottles", image: side9, count: 7 },
    { title: "Flasks", image: side11, count: 3 },
  ];

  const addModals = (item) => {
    setCategory([item]);
    setShow(true);
  };

  return (
    <>
      <div className="w-full py-16 bg-white">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-500 tracking-wide">
            BROWSE OUR CATEGORIES
          </h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 md:px-16">

          {myCategories.map((item, index) => (
            <div
              key={index}
              onClick={() => addModals(item)}
              className="group cursor-pointer bg-white rounded-lg overflow-hidden 
transition-all duration-300 
shadow-md hover:shadow-2xl hover:-translate-y-2 
hover:bg-[#f4c58f]"
            >

              {/* IMAGE */}
              <div className="w-full h-[220px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div className="text-center py-4">
                <h3 className="text-gray-800 font-semibold uppercase text-sm tracking-wide">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  {item.count} PRODUCTS
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {show && (
        <ProductModals
          onClose={() => setShow(false)}
          category={category}
          card={card}
          setCard={setCard}
        />
      )}

      {/* BUTTON */}
      <div className="text-center mt-10">
        <Link
          to="/categories"
          className="inline-block px-8 py-3 border border-black text-black text-sm font-semibold tracking-wide hover:bg-black hover:text-white transition-all"
        >
          VIEW ALL CATEGORIES
        </Link>
      </div>
    </>
  );
};

export default Video;