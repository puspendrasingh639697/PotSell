import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import slider1 from "../assets/Images/slider1.webp";
import slider2 from "../assets/Images/slider2.webp";

export default function ServiceHero() {
  const slides = [slider1, slider2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slides.length);
    setIndex(randomIndex);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    /* mt-0 aur p-0 ensure karega ki koi gap na aaye */
    <section className="relative mt-0  w-full h-[50vh] md:h-[80vh] overflow-hidden bg-white m-0 p-0">
      
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]}
            alt={`Slide ${index}`}
            className="h-full w-full object-cover md:object-fill"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </AnimatePresence>
      </div>

      {/* ARROWS */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-[#a52a2a] hover:text-white transition-colors">
        <span className="text-xl md:text-2xl font-bold">&#10094;</span>
      </button>

      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-[#a52a2a] hover:text-white transition-colors">
        <span className="text-xl md:text-2xl font-bold">&#10095;</span>
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} 
            className={`transition-all duration-300 rounded-full shadow-sm ${index === i ? "w-10 h-2.5 bg-[#a52a2a]" : "w-2.5 h-2.5 bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}