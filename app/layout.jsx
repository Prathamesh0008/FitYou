import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import RouteLoader from "@/components/RouteLoader";
import PageTransition from "@/components/PageTransition";
import ScrollTopButton from "@/components/ScrollTopButton"; // <-- Add this
import { Laila } from "next/font/google";

export const metadata = {
  title: "Fityou",
  description: "Safer weight management with medical awareness.",
};

const laila = Laila({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-laila",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={laila.variable}>
      <body className="font-laila min-h-screen bg-white text-[#1A1A1A] transition-all">
        <AuthProvider>
          <RouteLoader />
          <Navbar />

          <main>{children}</main>

          {/* Floating Scroll To Top Button */}
          <ScrollTopButton />

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
