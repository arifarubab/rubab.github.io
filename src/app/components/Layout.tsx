// components/Layout.tsx (or .js if you're not using TypeScript)
import React, { ReactNode } from 'react'; // Import ReactNode
import Header from '@/app/components/Header'; // Adjust the import path as necessary
import Footer from '@/app/components/Footer'; // Adjust the import path as necessary


interface LayoutProps {
  children: ReactNode; // Define the type for children
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx>{`
        main {
          padding: 20px; // Add any main styling here
        }
      `}</style>
    </>
  );
};

export default Layout;
