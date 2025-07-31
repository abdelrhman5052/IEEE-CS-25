import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-[#1E293B] p-4 rounded-lg shadow-md text-white w-64">
      <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-contain mb-4 rounded" />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-sm text-gray-400 mb-2 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-green-400 font-semibold">${product.price}</span>
        <button className="bg-fuchsia-500 text-white text-sm px-3 py-1 rounded-md hover:bg-fuchsia-600">View</button>
      </div>
    </div>
  );
}

export default ProductCard;
