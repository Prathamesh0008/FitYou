"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

export default function AdminSubmissionsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/");
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (!user || user.role !== "admin") return;
    async function fetchSubs() {
      const res = await fetch("/api/admin/submissions");
      const data = await res.json();
      setSubs(data.submissions || []);
    }
    fetchSubs();
  }, [user]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 text-xs">
      <h1 className="text-2xl font-bold mb-4">Eligibility submissions</h1>

      <div className="space-y-3">
        {subs.map((s) => (
          <div
            key={s.id}
            className="bg-white border rounded-2xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
          >
            <div>
              <p className="font-semibold">
                {s.userName}{" "}
                <span className="text-slate-500">({s.userEmail})</span>
              </p>
              <p className="text-slate-500">
                Age {s.age} · {s.heightCm} cm · {s.weightKg} kg · BMI {s.bmi}
              </p>
              <p className="text-slate-500 mt-1">
                Conditions: {s.conditions?.join(", ") || "None"}
              </p>
            </div>
            <div className="text-right">
              <p
                className={`font-semibold ${
                  s.eligible ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {s.eligible ? "Eligible" : "Not eligible"}
              </p>
              <p className="text-[11px] text-slate-500 mt-1">{s.notes}</p>
              <p className="text-[10px] text-slate-400 mt-1">
                {new Date(s.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}

        {subs.length === 0 && (
          <p className="text-slate-500 text-xs">No submissions yet.</p>
        )}
      </div>
    </main>
  );
}
