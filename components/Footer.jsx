// components/Footer.jsx
"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        
        {/* TOP GRID */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          
          {/* COLUMN 1: BRAND */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">
              Fityou
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
              Smarter, medically-aware weight management — built around your
              health profile, not shortcuts.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-4 flex items-center gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    p-2 rounded-full border border-slate-300 dark:border-slate-700 
                    hover:bg-sky-100 dark:hover:bg-sky-900 transition
                  "
                >
                  <Icon className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: FITYOU MENU */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white">Explore</h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/aktive-programme" className="hover:text-sky-600">Aktive Programme</Link></li>
              <li><Link href="/how-it-works" className="hover:text-sky-600">How our service works</Link></li>
              <li><Link href="/glp1-science" className="hover:text-sky-600">Science of GLP-1</Link></li>
              <li><Link href="/health-guide" className="hover:text-sky-600">Health Guide</Link></li>
              <li><Link href="/faq" className="hover:text-sky-600">FAQs</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SUPPORT */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white">Support</h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/contact" className="hover:text-sky-600">Contact Us</Link></li>
              <li><Link href="/quiz" className="hover:text-sky-600">Eligibility quiz</Link></li>
              <li><Link href="/program" className="hover:text-sky-600">Fityou Program</Link></li>
              <li><Link href="/pricing" className="hover:text-sky-600">Pricing</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: LEGAL */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-white">Legal</h4>

            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/terms" className="hover:text-sky-600">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-sky-600">Privacy Policy</Link></li>
              <li><Link href="/safety" className="hover:text-sky-600">Safety Guidelines</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between">
          
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Fityou. All rights reserved.
          </p>

          <Link
            href="/quiz"
            className="
              mt-4 md:mt-0 rounded-full bg-sky-600 px-5 py-2 text-xs font-semibold text-white 
              shadow-sm hover:bg-sky-700 transition
              dark:bg-sky-500 dark:hover:bg-sky-400
            "
          >
            Do I qualify?
          </Link>

        </div>

      </div>
    </footer>
  );
}
