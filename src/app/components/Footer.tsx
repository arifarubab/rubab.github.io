// src/app/components/Footer.js

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-6 text-center">
      <p className="text-gray-700 text-sm mb-4">&copy; {new Date().getFullYear()} ALLINONE. All rights reserved.</p>
      
      <ul className="flex justify-center space-x-4 mb-4">
        <li><Link href="/privacy" className="text-gray-700 hover:text-red-500">Privacy Policy</Link></li>
        <li><Link href="/terms" className="text-gray-700 hover:text-red-500">Terms of Service</Link></li>
        <li><Link href="/support" className="text-gray-700 hover:text-red-500">Support</Link></li>
      </ul>

      <div className="flex justify-center space-x-4">
        <a
          href="https://linkedin.com/rubab ayub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://facebook.com/rubab ayub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-700 hover:text-blue-700 transition-colors"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
