import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categoryList } from "./categoryData"; 
import { allProducts } from "./productData";   

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  // Dropdown open/close karne ke liye state
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (categoryId?.includes("cooker")) setOpenDropdown("cookers");
  }, [categoryId]);

  const currentCategory = categoryList.find((item) => item.id === categoryId);
  const filteredProducts = allProducts.filter((product) => product.category === categoryId);

  // Dropdown toggle function
  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  if (!currentCategory) return <div className="pt-40 text-center">Category Not Found!</div>;

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-10 pt-28">
      
      {/* LEFT SIDEBAR WITH DROPDOWN */}
      <aside className="w-full md:w-[260px] shrink-0 border-r border-gray-100 pr-6">
        <h2 className="text-lg font-bold border-b-2 border-black pb-2 mb-6 tracking-widest">CATEGORIES</h2>
        
        <ul className="space-y-4 text-[16px] text-black  tracking-wider">
          
          {/* 1. Triply Cookware */}
          <li onClick={() => navigate('/category/triply-cookware')} className={`cursor-pointer hover:text-orange-600 ${categoryId === 'triply-cookware' ? 'text-orange-600' : ''}`}>
            Triply Cookware —
          </li>

          {/* 2. Thermoware */}
          <li onClick={() => navigate('/category/thermoware')} className={`cursor-pointer hover:text-orange-600 ${categoryId === 'thermoware' ? 'text-orange-600' : ''}`}>
            Thermoware —
          </li>

          {/* 3. Lunchbox */}
          <li onClick={() => navigate('/category/lunchbox')} className={`cursor-pointer hover:text-orange-600 ${categoryId === 'lunchbox' ? 'text-orange-600' : ''}`}>
            Lunchbox —
          </li>

          {/* 4. DROPDOWN: Cookers */}
          <li className="cursor-pointer">
            <div onClick={() => toggleDropdown("cookers")} className="flex justify-between items-center hover:text-orange-600">
              COOKERS {openDropdown === "cookers" ? "▲" : "▼"}
            </div>
            {openDropdown === "cookers" && (
              <ul className="pl-4 mt-2 space-y-2 text-gray-400 normal-case font-medium">
                <li onClick={() => navigate('/category/aluminum-cooker')} className="hover:text-black italic">Aluminum Cookers</li>
                <li onClick={() => navigate('/category/steel-cooker')} className="hover:text-black italic">Steel Cookers</li>
                <li onClick={() => navigate('/category/triply-cooker')} className="hover:text-black italic">Triply Cookers</li>
              </ul>
            )}
          </li>

          {/* 5. Cookware Sets */}
          <li onClick={() => navigate('/category/cookware-sets')} className={`cursor-pointer hover:text-orange-600 ${categoryId === 'cookware-sets' ? 'text-orange-600' : ''}`}>
            Cookware Sets —
          </li>

          {/* 6. Copper Utensils */}
          <li onClick={() => navigate('/category/copper-utensils')} className={`cursor-pointer hover:text-orange-600 ${categoryId === 'copper-utensils' ? 'text-orange-600' : ''}`}>
            Copper Utensils —
          </li>

          {/* 7. Steel Bottles */}
          <li onClick={() => navigate('/category/steel-bottles')} className={`cursor-pointer hover:text-orange-600 ${categoryId === 'steel-bottles' ? 'text-orange-600' : ''}`}>
            Steel Bottles —
          </li>
        </ul>
      </aside>

      {/* RIGHT SIDE - Product Grid */}
      <main className="flex-1">
        <div className="flex justify-between items-end mb-10 border-b pb-6">
          <h1 className="text-4xl font-extralight uppercase tracking-[6px]">{currentCategory.name}</h1>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">{filteredProducts.length} items found</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5]  overflow-hidden mb-4 border border-gray-50">
                <img src={product.img} alt={product.name} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform bg-red-700 text-white text-[14px] py-4 text-center font-bold tracking-widest">
                  ADD TO CART
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg text-red-800 font-bold tracking-[2px] mb-1">{product.series}</p>
                <h2 className="text-lg font-light text-gray-800 leading-tight h-10 overflow-hidden">{product.name}</h2>
                <div className="mt-2 font-bold text-gray-900">₹{product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;