"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Stethoscope,
  Search,
  Filter,
  FileText,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  User,
  Phone,
  MapPin,
  ClipboardList,
  Upload,
} from "lucide-react";

/* ---------------- CONSTANTS ---------------- */

const STATUS_TAGS = [
  "All",
  "Pending Doctor Review",
  "Approved",
  "Cancelled",
];

function statusBadgeClasses(status) {
  switch (status) {
    case "Pending Doctor Review":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    case "Approved":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "Cancelled":
      return "bg-rose-50 text-rose-700 border border-rose-200";
    default:
      return "bg-slate-50 text-slate-700 border border-slate-200";
  }
}

function riskBadgeClasses(risk) {
  switch (risk) {
    case "High":
      return "bg-rose-50 text-rose-700 border border-rose-200";
    case "Medium":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    default:
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
  }
}

/* ---------------- MAIN ---------------- */

export default function DoctorDashboardPage() {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [decisionOrder, setDecisionOrder] = useState(null);
  const [decisionStatus, setDecisionStatus] = useState("Approved");
  const [decisionNote, setDecisionNote] = useState("");
  const [rxFile, setRxFile] = useState(null);
  const [savingDecision, setSavingDecision] = useState(false);

  /* ---------------- LOAD ORDERS ---------------- */

  useEffect(() => {
    async function loadOrders() {
      const res = await fetch("/api/doctor/orders", { cache: "no-store" });
      const data = await res.json();
      if (data.success) setOrders(data.orders || []);
    }
    loadOrders();
  }, []);

  /* ---------------- FILTER ---------------- */

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        (order.orderId || "").toLowerCase().includes(q) ||
        (order.patientName || "").toLowerCase().includes(q) ||
        (order.phone || "").toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [orders, statusFilter, search]);

  /* ---------------- CLOUDINARY ---------------- */

  async function uploadToCloudinary(file) {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", "fityou_rx");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxgs3aq2w/auto/upload",
      { method: "POST", body: form }
    );
    const data = await res.json();
    if (!res.ok) throw new Error("Upload failed");
    return data.secure_url;
  }

  /* ---------------- DECISION ---------------- */

  const openDecisionModal = (order) => {
    setDecisionOrder(order);
    setDecisionStatus(
      order.status === "Pending Doctor Review" ? "Approved" : order.status
    );
    setDecisionNote(order.notes || "");
    setRxFile(null);
  };

  const saveDecision = async () => {
    if (!decisionOrder) return;

    try {
      setSavingDecision(true);

      let prescriptionUrl = decisionOrder.prescriptionUrl || "";
      if (rxFile) prescriptionUrl = await uploadToCloudinary(rxFile);

      await fetch("/api/doctor/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: decisionOrder.orderId,
          status: decisionStatus,
          notes: decisionNote,
          prescriptionUrl,
        }),
      });

      const refetch = await fetch("/api/doctor/orders", { cache: "no-store" });
      const refreshed = await refetch.json();
      if (refreshed.success) setOrders(refreshed.orders);

      setDecisionOrder(null);
    } finally {
      setSavingDecision(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-[#F3F6FB]">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="flex items-center gap-2 text-xl font-semibold">
            <Stethoscope className="text-emerald-600" />
            FitYou Doctor Console
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        {/* FILTER */}
        <div className="flex gap-2">
          {STATUS_TAGS.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1 text-xs rounded-full border ${
                statusFilter === s
                  ? "bg-slate-900 text-white"
                  : "bg-white"
              }`}
            >
              {s}
            </button>
          ))}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="ml-auto px-3 py-1 text-sm border rounded-full"
          />
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3 text-left">Order</th>
                <th className="px-4 py-3 text-left">Patient</th>
                <th className="px-4 py-3 text-left">Risk</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.orderId} className="border-t">
                  <td className="px-4 py-3 font-mono">{order.orderId}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{order.patientName}</div>
                    <div className="text-xs text-slate-500">{order.phone}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${riskBadgeClasses(
                        order.riskLevel
                      )}`}
                    >
                      {order.riskLevel}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${statusBadgeClasses(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="px-3 py-1 text-xs border rounded-full"
                    >
                      View Quiz
                    </button>
                    <button
                      onClick={() => openDecisionModal(order)}
                      className="px-3 py-1 text-xs bg-emerald-600 text-white rounded-full"
                    >
                      Decide
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* FULL QUIZ MODAL */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white max-w-3xl w-full rounded-xl p-5 max-h-[90vh] overflow-y-auto">
            <h3 className="font-semibold mb-3">
              {selectedOrder.patientName} · Full Questionnaire
            </h3>

            {/* 🔥 COMPLETE QUIZ DATA */}
            <pre className="bg-slate-100 rounded p-3 text-xs overflow-x-auto">
              {JSON.stringify(selectedOrder.quizData, null, 2)}
            </pre>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-1 text-sm border rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DECISION MODAL */}
      {decisionOrder && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-5 w-full max-w-md">
            <h3 className="font-semibold mb-3">
              {decisionOrder.patientName}
            </h3>

            <select
              value={decisionStatus}
              onChange={(e) => setDecisionStatus(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-3"
            >
              <option value="Approved">Approve</option>
              <option value="Cancelled">Cancel</option>
              <option value="Pending Doctor Review">Keep pending</option>
            </select>

            <textarea
              value={decisionNote}
              onChange={(e) => setDecisionNote(e.target.value)}
              placeholder="Doctor notes"
              className="w-full border rounded px-3 py-2 mb-3"
            />

            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={(e) => setRxFile(e.target.files?.[0] || null)}
              className="text-xs mb-3"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDecisionOrder(null)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveDecision}
                disabled={savingDecision}
                className="px-4 py-1 bg-emerald-600 text-white rounded"
              >
                {savingDecision ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
