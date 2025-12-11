"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOAD SESSION ON APP START
  useEffect(() => {
    refreshUser();
  }, []);

  // ----- UNIVERSAL REFRESH FUNCTION -----
  const refreshUser = async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      const data = await res.json();

      setUser(data.user || null);
    } catch (err) {
      console.error("Auth load error:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // LOGIN → refresh session after OTP verification
  const login = async () => {
    await refreshUser();
  };

  // LOGOUT → remove cookie + clear state
  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (err) {
      console.error("Logout error:", err);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, refreshUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
