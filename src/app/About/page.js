"use client";

import Link from 'next/link';
import Header from '../components/Header'; // Correct path
import Footer from '../components/Footer'; // Correct path

export default function About() {
  return (
    
    <>
    <Header />
      <section className="about-section p-8 text-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">About ALLINONE</h1>
        <p className="text-lg mb-4">
          ALLINONE is your ultimate shopping destination, bringing you the latest trends, highest quality, and a curated collection of everything you need. We believe in blending style with functionality to give our customers a seamless shopping experience.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          To make high-quality fashion accessible and affordable to everyone, while promoting sustainable practices and a focus on customer satisfaction.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-8">
          Founded in 2010, ALLINONE has grown from a small boutique to a leading fashion brand with thousands of happy customers worldwide. We take pride in offering diverse collections, from stylish clothing to elegant accessories.
        </p>
        <Link href="/Contact" className="contact-link bg-black text-white px-6 py-3 rounded">
          Contact Us
        </Link>
      </section>

      <Footer />

      <style jsx>{`
        .about-section {
          max-width: 800px;
          margin: auto;
          border-radius: 8px;
        }

        .contact-link {
          font-weight: bold;
          transition: background-color 0.3s;
        }

        .contact-link:hover {
          background-color: #333;
        }
      `}</style>
    </>
  );
}
