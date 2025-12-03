// "use client";

// import { useTheme } from "next-themes";
// import { useState, useEffect } from "react";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   if (!mounted) {
//     return (
//       <button className="px-4 py-1.5 rounded-full text-xs border bg-white dark:bg-slate-900">
//         …
//       </button>
//     );
//   }

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="px-4 py-1.5 rounded-full text-xs border bg-white 
//       dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700"
//     >
//       {theme === "dark" ? "Light ☀️" : "Dark 🌙"}
//     </button>
//   );
// }
