"use client";

import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/");
    }
  }, [loading, user, router]);

  if (loading || !user) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-sm text-slate-600">Loading...</p>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">Admin dashboard</h1>
      <p className="text-sm text-slate-600 mb-6">
        Manage users and eligibility quiz submissions.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <Link
          href="/admin/users"
          className="p-5 rounded-2xl border bg-white hover:shadow"
        >
          <p className="text-xs text-slate-500 mb-1">Users</p>
          <p className="font-semibold text-sm">View registered users</p>
        </Link>

        <Link
          href="/admin/submissions"
          className="p-5 rounded-2xl border bg-white hover:shadow"
        >
          <p className="text-xs text-slate-500 mb-1">Eligibility</p>
          <p className="font-semibold text-sm">View quiz submissions</p>
        </Link>
      </div>
    </main>
  );
}
