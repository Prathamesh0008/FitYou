// app/layout.jsx - UPDATED WITH BETTER PATH DETECTION
"use client"; // Add this at the top!

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import RouteLoader from "@/components/RouteLoader";
import { Laila } from "next/font/google";
import FloatingButton from "@/components/chatbot/FloatingButton";
import PreventZoom from "@/components/PreventZoom";
import { usePathname } from "next/navigation"; // Import this

// Import landing components
import LandingNavbar from "./landing/LandingNavbar";
import LandingFooter from "./landing/LandingFooter";

const laila = Laila({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-laila",
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current path
  const isLandingPage = pathname === '/landing'; // Check if it's landing page
  
  return (
    <html lang="en" suppressHydrationWarning className={laila.variable}>
      <head>
        <title>Fityou - Weight Loss Program</title>
        <meta name="description" content="Medical weight loss made simple" />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" 
        />
        <link rel="icon" href="/logo/FY.png" />
      </head>
      <body className="font-laila min-h-screen bg-white text-[#1A1A1A]">
        <AuthProvider>
          <PreventZoom />
          <RouteLoader />
          
          {/* Show LandingNavbar only on /landing, regular Navbar elsewhere */}
          {isLandingPage ? <LandingNavbar /> : <Navbar />}
          
          <main >
            {children}
          </main>
          
          {/* Show LandingFooter only on /landing, regular Footer elsewhere */}
          {isLandingPage ? <LandingFooter /> : <Footer />}
          
          <FloatingButton />
        </AuthProvider>
      </body>
    </html>
  );
}