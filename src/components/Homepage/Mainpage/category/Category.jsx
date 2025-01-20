import React from "react";
import { Typography } from "@mui/material";

const categories = [
  {
    id: "earbuds",
    title: "Earbuds",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c75f31002ce6c2601becd6_23732%20(1).avif",
  },
  {
    id: "phone",
    title: "Phone",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c75d65aeeae9a3e31a9004_2150470457.avif",
  },
  {
    id: "watch",
    title: "Watch",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c760eaf2ba6c3f3de49891_pexels-jatin-anand-33853-125779.avif",
  },
  {
    id: "joystick",
    title: "Joystick",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c75f4b9ed6cd11c1c302b8_17444.avif",
  },
  {
    id: "headphone",
    title: "Headphone",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c75f7a5081a476defad155_30936801_7725172.avif",
  },
  {
    id: "camera",
    title: "Camera",
    image:
      "https://cdn.prod.website-files.com/66c5934366ec1f0519f21b89/66c760932e0634c7b38d6bfa_3246.avif",
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 justify-center gap-4 py-4 px-8 md:px-32">
      {categories.map((category) => (
        <a
        href={`/?category=${category.title}`} // Dynamic URL with category as query parameter
        key={category.id}
          className="relative z-30 bg-white md:w-56 md:h-48 w-full h-36 overflow-hidden cursor-pointer transition-transform transform md:hover:scale-105 rounded-lg shadow-md"
        >
          {/* Background Image */}
          <img
            src={category.image}
            alt={category.title}
            className="absolute h-full w-full inset-0 bg-cover bg-center bg-no-repeat z-0 transition-transform duration-500 md:hover:scale-110"
          />

          {/* White Overlay */}
          <div className="absolute bg-white inset-0 z-10 flex items-center justify-center transition-opacity duration-300  hover:bg-opacity-0">
            <Typography variant="h6" className="text-gray-800 font-semibold">
              {category.title}
            </Typography>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CategoryGrid;
