"use client"; // Ensure client-side rendering

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function ProductPage() {
  // Sample product data
  const product = {
    id: 1,
    name: 'Sample Product',
    price: 29.99,
  };

  // Function to handle adding the item to the cart
  function handleAddToCart() {
    alert(`${product.name} has been added to your cart!`); // Simulate adding to cart with an alert
  }

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      {/* Add to Cart button */}
      <button onClick={handleAddToCart} className="addToCartBtn">
        <ShoppingCartIcon className="icon" />
        Add to Cart
      </button>

      {/* Styling */}
      <style jsx>{`
        .product-container {
          text-align: center; /* Center-align the product details */
          margin: 20px; /* Add margin around the container */
        }

        .addToCartBtn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid black;
          padding: 10px 20px;
          color: black;
          font-weight: bold;
          cursor: pointer;
          background-color: transparent;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .icon {
          width: 20px;
          height: 20px;
        }

        .addToCartBtn:hover {
          background-color: black;
          color: white;
        }
      `}</style>
    </div>
  );
}
