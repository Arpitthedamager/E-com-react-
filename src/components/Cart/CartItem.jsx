import React from "react";

const CartCard = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-300">
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="text-lg">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default CartCard;
