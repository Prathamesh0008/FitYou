"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

import {
  Compass,
  Cog,
  HelpCircle,
  FlaskRound,
  BookOpen,
  User2,
  Menu,
  X
} from "lucide-react";

// MENU ITEMS
const navLinks = [
  { href: "/program", label: "FitYou Programme", icon: Compass },
  { href: "/how-it-works", label: "How our service works", icon: Cog },
  { href: "/faq", label: "FAQs", icon: HelpCircle },
  { href: "/glp1-science", label: "Science of GLP-1", icon: FlaskRound },
  { href: "/health-guide", label: "Health guide", icon: BookOpen },
  // { href: "/program", label: "Program", icon: Cog },
  { href: "/pricing", label: "Pricing", icon: HelpCircle },
  { href: "/contact", label: "Contact", icon: BookOpen },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50  dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl 
            bg-gradient-to-tr from-sky-500 to-indigo-600 text-xs font-bold text-white shadow-md">
            FY
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900 dark:text-slate-50">Fityou</span>
            <span className="text-[11px] tracking-[0.15em] uppercase text-slate-500 dark:text-slate-400">
              Weight Management
            </span>
          </div>
        </Link>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">

          {/* CTA BUTTON */}
          <Link
            href="/quiz"
            className="hidden sm:block rounded-lg bg-orange-300/60 hover:bg-orange-300 
              px-4 py-1.5 text-sm font-semibold text-slate-900 transition">
            Do I qualify?
          </Link>

          {/* User Icon */}
          <Link href={user ? "/dashboard" : "/login"}>
            <User2 className="w-6 h-6 text-sky-800 dark:text-sky-300" />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md border border-slate-300 dark:border-slate-700">
            <Menu className="w-6 h-6 text-sky-800 dark:text-sky-300" />
          </button>
        </div>
      </nav>

      {/* SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-slate-900    dark:bg-slate-900 shadow-xl z-[999]
        transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-4 py-7  dark:border-slate-700">
          <span className="font-semibold text-slate-900 dark:text-slate-100">Menu</span>

          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col p-4 space-y-3 bg-slate-900">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition
                ${pathname === href
                  ? "bg-slate-900 dark:bg-sky-900/30 text-light-primary dark:text-sky-300"
                  : " dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-300"
                }`}
            >
              <Icon size={18} strokeWidth={1.6} />
              {label}
            </Link>
          ))}
        </div>

        {/* FOOTER BUTTONS INSIDE MENU */}
        <div className="mt-6 border-t  dark:border-slate-700 p-4 flex flex-col gap-3">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogout}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm text-white font-semibold">
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 text-sm font-semibold">
                Log in
              </Link>

              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="rounded-lg bg-sky-600 px-4 py-2 text-sm text-white font-semibold">
                Get started
              </Link>
            </>
          )}
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
        />
      )}
    </header>
  );
}
