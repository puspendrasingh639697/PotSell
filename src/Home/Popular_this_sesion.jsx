import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// --- 15 IMAGES IMPORTS ---
import side1 from "../assets/Images/side1.jpeg";
import side2 from "../assets/Images/side2.jpeg";
import side3 from "../assets/Images/side3.jpeg";
import side4 from "../assets/Images/side4.jpeg";
import side5 from "../assets/Images/side5.jpeg";
import side6 from "../assets/Images/side6.jpeg";
import side7 from "../assets/Images/side7.jpeg";
import side8 from "../assets/Images/side8.jpeg";
import side9 from "../assets/Images/side9.jpeg";
import side10 from "../assets/Images/side10.jpeg";
import side11 from "../assets/Images/side11.jpeg";
import side12 from "../assets/Images/side12.jpeg";
import side13 from "../assets/Images/side13.jpeg";
import sideImage from "../assets/Images/side.jpeg"; // Remaining 2 for 15
import bannerImg from "../assets/Images/website_banner.webp"; 

const This_Season = () => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef(null);

  // --- 15 CATEGORIES DATA ---
  const categories = [
    { name: "Frying Pans", img: side1 },
    { name: "Sauce Pans", img: side2 },
    { name: "Kadhai", img: side3 },
    { name: "Tawas", img: side4 },
    { name: "Casseroles", img: side5 },
    { name: "Tadka Pan", img: side6 },
    { name: "Cookware Sets", img: side7 },
    { name: "Pressure Cooker", img: side8 },
    { name: "Grill Pans", img: side9 },
    { name: "Milk Pans", img: side10 },
    { name: "Steamers", img: side11 },
    { name: "Woks", img: side12 },
    { name: "Appam Patra", img: side13 },
    { name: "Serveware", img: sideImage },
    // { name: "Kitchen Tools", img: side14 }, // Repeating 1 to make it 15
  ];

  // Intersection Observer for Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 overflow-hidden">
      
      {/* 1. CIRCULAR CATEGORIES SLIDER */}
      <div className={`transition-all duration-1000 ${show ? "opacity-100" : "opacity-0"}`}>
        
        {/* Infinite Scroll Container */}
        <div className="flex overflow-hidden relative group">
          <motion.div 
            className="flex gap-10 py-5"
            animate={{ x: [0, -3000] }} // Adjusted speed for 15 items
            transition={{ 
              repeat: Infinity, 
              duration: 40, // Slowed down slightly for better visibility
              ease: "linear" 
            }}
          >
            {/* Array ko 2 baar repeat kiya hai infinite feel ke liye */}
            {[...categories, ...categories].map((item, i) => (
              <div key={i} className="flex flex-col items-center min-w-[150px] md:min-w-[180px]">
                <div className="w-32 h-32 md:w-44 md:h-44 overflow-hidden   transition-all duration-300 transform hover:scale-105">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-sm md:text-base  text-black  text-center ">
                  {item.name}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. FULL WIDTH BANNER */}
      <div className="mt-16 px-4 md:px-0">
        <div className="max-w-[1400px] mx-auto overflow-hidden rounded-xl md:rounded-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={bannerImg} 
              alt="Premium Cookware Banner" 
              className="w-full h-auto object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* 3. VIEW ALL BUTTON */}
      

    </section>
  );
};

export default This_Season;