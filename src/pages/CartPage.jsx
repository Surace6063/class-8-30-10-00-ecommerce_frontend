import React from "react";

const CartPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 pt-24">
      <h1 className="text-3xl font-bold text-slate-800 mb-8">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-8">
            {/* Image */}
            <div className="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/xGQOw3p.jpeg"
                alt="Product"
                className="w-32 h-32 rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Casual Shirt
                </h2>
                <p className="text-slate-500">$39.99</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center space-x-3">
              <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded cursor-pointer">
                −
              </button>
              <span className="px-4">2</span>
              <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded cursor-pointer">
                +
              </button>
            </div>

            {/* Remove */}
            <button className="text-red-500 hover:underline">Remove</button>
          </div>

          <div className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.imgur.com/xGQOw3p.jpeg"
                alt="Product"
                className="w-32 h-32 rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-slate-800">
                  Running Shoes
                </h2>
                <p className="text-slate-500">$59.99</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded">
                −
              </button>
              <span className="px-4">1</span>
              <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded">
                +
              </button>
            </div>

            <button className="text-red-500 hover:underline">Remove</button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border border-slate-200 rounded-lg p-6 shadow-sm h-fit">
          <h2 className="text-xl font-semibold text-slate-800 mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between mb-2">
            <span className="text-slate-600">Subtotal</span>
            <span className="text-slate-800 font-medium">$139.97</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-slate-600">Shipping</span>
            <span className="text-slate-800 font-medium">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mb-6">
            <span className="text-lg font-bold text-slate-800">Total</span>
            <span className="text-lg font-bold text-slate-800">$139.97</span>
          </div>
          <button className="w-full bg-slate-800 text-white py-3 rounded hover:bg-slate-700 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
