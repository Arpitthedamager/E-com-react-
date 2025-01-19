import React from 'react';

function Filter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="p-6 flex justify-between items-center">
      <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
        Filter by Category
      </label>
      <select
        id="category"
        className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Show All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
