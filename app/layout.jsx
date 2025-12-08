import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import RouteLoader from "@/components/RouteLoader";
import PageTransition from "@/components/PageTransition";
import { Laila } from "next/font/google";
import FloatingButton from "@/components/chatbot/FloatingButton";
import PreventZoom from "@/components/PreventZoom";

export const metadata = {
  title: "Fityou",
  description: "Safer weight management with medical awareness.",
  icons: {
    icon: [
      { url: "/logo/FY.png", sizes: "32x32", type: "image/x-icon" },
      { url: "/logo/FY.png", sizes: "192x192", type: "image/png" },
      { url: "/logo/FY.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/logo/FY.png",
  },
};

// Load Laila font
const laila = Laila({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-laila",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={laila.variable}
    >
      <head>
        {/* Add only this meta tag */}
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" 
        />
      </head>
      <body
        className="
          font-laila 
          min-h-screen 
          bg-white 
          text-[#1A1A1A] 
          transition-all
        "
      >
        <AuthProvider>
          <PreventZoom />
          <RouteLoader />
          <Navbar />

          {/* <PageTransition> */}
            <main>
              {children}
            </main>
          {/* </PageTransition> */}
          <FloatingButton/>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}