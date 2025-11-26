"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";

export default function AdminUsersPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/");
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (!user || user.role !== "admin") return;
    async function fetchUsers() {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setUsers(data.users || []);
    }
    fetchUsers();
  }, [user]);

  return (
    <main className="max-w-5xl mx-auto px-6 py-10 text-xs">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-xs">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-3 py-2 border">Name</th>
              <th className="px-3 py-2 border">Email</th>
              <th className="px-3 py-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="px-3 py-2 border">{u.name}</td>
                <td className="px-3 py-2 border">{u.email}</td>
                <td className="px-3 py-2 border">{u.role}</td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={3} className="px-3 py-3 text-center text-slate-500">
                  No users yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
