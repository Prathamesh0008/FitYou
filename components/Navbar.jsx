"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/health-guide", label: "Health guide" },
  { href: "/glp1-science", label: "GLP-1 Science" },
  { href: "/program", label: "Program" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">

        {/* LEFT – LOGO */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-xs font-bold text-white shadow-md">
            FY
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Fityou
            </span>
            <span className="text-[11px] uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
              Weight Management
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  pathname === link.href
                    ? "text-sky-700 dark:text-sky-400"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-50"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-6 rounded-full bg-sky-500 dark:bg-sky-400" />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT – THEME + AUTH */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {!loading && (
              <>
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-xs font-medium text-sky-800 hover:bg-sky-100 dark:border-sky-900 dark:bg-sky-900/40 dark:text-sky-100 dark:hover:bg-sky-900/70"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-xs font-medium text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-50"
                    >
                      Log in
                    </Link>

                    <Link
                      href="/register"
                      className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-400"
                    >
                      Get started
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-100"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="space-y-1">
            <span className="block h-[2px] w-4 rounded-full bg-slate-700 dark:bg-slate-100" />
            <span className="block h-[2px] w-4 rounded-full bg-slate-700 dark:bg-slate-100" />
          </div>
        </button>
      </nav>

      {/* MOBILE NAV PANEL */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-sm">

            <div className="flex items-center justify-between">
              <ThemeToggle />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-1.5 ${
                  pathname === link.href
                    ? "bg-sky-50 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200"
                    : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {!loading && (
              <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-3 dark:border-slate-800">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setOpen(false)}
                      className="text-xs font-medium text-sky-700 dark:text-sky-300"
                    >
                      Dashboard
                    </Link>

                    <button
                      onClick={() => {
                        handleLogout();
                        setOpen(false);
                      }}
                      className="text-xs font-medium text-slate-700 dark:text-slate-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className="text-xs font-medium text-slate-700 dark:text-slate-200"
                    >
                      Log in
                    </Link>

                    <Link
                      href="/register"
                      onClick={() => setOpen(false)}
                      className="rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-white dark:bg-sky-500"
                    >
                      Get started
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
