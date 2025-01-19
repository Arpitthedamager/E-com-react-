import React, { useState } from 'react';

function Filter({ categories, selectedCategory, onCategoryChange, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Trigger the filtering function in the parent component
  };

  return (
    <div className="p-6 bg-white flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Category Filter */}
      <div className="flex items-center space-x-3 w-full sm:w-auto">
        <label htmlFor="category" className="text-gray-700 font-semibold text-lg">Filter by Category</label>
      </div>

      {/* Search Input */}
      <div className="flex items-center space-x-3 w-full sm:w-auto">
        <select
          id="category"
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-auto"
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
        <input
          id="search"
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full sm:w-auto"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}

export default Filter;
