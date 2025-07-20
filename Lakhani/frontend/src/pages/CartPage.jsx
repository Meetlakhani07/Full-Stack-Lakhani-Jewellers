// CartPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart();

  const handleQuantityChange = (productId, newQty) => {
    if (newQty < 1) return;
    updateQuantity(productId, newQty);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const finalTotal = totalPrice;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg text-white mb-6">Your cart is empty</p>
            <Link
              to="/products"
              className="bg-amber-600 text-white py-2 px-6 rounded inline-block hover:bg-amber-300 hover:text-black transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="border-b border-gray-700">
                    <tr>
                      <th className="py-4 px-6 text-left text-white">Product</th>
                      <th className="py-4 px-6 text-center text-white">Price</th>
                      <th className="py-4 px-6 text-center text-white">Quantity</th>
                      <th className="py-4 px-6 text-right text-white">Total</th>
                      <th className="py-4 px-6 text-center text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.product} className="border-b border-gray-700">
                        <td className="py-4 px-6">
                          <div className="flex items-center">
                            <div className="w-20 h-20 mr-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                            <div>
                              <Link
                                to={`/product/${item.product}`}
                                className="text-white hover:text-amber-600"
                              >
                                {item.name}
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center text-amber-600">
                          GBP {item.price.toFixed(2)}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.product, item.qty - 1)
                              }
                              className="bg-transparent border border-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-l"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.qty}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.product,
                                  parseInt(e.target.value)
                                )
                              }
                              className="w-12 h-8 border-t border-b border-gray-700 bg-transparent text-center text-white"
                            />
                            <button
                              onClick={() =>
                                handleQuantityChange(item.product, item.qty + 1)
                              }
                              className="bg-transparent border border-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-r"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-right text-amber-600 font-medium">
                          GBP {(item.price * item.qty).toFixed(2)}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <button
                            onClick={() => handleRemoveItem(item.product)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Remove item"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap justify-between mt-6">
                <div className="md:w-auto mt-4 md:mt-0">
                  <Link
                    to="/products"
                    className="bg-gray-700 text-white py-3 px-6 rounded inline-block hover:bg-gray-600 transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                  Cart Totals
                </h2>

                <div className="flex justify-between mb-4">
                  <span className="text-white">Subtotal</span>
                  <span className="text-white">GBP {totalPrice.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <span className="text-white">Shipping</span>
                  <span className="text-white">Free</span>
                </div>

                <div className="flex justify-between py-4 border-t border-gray-700">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-amber-600 font-bold text-xl">
                    GBP {finalTotal.toFixed(2)}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  className="w-full bg-amber-600 text-white py-3 text-center rounded font-medium hover:bg-amber-300 hover:text-black transition-colors block mt-6"
                >
                  Proceed to Checkout
                </Link>

                <div className="mt-6 text-center">
                  <div className="flex justify-center items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-400 text-sm">Secure Checkout</p>
                  </div>
                  {/* Payment Icons remain untouched */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
