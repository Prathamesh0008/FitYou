"use client";

import { useState, useMemo, useEffect } from "react";
import {
  PackageSearch,
  CheckCircle2,
  Clock,
  Truck,
  Search,
  Filter,
  MoreHorizontal,
  FileText,
  Stethoscope,
} from "lucide-react";

function statusBadgeClasses(status) {
  switch (status) {
    case "Pending Doctor Review":
      return "bg-amber-50 text-amber-700 border border-amber-200";
    case "Approved":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "Shipped":
      return "bg-blue-50 text-blue-700 border border-blue-200";
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
    case "Low":
    default:
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
  }
}

const STATUS_TAGS = [
  "All",
  "Pending Doctor Review",
  "Approved",
  "Shipped",
  "Cancelled",
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 MODALS
  const [prescriptionOrder, setPrescriptionOrder] = useState(null);
  const [reviewOrder, setReviewOrder] = useState(null);
  const [reviewStatus, setReviewStatus] = useState("Approved");
  const [reviewNote, setReviewNote] = useState("");

  // ⭐ FETCH LIVE ORDERS FROM API
  useEffect(() => {
    async function loadOrders() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("/api/admin/orders", { cache: "no-store" });
        const data = await res.json();

        if (!res.ok || !data.success) {
          setError(data.message || "Failed to load orders");
          setOrders([]);
          return;
        }

        setOrders(data.orders || []);
      } catch (err) {
        console.error("❌ Admin orders fetch error:", err);
        setError("Network error while loading orders");
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  // SUMMARY STATS
  const stats = useMemo(() => {
    const total = orders.length;
    const pending = orders.filter((o) => o.status === "Pending Doctor Review")
      .length;
    const approved = orders.filter((o) => o.status === "Approved").length;
    const shipped = orders.filter((o) => o.status === "Shipped").length;
    return { total, pending, approved, shipped };
  }, [orders]);

  // FILTER + SEARCH
  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      const q = search.toLowerCase().trim();
      const name =
        order.patientName ||
        order.quizData?.name ||
        order.quizData?.fullName ||
        "";
      const phone =
        order.phone || order.quizData?.phone || order.quizData?.mobile || "";
      const id = order.orderId || "";

      const productLabel =
        order.productType === "tablet"
          ? "Tablet"
          : order.productType === "injection"
          ? "Injection"
          : "FitYou Programme";

      const matchesSearch =
        !q ||
        id.toLowerCase().includes(q) ||
        name.toLowerCase().includes(q) ||
        phone.toLowerCase().includes(q) ||
        productLabel.toLowerCase().includes(q);

      return matchesStatus && matchesSearch;
    });
  }, [orders, statusFilter, search]);

  const handleStatusChange = async (id, newStatus) => {
    // UI मध्ये लगेच update
    setOrders((prev) =>
      prev.map((o) => (o.orderId === id ? { ...o, status: newStatus } : o))
    );

    try {
      await fetch("/api/admin/update-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId: id, status: newStatus }),
      });
    } catch (err) {
      console.error("❌ admin status update error:", err);
    }
  };

  const openReviewModal = (order) => {
    setReviewOrder(order);
    setReviewStatus(
      order.status === "Pending Doctor Review" ? "Approved" : order.status
    );
    setReviewNote(order.notes || "");
  };

  const saveReviewLocal = async () => {
    if (!reviewOrder) return;

    const id = reviewOrder.id;

    // UI मध्ये
    setOrders((prev) =>
      prev.map((o) =>
        o.orderId === id ? { ...o, status: reviewStatus, notes: reviewNote } : o
      )
    );
    setReviewOrder(null);

    try {
      await fetch("/api/admin/update-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: id,
          status: reviewStatus,
          notes: reviewNote,
        }),
      });
    } catch (err) {
      console.error("❌ admin review save error:", err);
    }
  };

  const downloadPrescription = (url) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.download = "prescription";
    link.click();
  };

  const isPdf = (url) => {
    if (!url) return false;
    return url.toLowerCase().includes(".pdf") || url.toLowerCase().includes("application/pdf");
  };

  return (
    <div className="min-h-screen bg-[#F3F6FB]">
      {/* TOP BAR */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              ADMIN · ORDERS
            </p>
            <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
              FitYou Order Console
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs">
            <span className="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 border border-emerald-200">
              {stats.total} total orders
            </span>
            <span className="rounded-full bg-amber-50 text-amber-700 px-3 py-1 border border-amber-200">
              {stats.pending} waiting doctor review
            </span>
          </div>
        </div>
      </header>

      {loading && (
        <p className="text-center text-xs text-slate-500 mb-2">
          Loading latest orders…
        </p>
      )}
      {error && (
        <p className="text-center text-xs text-rose-500 mb-2">{error}</p>
      )}

      {/* CONTENT */}
      <main className="mx-auto max-w-6xl px-4 py-6 space-y-6">
        {/* SUMMARY CARDS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SummaryCard
            icon={PackageSearch}
            label="Total orders"
            value={stats.total}
            sub="All time"
          />
          <SummaryCard
            icon={Clock}
            label="Pending review"
            value={stats.pending}
            sub="Doctor decision needed"
            theme="amber"
          />
          <SummaryCard
            icon={CheckCircle2}
            label="Approved"
            value={stats.approved}
            sub="Ready to process"
            theme="emerald"
          />
          <SummaryCard
            icon={Truck}
            label="Shipped"
            value={stats.shipped}
            sub="On the way"
            theme="blue"
          />
        </section>

        {/* MAIN TABLE CARD */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 md:p-5 space-y-4">
          {/* TOP FILTERS */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* STATUS FILTER TAGS */}
            <div className="flex flex-wrap gap-2">
              {STATUS_TAGS.map((s) => {
                const isActive = statusFilter === s;
                return (
                  <button
                    key={s}
                    onClick={() => setStatusFilter(s)}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs md:text-[13px] border transition ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white"
                    }`}
                  >
                    {s === "All" && <Filter size={14} />}
                    {s}
                  </button>
                );
              })}
            </div>

            {/* SEARCH */}
            <div className="relative w-full md:w-72">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, phone, ID..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 px-9 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
            </div>
          </div>

          {/* LOADING / ERROR */}
          {loading && (
            <p className="text-center text-sm text-slate-500 py-6">
              Loading orders...
            </p>
          )}
          {error && !loading && (
            <p className="text-center text-sm text-rose-500 py-6">{error}</p>
          )}

          {!loading && !error && (
            <div className="mt-3">
              {/* Desktop table */}
              <div className="hidden md:block rounded-2xl border border-slate-100 overflow-hidden bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-slate-50/80 border-b border-slate-100">
                    <tr className="text-xs text-slate-500 uppercase tracking-[0.16em]">
                      <th className="px-4 py-3 text-left">Order</th>
                      <th className="px-4 py-3 text-left">Patient</th>
                      <th className="px-4 py-3 text-left">Product</th>
                      <th className="px-4 py-3 text-left">Risk</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-right">Amount</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.length === 0 && (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-8 text-center text-slate-400 text-sm"
                        >
                          No orders match this filter.
                        </td>
                      </tr>
                    )}

                    {filteredOrders.map((order) => {
                      const created = order.createdAt
                        ? new Date(order.createdAt)
                        : null;

                      const productLabel =
                        order.productType === "tablet"
                          ? "Tablet"
                          : order.productType === "injection"
                          ? "Injection"
                          : "FitYou Programme";

                      const patientName =
                        order.patientName ||
                        order.quizData?.name ||
                        order.quizData?.fullName ||
                        "Unknown";

                      const patientPhone =
                        order.phone ||
                        order.quizData?.phone ||
                        order.quizData?.mobile ||
                        "";

                      const hasRx = !!(order.prescriptionUrl && order.prescriptionUrl.trim().length > 0);

                      return (
                        <tr
                          key={order.orderId}
                          className="border-b border-slate-50 hover:bg-slate-50/60 transition"
                        >
                          {/* ORDER ID + CREATED DATE */}
                          <td className="px-4 py-3 align-top">
                            <div className="font-mono text-xs text-slate-900">
                              {order.orderId}
                            </div>
                            {created && (
                              <div className="text-[11px] text-slate-500">
                                {created.toLocaleString("en-IN", {
                                  dateStyle: "medium",
                                  timeStyle: "short",
                                })}
                              </div>
                            )}
                          </td>

                          {/* PATIENT */}
                          <td className="px-4 py-3 align-top">
                            <div className="font-medium text-slate-900">
                              {patientName}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {patientPhone}
                            </div>
                          </td>

                          {/* PRODUCT */}
                          <td className="px-4 py-3 align-top">
                            <div className="text-slate-900 text-sm">
                              {productLabel}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {order.productType === "tablet"
                                ? "Monthly tablet plan"
                                : order.productType === "injection"
                                ? "Injection programme"
                                : ""}
                            </div>
                            {order.notes && (
                              <div className="mt-1 text-[11px] text-slate-500 line-clamp-1">
                                🩺 {order.notes}
                              </div>
                            )}
                          </td>

                          {/* RISK */}
                          <td className="px-4 py-3 align-top">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${riskBadgeClasses(
                                order.riskLevel
                              )}`}
                            >
                              {order.riskLevel} risk
                            </span>
                          </td>

                          {/* STATUS */}
                          <td className="px-4 py-3 align-top">
                            <div
                              className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium ${statusBadgeClasses(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </div>
                          </td>

                          {/* AMOUNT */}
                          <td className="px-4 py-3 align-top text-right">
                            <div className="font-semibold text-slate-900">
                              ₹{(order.amount || 0).toLocaleString("en-IN")}
                            </div>
                          </td>

                          {/* ACTIONS */}
                          <td className="px-4 py-3 align-top text-right">
                            <div className="flex flex-col items-end gap-2">
                              <div className="flex gap-2">
                                {/* ✅ FIXED RX BUTTON */}
                                <button
                                  disabled={!hasRx}
                                  onClick={() => setPrescriptionOrder(order)}
                                  className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1.5 text-[11px] ${
                                    hasRx
                                      ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                                      : "border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed"
                                  }`}
                                >
                                  <FileText size={12} />
                                  Rx
                                </button>

                                <button
                                  onClick={() => openReviewModal(order)}
                                  className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1.5 text-[11px] text-emerald-700 hover:bg-emerald-100"
                                >
                                  <Stethoscope size={12} />
                                  Review
                                </button>
                              </div>

                              <div className="flex items-center justify-end gap-2">
                                <select
                                  value={order.status}
                                  onChange={(e) =>
                                    handleStatusChange(
                                      order.orderId,
                                      e.target.value
                                    )
                                  }
                                  className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900/10"
                                >
                                  <option value="Pending Doctor Review">
                                    Pending review
                                  </option>
                                  <option value="Approved">Approved</option>
                                  <option value="Shipped">Shipped</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>

                                <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-1.5 text-slate-500 hover:bg-slate-100">
                                  <MoreHorizontal size={16} />
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile cards */}
              <div className="space-y-3 md:hidden">
                {filteredOrders.length === 0 && (
                  <p className="text-center text-xs text-slate-400 py-6">
                    No orders match this filter.
                  </p>
                )}

                {filteredOrders.map((order) => {
                  const created = order.createdAt ? new Date(order.createdAt) : null;

                  const productLabel =
                    order.productType === "tablet"
                      ? "FitYou GLP-1 Tablet"
                      : order.productType === "injection"
                      ? "FitYou GLP-1 Injection"
                      : "FitYou Programme";

                  const patientName =
                    order.patientName ||
                    order.quizData?.name ||
                    order.quizData?.fullName ||
                    "Unknown";

                  const patientPhone =
                    order.phone ||
                    order.quizData?.phone ||
                    order.quizData?.mobile ||
                    "";

                  const hasRx = !!(order.prescriptionUrl && order.prescriptionUrl.trim().length > 0);

                  return (
                    <div
                      key={order.orderId}
                      className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-[11px] text-slate-500">
                            {order.orderId}
                          </p>
                          <p className="text-sm font-semibold text-slate-900">
                            {patientName}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {patientPhone}
                          </p>
                          {created && (
                            <p className="text-[11px] text-slate-400 mt-1">
                              {created.toLocaleString("en-IN", {
                                dateStyle: "medium",
                                timeStyle: "short",
                              })}
                            </p>
                          )}
                        </div>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-medium ${statusBadgeClasses(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1 text-xs text-slate-600">
                        <p className="font-medium text-slate-900">
                          {productLabel}
                        </p>
                        <p className="text-slate-500">
                          {order.productType === "tablet"
                            ? "Monthly tablet plan"
                            : order.productType === "injection"
                            ? "Injection programme"
                            : ""}
                        </p>
                        <p>
                          <span className="font-medium">Amount: </span>₹
                          {(order.amount || 0).toLocaleString("en-IN")}
                        </p>
                        {order.riskLevel && (
                          <p>
                            <span className="font-medium">Risk: </span>
                            {order.riskLevel}
                          </p>
                        )}
                        {order.notes && (
                          <p className="text-[11px] text-slate-500">
                            🩺 {order.notes}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {/* ✅ FIXED RX BUTTON (MOBILE) */}
                        <button
                          disabled={!hasRx}
                          onClick={() => setPrescriptionOrder(order)}
                          className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-[11px] ${
                            hasRx
                              ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                              : "border-slate-100 bg-slate-50 text-slate-400 cursor-not-allowed"
                          }`}
                        >
                          <FileText size={12} />
                          View Rx
                        </button>

                        <button
                          onClick={() => openReviewModal(order)}
                          className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] text-emerald-700 hover:bg-emerald-100"
                        >
                          <Stethoscope size={12} />
                          Review
                        </button>

                        <div className="flex-1 flex items-center justify-end gap-2">
                          <select
                            value={order.status}
                            onChange={(e) =>
                              handleStatusChange(order.orderId, e.target.value)
                            }
                            className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] text-slate-700 focus:outline-none focus:ring-1 focus:ring-slate-900/10"
                          >
                            <option value="Pending Doctor Review">
                              Pending review
                            </option>
                            <option value="Approved">Approved</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>

                          <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-1.5 text-slate-500 hover:bg-slate-100">
                            <MoreHorizontal size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      </main>

      {/* PRESCRIPTION MODAL */}
      {prescriptionOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-4 md:p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  PRESCRIPTION
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {(prescriptionOrder.patientName ||
                    prescriptionOrder.quizData?.name ||
                    prescriptionOrder.quizData?.fullName ||
                    "Patient") +
                    " · " +
                    (prescriptionOrder.orderId || "")}
                </p>
              </div>
              <button
                onClick={() => setPrescriptionOrder(null)}
                className="text-slate-500 hover:text-slate-800 text-sm"
              >
                ✕
              </button>
            </div>

            <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 mb-4">
              {/* ✅ PDF SUPPORT */}
              {isPdf(prescriptionOrder.prescriptionUrl) ? (
                <iframe
                  src={prescriptionOrder.prescriptionUrl}
                  className="w-full h-[420px]"
                  title="Prescription PDF"
                />
              ) : (
                <img
                  src={prescriptionOrder.prescriptionUrl}
                  alt="Prescription"
                  className="w-full max-h-[420px] object-contain bg-slate-900/5"
                />
              )}
            </div>

            <div className="flex justify-between items-center gap-3 text-xs">
              <p className="text-[11px] text-slate-500">
                Preview only. Uploaded by doctor/patient.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    downloadPrescription(prescriptionOrder.prescriptionUrl)
                  }
                  className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-white px-3 py-1.5 text-[11px] hover:bg-black"
                >
                  ⬇ Download
                </button>
                <button
                  onClick={() => setPrescriptionOrder(null)}
                  className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1.5 text-[11px] text-slate-700 hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DOCTOR REVIEW MODAL */}
      {reviewOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  DOCTOR REVIEW
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  {(reviewOrder.patientName ||
                    reviewOrder.quizData?.name ||
                    reviewOrder.quizData?.fullName ||
                    "Patient") +
                    " · " +
                    (reviewOrder.orderId || "")}
                </p>
              </div>
              <button
                onClick={() => setReviewOrder(null)}
                className="text-slate-500 hover:text-slate-800 text-sm"
              >
                ✕
              </button>
            </div>

            <label className="text-[12px] font-medium text-slate-700">
              Status
            </label>
            <select
              value={reviewStatus}
              onChange={(e) => setReviewStatus(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            >
              <option value="Approved">Approve</option>
              <option value="Cancelled">Cancel</option>
              <option value="Pending Doctor Review">Keep pending</option>
            </select>

            <label className="mt-4 text-[12px] font-medium text-slate-700 block">
              Doctor notes
            </label>
            <textarea
              rows={3}
              value={reviewNote}
              onChange={(e) => setReviewNote(e.target.value)}
              placeholder="Write short clinical reasoning, eligibility notes, etc."
              className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
            />

            <div className="mt-5 flex justify-end gap-2 text-xs">
              <button
                onClick={() => setReviewOrder(null)}
                className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1.5 text-[11px] text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={saveReviewLocal}
                className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-emerald-700"
              >
                Save decision (local)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- SMALL COMPONENT ---------------- */

function SummaryCard({ icon: Icon, label, value, sub, theme = "slate" }) {
  const themeClasses = {
    slate: {
      ring: "ring-slate-100",
      iconBg: "bg-slate-900 text-slate-50",
      label: "text-slate-500",
      value: "text-slate-900",
      sub: "text-slate-400",
    },
    amber: {
      ring: "ring-amber-100",
      iconBg: "bg-amber-500 text-amber-50",
      label: "text-amber-700",
      value: "text-amber-900",
      sub: "text-amber-500",
    },
    emerald: {
      ring: "ring-emerald-100",
      iconBg: "bg-emerald-500 text-emerald-50",
      label: "text-emerald-700",
      value: "text-emerald-900",
      sub: "text-emerald-500",
    },
    blue: {
      ring: "ring-blue-100",
      iconBg: "bg-blue-500 text-blue-50",
      label: "text-blue-700",
      value: "text-blue-900",
      sub: "text-blue-500",
    },
  }[theme];

  return (
    <div
      className={`rounded-2xl bg-white border border-slate-100 shadow-sm ring-1 ${themeClasses.ring} px-3.5 py-3 flex items-center gap-3`}
    >
      <div
        className={`h-9 w-9 rounded-xl flex items-center justify-center ${themeClasses.iconBg}`}
      >
        <Icon size={18} />
      </div>
      <div>
        <p className={`text-[11px] font-medium ${themeClasses.label}`}>
          {label}
        </p>
        <p className={`text-lg font-semibold leading-tight ${themeClasses.value}`}>
          {value}
        </p>
        <p className={`text-[10px] mt-0.5 ${themeClasses.sub}`}>{sub}</p>
      </div>
    </div>
  );
}
