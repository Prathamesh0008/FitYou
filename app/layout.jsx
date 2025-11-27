import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import RouteLoader from "@/components/RouteLoader";
import PageTransition from "@/components/PageTransition";
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
    <html
      lang="en"
      suppressHydrationWarning
      className={laila.variable}     // ✅ FONT VARIABLE SET HERE
    >
      <body className="font-laila min-h-screen transition-colors"> {/* ✅ APPLY FONT HERE */}
        <ThemeProvider>
          <AuthProvider>
            <RouteLoader />
            <Navbar />

            <PageTransition>
              <main className="min-h-[80vh]">{children}</main>
            </PageTransition>

            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
