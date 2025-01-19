import React, { useState, useEffect } from 'react';
import Navbar from './Mainpage/navbar/Navbar';
import Hero from './Mainpage/Hero/hero';
import ProductGrid from './ProductGrid'; // Import ProductGrid without Filter
import ProductDetail from '../ProductDetails/ProductDetails'; // Import ProductDetail
import productsData from '../../assets/product.json';
import Footer from './Mainpage/footer/Footer';

const Homepage = () => {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State to track selected product

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set the selected product
  };

  const handleBackToGrid = () => {
    setSelectedProduct(null); // Reset to show product grid
  };

  return (
    <div className="overflow-x-auto">
      <Navbar cartCount={cart.length} />
      <Hero />
      <div className="py-8">
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} onBack={handleBackToGrid} />
        ) : (
          <ProductGrid products={productsData} onProductClick={handleProductClick} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;