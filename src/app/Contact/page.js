"use client";
import Header from '../components/Header'; // Correct path
import Footer from '../components/Footer'; // Correct path

export default function Contact() {
  return (
    <>
    <Header />
      <section className="contact-section p-8 text-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          We'd love to hear from you! Whether you have questions about our products, feedback, or need support, feel free to reach out.
        </p>

        <div className="contact-info my-6">
          <p className="text-md">Email: support@allinone.com</p>
          <p className="text-md">Phone: +123 456 7890</p>
          <p className="text-md">Address: 123 Fashion Street, New York, NY</p>
        </div>

        <form className="contact-form flex flex-col items-center mt-8">
          <input type="text" placeholder="Your Name" className="input-field mb-4" />
          <input type="email" placeholder="Your Email" className="input-field mb-4" />
          <textarea placeholder="Your Message" className="input-field mb-4" rows="4"></textarea>
          <button type="submit" className="submit-button bg-black text-white px-6 py-3 rounded">Send Message</button>
        </form>
      </section>
        
      <Footer />

      <style jsx>{`
        .contact-section {
          max-width: 800px;
          margin: auto;
          border-radius: 8px;
        }

        .contact-info p {
          margin-bottom: 8px;
        }

        .contact-form .input-field {
          width: 100%;
          max-width: 400px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        .contact-form .submit-button {
          font-weight: bold;
          transition: background-color 0.3s;
        }

        .contact-form .submit-button:hover {
          background-color: #333;
        }
      `}</style>
    </>
  );
}
