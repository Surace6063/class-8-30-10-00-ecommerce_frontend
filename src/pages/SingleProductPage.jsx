import React, { useState } from "react";

const SingleProduct = () => {
 
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Product Image */}
        <div className="p-4 h-[80vh]">
          <img
            src="https://i.imgur.com/xGQOw3p.jpeg"
            alt="Casual Shirt"
            className="w-full h-full rounded-md object-cover object-center"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Casual Shirt
          </h1>
          <p className="text-lg text-slate-500 mt-2">Clothing</p>
          <p className="text-2xl font-semibold text-slate-800 mt-4">
            $39.99
          </p>

          <p className="mt-6 text-slate-600">
            This casual shirt is made from premium cotton for ultimate comfort and style. 
            Perfect for everyday wear or semi-formal occasions.
          </p>

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center space-x-4">
            <label className="text-slate-700">Quantity:</label>
            <div className="flex items-center border border-slate-300 rounded overflow-hidden">
              <button
                
                className="px-3 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              >
                −
              </button>
              <input
                type="text"
                readOnly
                value={0}
                className="w-12 text-center border-x border-slate-300 bg-white text-slate-800"
              />
              <button
                
                className="px-3 py-2 bg-slate-100 text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 bg-slate-800 text-white px-6 py-3 rounded hover:bg-slate-700 transition cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
