import React, { useState } from "react";
import Filter from "./FilterPanel";
import ProductGrid from "./ProductGrid";
import Footer from "./Mainpage/footer/Footer";
import Hero from "./Mainpage/Hero/hero";
import Navbar from "./Mainpage/navbar/Navbar";
import productsData from "../../assets/product.json"; // Directly import productsData

const Homepage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="py-8">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
