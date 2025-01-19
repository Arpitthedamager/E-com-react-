import React, { useState, useEffect } from 'react';
import Navbar from './components/Homepage/Mainpage/navbar/Navbar';
import Hero from './components/Homepage/Mainpage/Hero/hero';
import Filter from './components/Homepage/FilterPanel';
import ProductGrid from './components/Homepage/ProductGrid';
import productsData from './assets/product.json';
import Footer from './components/Homepage/Mainpage/footer/Footer';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const categories = ['All', ...new Set(productsData.map((p) => p.category))];

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Hero />
      <div className="py-8">
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          onSearch={handleSearch}
        />
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
