// app/landing/layout.jsx
import LandingNavbar from "./LandingNavbar";
import LandingFooter from "./LandingFooter";
import FloatingButton from "@/components/chatbot/FloatingButton";

export default function LandingLayout({ children }) {
  return (
    <>
      {/* <LandingNavbar /> */}
      <main>{children}</main>
      {/* <LandingFooter /> */}
      <FloatingButton />
    </>
  );
}