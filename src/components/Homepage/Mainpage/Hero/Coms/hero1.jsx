import React from "react";
import { Button } from "@mui/material";

const Hero1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 bg-transparent">
      {/* Left Column */}
      <div className="flex flex-col items-start text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 transform transition duration-700 hover:scale-105">
          Classic Watch
        </h1>
        <Button
          href="/product/classic-watch"
          variant="contained"
          color="primary"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transform transition duration-500 hover:scale-110"
        >
          Buy Now
        </Button>
      </div>

      {/* Right Column */}
      <div className="relative w-full lg:w-1/2">
        {/* Background Decoration */}
        <div className="absolute inset-0 rounded-full  -z-10"></div>

        {/* Product Image */}
        <img
          src="https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66e1a49586446c030ff41443_pexels-pixabay-47856%20-%20Copy-p-800.avif"
          alt="Classic Watch"
          className="w-1/2 h-auto  transform transition duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Hero1;
