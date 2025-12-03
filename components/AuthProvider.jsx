// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const fetchUser = async () => {
//     const res = await fetch("/api/auth/me");
//     const data = await res.json();
//     setUser(data.user);
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const logout = async () => {
//     await fetch("/api/auth/logout", { method: "POST" });
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }

// components/AuthProvider.jsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

// we'll store logged-in email here
const EMAIL_KEY = "fityou_email";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On first load, check localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(EMAIL_KEY);
    if (stored) {
      setUser({ email: stored });
    }

    setLoading(false);
  }, []);

  const login = (email) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(EMAIL_KEY, email);
    }
    setUser({ email });
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(EMAIL_KEY);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
