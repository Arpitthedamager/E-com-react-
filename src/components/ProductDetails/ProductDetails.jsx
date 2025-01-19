import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the public/assets folder
    if (query.id) {
      fetch('/assets/Dproduct.json')
        .then((response) => response.json())
        .then((data) => {
          const selectedProduct = data.find((item) => item.id === parseInt(query.id));
          setProduct(selectedProduct);
        })
        .catch((error) => console.error('Error fetching product data:', error));
    }
  }, [query.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6"> 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.category}</p>
          <div className="flex items-center mb-4">
            <span className="text-xl font-semibold">${product.price.discounted}</span>
            {product.price.original !== product.price.discounted && (
              <span className="text-sm text-gray-500 line-through ml-4">${product.price.original}</span>
            )}
          </div>

          <p className="mb-4">{product.description}</p>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Stock Information</h3>
            <p>SKU: {product.stock.sku}</p>
            <p>Status: {product.stock.status}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Delivery Information</h3>
            <p>Estimated Delivery: {product.delivery.estimated}</p>
            <p>{product.delivery.freeShippingMessage}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Payment Options</h3>
            <ul>
              {product.paymentOptions.map((option, index) => (
                <li key={index} className="list-disc pl-5">{option}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold">Rating</h3>
            <p>{'⭐'.repeat(product.rating)}</p>
          </div>

          <div className="mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
