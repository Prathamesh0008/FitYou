// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-700">Fityou</p>
          <p className="mt-1">
            Smarter, safer weight management built around your health profile.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/faq" className="hover:text-slate-800">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-slate-800">
            Contact
          </Link>
          <span className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Fityou. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
