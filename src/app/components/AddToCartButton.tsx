import { ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function AddToCartButton() {
  return (
    <button className="addToCartBtn">
      <ShoppingCartIcon className="icon" />
      Add to Cart

      <style jsx>{`
        .addToCartBtn {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid black;
          padding: 10px 20px;
          color: black;
          font-weight: bold;
          text-decoration: none;
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
    </button>
  );
}
