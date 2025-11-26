import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import RouteLoader from "@/components/RouteLoader";

export const metadata = {
  title: "Fityou",
  description: "Safer weight management with medical awareness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen transition-colors">

        <ThemeProvider>
          <AuthProvider>

            {/* GLOBAL ROUTE LOADER */}
            <RouteLoader />

            <Navbar />

            <main className="min-h-[80vh]">
              {children}
            </main>

            <Footer />

          </AuthProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
