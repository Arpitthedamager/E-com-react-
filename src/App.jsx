import React, { useState } from 'react';
import Navbar from './components/Homepage/Mainpage/navbar/Navbar';
import Hero from './components/Homepage/Mainpage/Hero/hero';
import Filter from './components/Homepage/FilterPanel';
import ProductGrid from './components/Homepage/ProductGrid';
import productsData from './assets/product.json';
import Footer from './components/Homepage/Mainpage/footer/Footer';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = ['All', ...new Set(productsData.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='py-8'>
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

export default App;
