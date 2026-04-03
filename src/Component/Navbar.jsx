import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Modals from "../Component/Modals";
import logo from "../assets/Icons/logo-removebg-preview.png";

import {
  RiShoppingBasketFill, RiSearchLine, RiCloseLine, RiMenu3Line,
  RiUserLine, RiHeartLine, RiTruckLine, RiSettingsLine,
  RiAccountCircleLine, RiLogoutBoxRLine
} from "react-icons/ri";

const Navbar = ({ card = [] }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // TERA ORIGINAL RESIZE LOGIC
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setShowMobileSearch(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COOKWARE", path: "/cookware", hasDropdown: true },
    { name: "SERVEWARE", path: "/serveware" },
    { name: "KITCHEN ESSENTIALS", path: "/essentials" },
    { name: "DEALS", path: "/deals" },
    { name: "CORPORATE GIFTING", path: "/gifting" },
  ];

  const dropdownItems = [
    "FRYING PANS", "SAUCE PANS", "KADHAIS", "TAWAS", 
    "CASSEROLES", "TADKA PANS", "COOKWARE SETS", "PRESSURE COOKERS", "GRILL PANS"
  ];

  const sidebarItems = [
    { name: "My Profile", icon: RiUserLine, path: "/profile" },
    { name: "My Wishlist", icon: RiHeartLine, path: "/wishlist" },
    { name: "Track Order", icon: RiTruckLine, path: "/tracking" },
    { name: "Settings", icon: RiSettingsLine, path: "/settings" },
    { name: "Account Details", icon: RiAccountCircleLine, path: "/myaccount" },
  ];

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className="relative w-full z-50 shadow-md border-none outline-none">
        
        {/* --- LAYER 1: YELLOW BAR --- */}
        <div className="bg-[#ed9e0c] text-white text-center py-2 px-4 text-[12px] md:text-[14px]  border-none">
          🚚 Free Shipping on all orders above ₹999! Standard for pan India
        </div>

        {/* --- LAYER 2: PEACH MAIN HEADER --- */}
        <div className="bg-[#f4c58f] px-4 md:px-12 py-3 flex items-center justify-between border-none">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <button onClick={toggleMobileMenu} className="lg:hidden text-black text-2xl"><RiMenu3Line /></button>
            <Link to="/"><img src={logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" /></Link>
          </div>

          {/* SEARCH */}
          <div className="hidden lg:flex relative w-full max-w-lg mx-6">
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search store..." className="w-full bg-white px-6 py-3 rounded-full outline-none shadow-sm border-none" />
            <RiSearchLine className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xl" />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6 md:gap-10">
            <div className="hidden xl:block text-right leading-tight">
              <p className="text-[15px] font-bold text-black uppercase">Whatsapp Chat</p>
              <p className="text-sm text-black">+91-8368481328</p>
            </div>
            <button className="flex flex-col items-center group">
              <RiHeartLine className="text-3xl text-black group-hover:text-red-700 transition" />
              <span className="hidden sm:block text-[14px]  mt-1">Wish Lists</span>
            </button>
            <button onClick={() => setShowModal(true)} className="flex flex-col items-center group">
              <RiUserLine className="text-3xl text-black group-hover:text-red-700 transition" />
              <span className="hidden sm:block text-[14px]  mt-1">Sign In</span>
            </button>
            <button onClick={toggleCart} className="relative flex flex-col items-center group">
              <RiShoppingBasketFill className="text-3xl text-black group-hover:text-red-700 transition" />
              <span className="absolute -top-1 right-0 bg-red-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{card.length}</span>
              <span className="hidden sm:block text-[14px]  mt-1">Cart</span>
            </button>
          </div>
        </div>

        {/* --- LAYER 3: BROWN NAVIGATION (GRID DROPDOWN) --- */}
        <div className="bg-[#bc8a5f] hidden lg:block border-none">
          <ul className="flex justify-center items-center gap-10 py-3">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={link.path} className="text-black text-[14px]    hover:text-white transition-colors">{link.name}</Link>

                <AnimatePresence>
                  {activeDropdown === link.name && link.hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-2xl z-50 border-t-4 border-red-800 p-8"
                    >
                      <div className="grid grid-cols-3 gap-y-4 gap-x-8">
                        {dropdownItems.map((item) => (
                          <Link key={item} to="/products" className="text-[12px] font-bold text-gray-700 hover:text-red-800 hover:translate-x-1 transition-all uppercase">{item}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- TERA SIDEBAR LOGIC (MOBILE) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div onClick={toggleMobileMenu} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black z-[60]" />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} className="fixed left-0 top-0 h-full w-80 bg-white z-[70] shadow-xl overflow-y-auto">
              <div className="p-5 bg-[#f4c58f] flex justify-between items-center border-none">
                <img src={logo} className="h-12" alt="Logo" />
                <RiCloseLine className="text-3xl cursor-pointer" onClick={toggleMobileMenu} />
              </div>
              <div className="p-4 flex flex-col">
                {navLinks.map(link => (
                  <Link key={link.name} to={link.path} onClick={toggleMobileMenu} className="p-4 font-bold border-b text-sm uppercase text-gray-800">{link.name}</Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- TERA SIDEBAR LOGIC (CART/ACCOUNT) --- */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div onClick={toggleCart} initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black z-[60]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-80 bg-white z-[70] shadow-xl flex flex-col">
              <div className="p-6 bg-gray-900 text-white flex justify-between items-center">
                <h2 className="text-xl font-bold uppercase tracking-widest">My Account</h2>
                <RiCloseLine className="text-2xl cursor-pointer" onClick={toggleCart} />
              </div>
              <div className="flex-1 p-4">
                {sidebarItems.map(item => (
                  <Link key={item.name} to={item.path} onClick={toggleCart} className="flex items-center gap-4 p-4 hover:bg-orange-50 rounded-xl font-bold text-gray-700 transition-all border-b border-gray-50">
                    <item.icon className="text-xl text-amber-700" /> {item.name}
                  </Link>
                ))}
              </div>
              <div className="p-6 border-t">
                <button onClick={() => {toggleCart(); setShowModal(true);}} className="w-full bg-red-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  <RiLogoutBoxRLine /> Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {showModal && <Modals onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;