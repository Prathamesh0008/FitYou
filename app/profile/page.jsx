// app/profile/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import EmailOtpModal from "./EmailOtpModal";

import {
  User,
  Package,
  CheckCircle,
  Image,
  MessageCircle,
  Stethoscope,
  Bell,
  MapPin,
  Gift,
  LogOut,
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const [activeTab, setActiveTab] = useState("personal");
  const [profile, setProfile] = useState(null);

  // For email verification flow
  const [newEmail, setNewEmail] = useState("");
  const [emailOtpOpen, setEmailOtpOpen] = useState(false);

  // Keep newEmail in sync with profile.email
  useEffect(() => {
    if (profile?.email) setNewEmail(profile.email);
  }, [profile]);

  // Allow navbar slide-in menu to switch profile tabs
  useEffect(() => {
    const handler = (e) => {
      setActiveTab(e.detail);
    };
    window.addEventListener("profile-tab-change", handler);
    return () => window.removeEventListener("profile-tab-change", handler);
  }, []);

  // Seed profile from logged-in user (DB)
  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    }

    setProfile((prev) => {
      if (prev) return prev; // don't overwrite edits

      return {
        email: user.email || "",
        name: user.name || "",
        phone: user.phone || "",
        dob: user.dob || "",
        address:
          user.address || {
            line1: "",
            line2: "",
            city: "",
            state: "",
            postalCode: "",
          },

        // Frontend-only dummy data (NOT in DB)
        shipmentsUpcoming: [
          { id: "FTY-1001", date: "05 Dec 2025", status: "Preparing" },
          { id: "FTY-1002", date: "20 Dec 2025", status: "Scheduled" },
        ],
        shipmentsCompleted: [
          { id: "FTY-0981", date: "10 Nov 2025", status: "Delivered" },
        ],
        notifications: {
          emailUpdates: true,
          smsUpdates: false,
        },
      };
    });
  }, [user, router]);

  const updateProfile = (patch) => {
    setProfile((prev) => ({ ...prev, ...patch }));
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#F5FAFD] flex items-center justify-center">
        <p className="text-[#375C7A]">Loading your profile…</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#F5FAFD] py-10">
        <h1 className="text-center text-2xl font-semibold text-[#0D4F8B] mb-10">
          Personal details
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 px-6">
          {/* LEFT SIDEBAR */}
          <div className="hidden md:block md:col-span-3">
            <SidebarItem
              icon={<Package size={18} />}
              label="Upcoming shipment"
              active={activeTab === "upcoming"}
              onClick={() => setActiveTab("upcoming")}
            />
            <SidebarItem
              icon={<CheckCircle size={18} />}
              label="Completed shipments"
              active={activeTab === "completed"}
              onClick={() => setActiveTab("completed")}
            />
            <SidebarItem
              icon={<Image size={18} />}
              label="Weight loss diary + images"
              active={activeTab === "diary"}
              onClick={() => setActiveTab("diary")}
            />
            <SidebarItem
              icon={<MessageCircle size={18} />}
              label="Message centre"
              active={activeTab === "messages"}
              onClick={() => setActiveTab("messages")}
            />
            <SidebarItem
              icon={<Stethoscope size={18} />}
              label="Medical consultation"
              active={activeTab === "consultation"}
              onClick={() => setActiveTab("consultation")}
            />
            <SidebarItem
              icon={<Gift size={18} />}
              label="My subscription"
              active={activeTab === "subscription"}
              onClick={() => setActiveTab("subscription")}
            />
            <SidebarItem
              icon={<Gift size={18} />}
              label="My membership benefits"
              active={activeTab === "benefits"}
              onClick={() => setActiveTab("benefits")}
            />
            <SidebarItem
              icon={<User size={18} />}
              label="Personal details"
              active={activeTab === "personal"}
              onClick={() => setActiveTab("personal")}
            />
            <SidebarItem
              icon={<MapPin size={18} />}
              label="Delivery address"
              active={activeTab === "address"}
              onClick={() => setActiveTab("address")}
            />
            <SidebarItem
              icon={<Bell size={18} />}
              label="Notifications"
              active={activeTab === "notifications"}
              onClick={() => setActiveTab("notifications")}
            />

            {/* LOG OUT */}
            <SidebarItem
              icon={<LogOut size={18} />}
              label="Log out"
              logout
              onClick={() => {
                logout();
                router.push("/");
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-12 md:col-span-9">
            <div className="bg-white rounded-xl shadow p-8 min-h-[260px] mr-5">
              {activeTab === "personal" && (
                <PersonalDetailsCard
                  profile={profile}
                  updateProfile={updateProfile}
                  newEmail={newEmail}
                  setNewEmail={setNewEmail}
                  setEmailOtpOpen={setEmailOtpOpen}
                />
              )}

              {activeTab === "address" && (
                <AddressCard profile={profile} updateProfile={updateProfile} />
              )}

              {activeTab === "upcoming" && (
                <ShipmentsCard
                  title="Upcoming shipments"
                  shipments={profile.shipmentsUpcoming}
                />
              )}

              {activeTab === "completed" && (
                <ShipmentsCard
                  title="Completed shipments"
                  shipments={profile.shipmentsCompleted}
                />
              )}

              {activeTab === "notifications" && (
                <NotificationsCard
                  profile={profile}
                  updateProfile={updateProfile}
                />
              )}

              {activeTab === "subscription" && (
                <PlaceholderCard title="My subscription" />
              )}
              {activeTab === "benefits" && (
                <PlaceholderCard title="My membership benefits" />
              )}
              {activeTab === "diary" && (
                <PlaceholderCard title="Weight loss diary + images" />
              )}
              {activeTab === "messages" && (
                <PlaceholderCard title="Message centre" />
              )}
              {activeTab === "consultation" && (
                <PlaceholderCard title="Medical consultation" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* EMAIL OTP MODAL */}
<EmailOtpModal
  open={emailOtpOpen}
  email={newEmail}          // MUST SEND EMAIL
  onClose={() => setEmailOtpOpen(false)}
  onVerified={(verifiedEmail) => {
    updateProfile({ email: verifiedEmail });
    setNewEmail(verifiedEmail);
  }}
/>

    </>
  );
}

/* ----------------- SMALL COMPONENTS ----------------- */

function SidebarItem({ icon, label, active, logout, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-[14px]
        ${
          active
            ? "bg-white shadow text-[#0D4F8B]"
            : logout
            ? "text-red-500 hover:bg-red-50"
            : "text-[#375C7A] hover:bg-white"
        }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}

function PersonalDetailsCard({
  profile,
  updateProfile,
  newEmail,
  setNewEmail,
  setEmailOtpOpen,
}) {
  const [saving, setSaving] = useState(false);
  const [dobPickerOpen, setDobPickerOpen] = useState(false);
  const { login } = useAuth();

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: profile.name,
          phone: profile.phone,
          dob: profile.dob,
          address: profile.address,
        }),
      });

      console.log("PROFILE SAVE STATUS", res.status);

      const data = await res.json();
      console.log("PROFILE SAVE DATA", data);

      if (data.success) {
        login(data.user);
        updateProfile({
          name: data.user.name,
          phone: data.user.phone,
          dob: data.user.dob,
          address: data.user.address,
        });
      } else {
        alert(data.error || "Failed to save profile");
      }
    } catch (err) {
      console.error("PROFILE SAVE ERROR:", err);
      alert("Something went wrong while saving");
    } finally {
      setSaving(false);
    }
  };

  const handleEmailVerification = async () => {
    if (!newEmail || !newEmail.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    const res = await fetch("/api/email/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newEmail }),
    });

    const data = await res.json();

    if (data.success) {
      // store for safety if you want, but not required
      localStorage.setItem("pending_email", newEmail);
      setEmailOtpOpen(true);
    } else {
      alert(data.error || "Failed to send OTP");
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
        Your account
      </h2>

      <div className="space-y-4 text-[15px]">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#7A8BA4] mb-1">
              Name
            </label>
            <input
              value={profile.name}
              onChange={(e) => updateProfile({ name: e.target.value })}
              className="w-full border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-[#7A8BA4] mb-1">
              Mobile number
            </label>
            <input
              value={profile.phone}
              onChange={(e) => updateProfile({ phone: e.target.value })}
              className="w-full border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* EMAIL + VERIFY BUTTON */}
          <div>
            <label className="block text-xs uppercase text-[#7A8BA4] mb-1">
              Email
            </label>
            <div className="flex gap-2">
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm"
              />
              <button
                onClick={handleEmailVerification}
                className="px-3 py-2 bg-[#0D4F8B] text-white rounded-lg text-sm"
              >
                Verify
              </button>
            </div>
          </div>

          {/* DOB PICKER */}
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#7A8BA4] mb-1">
              Date of birth
            </label>

            <button
              onClick={() => setDobPickerOpen(true)}
              className="w-full border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm text-left
               text-[#1A1A1A] bg-white focus:outline-none focus:ring-2 
               focus:ring-[#0D4F8B]/40"
            >
              {profile.dob ? profile.dob : "Select date"}
            </button>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-[#0D4F8B] text-white text-sm font-medium hover:bg-[#0b3764]"
        >
          {saving ? "Saving..." : "Save changes"}
        </button>

        {dobPickerOpen && (
          <DobCalendar
            currentDate={profile.dob}
            onSelect={(date) => {
              updateProfile({ dob: date });
              setDobPickerOpen(false);
            }}
            onClose={() => setDobPickerOpen(false)}
          />
        )}
      </div>
    </>
  );
}

function AddressCard({ profile, updateProfile }) {
  const addr = profile.address || {};
  const [saving, setSaving] = useState(false);
  const { login } = useAuth();

  const setAddress = (patch) =>
    updateProfile({ address: { ...addr, ...patch } });

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: profile.name,
          phone: profile.phone,
          dob: profile.dob,
          address: profile.address,
        }),
      });

      console.log("PROFILE SAVE STATUS", res.status);

      const data = await res.json();
      console.log("PROFILE SAVE DATA", data);

      if (data.success && data.user) {
        login(data.user);
        updateProfile({
          name: data.user.name,
          phone: data.user.phone,
          dob: data.user.dob,
          address: data.user.address,
        });
      } else {
        alert(data.error || "Failed to save profile");
      }
    } catch (err) {
      console.error("PROFILE SAVE ERROR:", err);
      alert("Something went wrong while saving");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
        Delivery address
      </h2>

      <div className="space-y-4 text-[15px]">
        <input
          placeholder="Address line 1"
          value={addr.line1}
          onChange={(e) => setAddress({ line1: e.target.value })}
          className="w-full border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
        />
        <input
          placeholder="Address line 2"
          value={addr.line2}
          onChange={(e) => setAddress({ line2: e.target.value })}
          className="w-full border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
        />

        <div className="grid md:grid-cols-3 gap-4">
          <input
            placeholder="City"
            value={addr.city}
            onChange={(e) => setAddress({ city: e.target.value })}
            className="border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
          />
          <input
            placeholder="State"
            value={addr.state}
            onChange={(e) => setAddress({ state: e.target.value })}
            className="border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
          />
          <input
            placeholder="Postcode"
            value={addr.postalCode}
            onChange={(e) => setAddress({ postalCode: e.target.value })}
            className="border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
          />
        </div>

        <p className="text-xs text-[#7A8BA4]">
          Your address will be used for future shipments and communication.
        </p>

        <button
          onClick={handleSave}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-[#0D4F8B] text-white text-sm font-medium hover:bg-[#0b3764]"
        >
          {saving ? "Saving..." : "Save address"}
        </button>
      </div>
    </>
  );
}

function ShipmentsCard({ title, shipments }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">{title}</h2>
      {shipments.length === 0 ? (
        <p className="text-[14px] text-[#7A8BA4]">No records found yet.</p>
      ) : (
        <div className="space-y-3">
          {shipments.map((s) => (
            <div
              key={s.id}
              className="border border-[#E5EDF5] rounded-lg px-4 py-3 flex justify-between text-[14px]"
            >
              <div>
                <div className="font-medium text-[#0D4F8B]">{s.id}</div>
                <div className="text-[#7A8BA4]">{s.date}</div>
              </div>
              <div className="text-[#0D4F8B] font-semibold">{s.status}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function NotificationsCard({ profile, updateProfile }) {
  const notif = profile.notifications || {};

  return (
    <>
      <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">
        Notifications
      </h2>

      <div className="space-y-3 text-[14px]">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={!!notif.emailUpdates}
            onChange={(e) =>
              updateProfile({
                notifications: {
                  ...notif,
                  emailUpdates: e.target.checked,
                },
              })
            }
          />
          <span>Email updates about your programme & shipments</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={!!notif.smsUpdates}
            onChange={(e) =>
              updateProfile({
                notifications: {
                  ...notif,
                  smsUpdates: e.target.checked,
                },
              })
            }
          />
          <span>SMS reminders about injections & appointments</span>
        </label>
      </div>
    </>
  );
}

function PlaceholderCard({ title }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">{title}</h2>
      <p className="text-[14px] text-[#7A8BA4] leading-relaxed">
        This section is a placeholder. You can later connect it to your backend
        (e.g., orders, diary images, consultations) while keeping the same UI
        layout.
      </p>
    </>
  );
}

// Simple DOB calendar (same as your version, just reused)
function DobCalendar({ currentDate, onSelect, onClose }) {
  const today = new Date();
  const initial = currentDate ? new Date(currentDate) : new Date(1990, 0, 1);

  const [month, setMonth] = useState(initial.getMonth());
  const [year, setYear] = useState(initial.getFullYear());
  const [monthOpen, setMonthOpen] = useState(false);
  const [yearOpen, setYearOpen] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 120 }, (_, i) => today.getFullYear() - i);

  const days = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const handleSelect = (day) => {
    const formatted = `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
    onSelect(formatted);
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* CALENDAR MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-xs rounded-2xl shadow-lg p-4">
          {/* HEADER: Month + Year Dropdown */}
          <div className="flex items-center justify-between mb-4 relative">
            {/* MONTH DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => {
                  setMonthOpen(!monthOpen);
                  setYearOpen(false);
                }}
                className="px-3 py-2 border border-[#D0D7E2] rounded-lg bg-white flex items-center gap-2 text-[#0D4F8B]"
              >
                {months[month]}
                <span className="text-xs">▼</span>
              </button>

              {monthOpen && (
                <div className="absolute z-10 bg-white border border-[#E5EDF5] rounded-lg shadow-md mt-1 w-40 max-h-60 overflow-y-auto">
                  {months.map((m, i) => (
                    <button
                      key={i}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-[#F5FAFD] ${
                        i === month ? "bg-[#E5F2FF] text-[#0D4F8B]" : ""
                      }`}
                      onClick={() => {
                        setMonth(i);
                        setMonthOpen(false);
                      }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* YEAR DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => {
                  setYearOpen(!yearOpen);
                  setMonthOpen(false);
                }}
                className="px-3 py-2 border border-[#D0D7E2] rounded-lg bg-white flex items-center gap-2 text-[#0D4F8B]"
              >
                {year}
                <span className="text-xs">▼</span>
              </button>

              {yearOpen && (
                <div className="absolute z-10 bg-white border border-[#E5EDF5] rounded-lg shadow-md mt-1 w-28 max-h-60 overflow-y-auto">
                  {years.map((y) => (
                    <button
                      key={y}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-[#F5FAFD] ${
                        y === year ? "bg-[#E5F2FF] text-[#0D4F8B]" : ""
                      }`}
                      onClick={() => {
                        setYear(y);
                        setYearOpen(false);
                      }}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* DAYS HEADER */}
          <div className="grid grid-cols-7 text-center text-sm font-semibold text-[#0D4F8B]">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, index) => (
              <div key={index} className="py-1">
                {d}
              </div>
            ))}
          </div>

          {/* DAYS GRID */}
          <div className="grid grid-cols-7 text-center text-sm">
            {Array(firstDay)
              .fill(null)
              .map((_, i) => (
                <div key={`empty-${i}`} />
              ))}

            {Array.from({ length: days }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                onClick={() => handleSelect(day)}
                className="py-2 hover:bg-[#E3F2FD] rounded-lg"
              >
                {day}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 py-2 rounded-lg bg-[#0D4F8B] text-white"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
