"use client";

import Image from 'next/image';
import Header from '../components/Header'; // Correct path
import Footer from '../components/Footer'; // Correct path


export default function Shop() {
  return (
    <>
     <Header /> 
      
     <section className="new-arrivals bg-gray-400 py-12 px-4 flex flex-col items-center mb-60">
        <h2 className="text-3xl text-black font-bold flex justify-items-center bg-pink-200">All Products</h2>
        <p className="text-gray-600 font-serif mb-60">Discover our latest products!</p>
        <div className="image-grid">
          {/* New Arrival Item 1 */}
          <div className="group">
            <Image src="/menpic4.jpg" alt="Stylish Jacket" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Stylish Jacket</h3>
            <p className="text-gray-500 mt-1">$49.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* New Arrival Item 2 */}
          <div className="group">
            <Image src="/menpic5.jpg" alt="Casual Sneakers" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Casual Sneakers</h3>
            <p className="text-gray-500 mt-1">$39.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* New Arrival Item 3 */}
          <div className="group">
            <Image src="/menpic2.jpg" alt="Classic Watch" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Classic Watch</h3>
            <p className="text-gray-500 mt-1">$99.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* New Arrival Item 4 */}
          <div className="group">
            <Image src="/menpic1.jpg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Elegant Handbag</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 5*/}
          <div className="group">
            <Image src="/men1.jpeg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Elegant Handbag</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 6 */}
          <div className="group">
            <Image src="/men2.jpeg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Elegant Handbag</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 7 */}
          <div className="group">
            <Image src="/child1.jpeg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Elegant Handbag</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* New Arrival Item 8 */}
          <div className="group">
            <Image src="/child2.jpeg" alt="Elegant Handbag" width={300} height={250} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">Elegant Handbag</h3>
            <p className="text-gray-500 mt-1">$59.99</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
      <Footer />
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .hero {
          display: flex;
          justify-content: space-between;
          padding: 50px 5%;
          background-color: #f5e4e3;
        }

        .textContent {
          max-width: 50%;
        }

        .textContent h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .textContent p {
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .shopBtn {
          background-color: black;
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          font-weight: bold;
        }

        .imageContent img {
          width: 400px;
          height: auto;
          border-radius: 10px;
        }

        .new-arrivals {
          padding: 3rem 0;
          text-align: center;
          background-color: #f5e4e3; /* Fixed background-color syntax */
          padding: 30px;
          border-radius: 20px;
        }

        .image-grid {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .group {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 250px;
          transition: transform 0.3s ease;
        }

        .group:hover {
          transform: translateY(-5px);
        }

        .add-to-cart {
          background-color: #000;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          margin-top: 10px;
          cursor: pointer;
        }

        .add-to-cart:hover {
          background-color: #333;
        }
      `}</style>
    </>
  );
}
