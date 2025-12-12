// Keep only shared providers and metadata
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import RouteLoader from "@/components/RouteLoader";
import PreventZoom from "@/components/PreventZoom";
import { Laila } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <PreventZoom />
          <RouteLoader />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}