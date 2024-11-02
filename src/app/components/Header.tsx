// src/app/Home.js (or src/app/Home.tsx)
"use client"; // Ensure this is present for client-side rendering

import Link from 'next/link'; // Import Link for navigation
import Image from 'next/image'; // Import Image for optimized images
import AddToCartButton from '../components/AddToCartButton';
export default function Home() {
  return (
    <>
      <header className="header">
        <div className="logo">ALLINONE</div>
        <Image className="-ml-40"width="50" height="50" src="/logo.png" alt="Logo" />
        <nav>
          <ul className="navList">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/About">ABOUT</Link></li>
            <li><Link href="/Contact">CONTACT</Link></li>
            <li><Link href="/Collection">COLLECTION</Link></li>
            <li><Link href="/Trends">TRENDS</Link></li>
          </ul>
        </nav>
        
        <AddToCartButton /> {/* Here is the Add to Cart button */}

      </header>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #f5e4e3; /* Change to match your theme */
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .navList {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .navList li a {
          text-decoration: none;
          font-weight: bold;
          color: black; /* Customize the link color */
        }

      `}</style>
    </>
  );
}
