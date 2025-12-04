// app/profile/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

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

const PROFILE_KEY_PREFIX = "fityou_profile_";

export default function ProfilePage() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const [email, setEmail] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
  const [profile, setProfile] = useState(null);

  // 1) Get logged-in email
  useEffect(() => {
    if (!user?.email && typeof window === "undefined") return;

    const stored =
      user?.email || localStorage.getItem("fityou_email") || null;

    if (!stored) {
      router.push("/");
      return;
    }

    setEmail(stored);
  }, [user, router]);

  // 2) Load profile from localStorage
  useEffect(() => {
    if (!email || typeof window === "undefined") return;

    const key = PROFILE_KEY_PREFIX + email;
    const raw = localStorage.getItem(key);

    if (raw) {
      setProfile(JSON.parse(raw));
    } else {
      // default profile
      setProfile({
        email,
        name: "",
        phone: "",
        dob: "",
        address: {
          line1: "",
          line2: "",
          city: "",
          state: "",
          postalCode: "",
        },
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
      });
    }
  }, [email]);

  // 3) Helper: save profile
  const updateProfile = (patch) => {
    setProfile((prev) => {
      const next = { ...prev, ...patch };
      if (typeof window !== "undefined" && email) {
        const key = PROFILE_KEY_PREFIX + email;
        localStorage.setItem(key, JSON.stringify(next));
      }
      return next;
    });
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#F5FAFD] flex items-center justify-center">
        <p className="text-[#375C7A]">Loading your profile…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5FAFD] py-10">
      <h1 className="text-center text-2xl font-semibold text-[#0D4F8B] mb-10">
        Personal details
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 px-6">

        {/* LEFT SIDEBAR */}
        <div className="col-span-12 md:col-span-3 space-y-3">

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
          <div className="bg-white rounded-xl shadow p-8 min-h-[260px]">
            {activeTab === "personal" && (
              <PersonalDetailsCard profile={profile} updateProfile={updateProfile} />
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
              <NotificationsCard profile={profile} updateProfile={updateProfile} />
            )}

            {activeTab === "subscription" && <PlaceholderCard title="My subscription" />}
            {activeTab === "benefits" && <PlaceholderCard title="My membership benefits" />}
            {activeTab === "diary" && <PlaceholderCard title="Weight loss diary + images" />}
            {activeTab === "messages" && <PlaceholderCard title="Message centre" />}
            {activeTab === "consultation" && <PlaceholderCard title="Medical consultation" />}
          </div>
        </div>
      </div>
    </div>
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

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-[#E5EDF5] pb-2 mb-2">
      <span className="text-[#375C7A] text-[14px]">{label}</span>
      <span className="font-medium text-[#0D4F8B] text-[14px]">{value || "--"}</span>
    </div>
  );
}

function PersonalDetailsCard({ profile, updateProfile }) {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 600);
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
          <div>
            <label className="block text-xs uppercase tracking-wide text-[#7A8BA4] mb-1">
              Email
            </label>
            <input
              value={profile.email}
              disabled
              className="w-full border border-[#D0D7E2] bg-[#F5FAFD] rounded-lg px-3 py-2 text-sm text-[#7A8BA4]"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wide text-[#7A8BA4] mb-1">
              Date of birth
            </label>
            <input
              type="date"
              value={profile.dob}
              onChange={(e) => updateProfile({ dob: e.target.value })}
              className="w-full border border-[#D0D7E2] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-4 inline-flex items-center px-4 py-2 rounded-lg bg-[#0D4F8B] text-white text-sm font-medium hover:bg-[#0b3764]"
        >
          {saving ? "Saved" : "Save changes"}
        </button>
      </div>
    </>
  );
}

function AddressCard({ profile, updateProfile }) {
  const addr = profile.address || {};

  const setAddress = (patch) =>
    updateProfile({ address: { ...addr, ...patch } });

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
      </div>
    </>
  );
}

function ShipmentsCard({ title, shipments }) {
  return (
    <>
      <h2 className="text-xl font-semibold text-[#0D4F8B] mb-4">{title}</h2>
      {shipments.length === 0 ? (
        <p className="text-[14px] text-[#7A8BA4]">
          No records found yet.
        </p>
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
              <div className="text-[#0D4F8B] font-semibold">
                {s.status}
              </div>
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
        This section is a placeholder. You can later connect it to your
        backend (e.g., orders, diary images, consultations) while keeping
        the same UI layout.
      </p>
    </>
  );
}
