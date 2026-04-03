import React from "react";
// Images import kar lo taaki React mein error na aaye
import side15 from "../assets/Images/side15.jpeg"; 
import side16 from "../assets/Images/side18.jpeg";

const MyOurTeam = () => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Flexbox ka use karke dono images ko side-by-side set kiya hai */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={side15} 
              alt="side-15" 
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={side16} 
              alt="side-16" 
              className="w-full h-auto object-cover rounded-sm shadow-sm"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyOurTeam;