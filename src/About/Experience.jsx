import  { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaPhoneAlt } from "react-icons/fa";

const Experience = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full py-24 relative overflow-hidden bg-pink-100"
    >
      {/* Soft Pink Glow */}
      <div className="absolute inset-0 "></div>

      <div
        className={`relative text-center max-w-4xl mx-auto px-4
        transform transition-all duration-700 ease-out
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20"
        }`}
      >
        {/* Heading with Whisper Effect */}
        <h1
          className="relative text-5xl sm:text-6xl font-extrabold
        text-black"
        >
          Ready to Experience the Difference?
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl sm:text-2xl text-black/80">
          Join thousands of satisfied customers who trust us
          for their daily grocery needs.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/shop"
            className="group inline-flex items-center justify-center gap-3 text-white
              px-8 py-4 rounded-2xl font-bold
              bg-black 
              transition-all duration-500
              hover:scale-110 "
          >
            <FaShoppingCart className="text-xl group-hover:scale-125 transition  text-white " />
            Start Shopping
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 text-white
              px-8 py-4 rounded-2xl font-bold
              bg-black 
              transition-all duration-500
              hover:scale-110 "
          >
            <FaPhoneAlt className="text-xl group-hover:rotate-12 transition text-white " />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
