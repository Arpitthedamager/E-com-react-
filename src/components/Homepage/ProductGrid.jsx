import React from 'react';
import ProductCard from './ProductCard';

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {products.slice(0, 8).map((product) => (
        <div key={product.id} className="p-2">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
