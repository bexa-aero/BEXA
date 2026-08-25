import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SponsorsFooter from "./SponsorsFooter";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      <SponsorsFooter />
      <Footer />
    </div>
  );
}
