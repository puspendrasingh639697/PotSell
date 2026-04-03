import React from "react";
import google from "../assets/Icons/google.png";
import appstore from "../assets/Icons/Appstoe.png";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsTelephoneXFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-white  text-black py-16 px-6 relative overflow-hidden">
      
      {/* Neon Background Glow */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">

          {/* EMAIL SUBSCRIBE */}
          <div className="space-y-4">
            

           

            <div className="flex items-center border border-pink-500/50 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-4 w-full text-sm focus:outline-none"
              />
              <button className="px-6 py-4 bg-pink-700 text-black font-bold hover:bg-pink-700 transition">
                SEND
              </button>
            </div>
          </div>

          {/* MOBILE APP */}
          <div className="space-y-4">
           

           

            <div className="flex gap-3 pt-2">
              <img src={appstore} alt="App Store" className="w-[110px] hover:scale-105 transition" />
              <img src={google} alt="Google Play" className="w-[110px] hover:scale-105 transition" />
            </div>
          </div>

          {/* SUPPORT */}
          <div className="space-y-4">
            

           
          </div>

{/*        
          <div className="flex justify-center items-center">
            <Lottie
              animationData={perfume}
              loop={true}
              className="w-[160px] drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]"
            />
          </div> */}
        </div> 

        {/* Divider */}
        <div className="mt-14 border-t border-pink-500/20 pt-6 text-center text-sm text-black tracking-widest">
          © 2025 • COSMETIC HACKER UI • ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
