"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DeliveryAddress() {
  const router = useRouter();
  const [showStates, setShowStates] = useState(false);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    pincode: "",
    flat: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    email: "",
    billingSame: true,
  });

  const [errors, setErrors] = useState({});

  // always show top of page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const requiredFields = [
    "name",
    "surname",
    "pincode",
    "flat",
    "area",
    "city",
    "state",
    "email",
  ];

  const validateForm = () => {
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!form[field] || form[field].trim() === "") {
        newErrors[field] = "This field is required";
      }
    });

    // email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailPattern.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (!validateForm()) return;

    // save address so summary page can read it
    if (typeof window !== "undefined") {
      window.localStorage.setItem("fityou-address", JSON.stringify(form));
    }

    router.push("/order/image");
  };

  const inputClass =
    "w-full border border-[#D6E4F2] rounded-lg px-4 py-3 text-[15px] bg-white focus:outline-none focus:ring-2 focus:ring-[#A3C7D9]";

  return (
    <section className="min-h-screen bg-white pb-20">
      {/* TOP BLUE BAR LIKE AKTIVE */}
      <div className="w-full bg-[#F0F7FB] py-6 border-b border-[#E4EEF5]">
        <div className="max-w-md mx-auto px-6">
          <button
            onClick={() => router.back()}
            className="text-sm text-[#0D4F8B] mb-3 flex items-center hover:opacity-70 transition"
          >
            ← Step 1 of 4
          </button>

          <h1 className="text-2xl font-semibold text-[#0D4F8B] text-left">
            Delivery address
          </h1>
        </div>
      </div>

      {/* FORM AREA – COMPACT WIDTH */}
      <div className="max-w-md mx-auto px-6 pt-14 space-y-6">
        {/* Name + Surname */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <input
              className={inputClass}
              placeholder="Name*"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div className="w-full">
            <input
              className={inputClass}
              placeholder="Surname*"
              value={form.surname}
              onChange={(e) => update("surname", e.target.value)}
            />
            {errors.surname && (
              <p className="text-xs text-red-500 mt-1">{errors.surname}</p>
            )}
          </div>
        </div>

        {/* PINCODE */}
        <div>
          <input
            className={inputClass}
            placeholder="Pincode*"
            value={form.pincode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              if (val.length <= 6) update("pincode", val);
            }}
          />
          {errors.pincode && (
            <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>
          )}
        </div>

        {/* FLAT */}
        <div>
          <input
            className={inputClass}
            placeholder="Flat, house no., building, apartment*"
            value={form.flat}
            onChange={(e) => update("flat", e.target.value)}
          />
          {errors.flat && (
            <p className="text-xs text-red-500 mt-1">{errors.flat}</p>
          )}
        </div>

        {/* AREA */}
        <div>
          <input
            className={inputClass}
            placeholder="Area, street, sector, village*"
            value={form.area}
            onChange={(e) => update("area", e.target.value)}
          />
          {errors.area && (
            <p className="text-xs text-red-500 mt-1">{errors.area}</p>
          )}
        </div>

        {/* LANDMARK */}
        <div>
          <input
            className={inputClass}
            placeholder="Landmark (optional)"
            value={form.landmark}
            onChange={(e) => update("landmark", e.target.value)}
          />
        </div>

        {/* CITY */}
        <div>
          <input
            className={inputClass}
            placeholder="City/town*"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          />
          {errors.city && (
            <p className="text-xs text-red-500 mt-1">{errors.city}</p>
          )}
        </div>

        {/* CUSTOM STATE DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setShowStates(!showStates)}
            type="button"
            className="w-full flex justify-between items-center border border-[#D6E4F2] bg-white rounded-lg px-4 py-3 text-[15px] text-[#0D2451]"
          >
            {form.state || "State*"}
            <span className="text-[#0D4F8B]">▾</span>
          </button>

          {showStates && (
            <div className="absolute z-20 mt-2 w-full max-h-60 overflow-y-auto bg-white border border-[#D6E4F2] rounded-lg shadow-md">
              {[
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttar Pradesh",
                "Uttarakhand",
                "West Bengal",
                "Andaman & Nicobar Islands",
                "Chandigarh",
                "Dadra & Nagar Haveli",
                "Daman & Diu",
                "Delhi",
                "Jammu & Kashmir",
                "Ladakh",
                "Lakshadweep",
                "Puducherry",
              ].map((state) => (
                <div
                  key={state}
                  onClick={() => {
                    update("state", state);
                    setShowStates(false);
                  }}
                  className="px-4 py-2 text-[15px] text-[#0D2451] hover:bg-[#E6F0FB] cursor-pointer"
                >
                  {state}
                </div>
              ))}
            </div>
          )}

          {errors.state && (
            <p className="text-xs text-red-500 mt-1">{errors.state}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <input
            className={inputClass}
            placeholder="Email*"
            value={form.email}
            onChange={(e) => {
              update("email", e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* BILLING CHECK */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.billingSame}
            onChange={() => update("billingSame", !form.billingSame)}
            className="scale-110 accent-[#0D4F8B]"
          />
          <p className="text-sm text-[#375C7A]">
            This is also my billing address
          </p>
        </div>

        {/* CONTINUE BUTTON */}
        <button
          onClick={handleContinue}
          className="w-full mt-4 bg-[#A3C7D9] hover:bg-[#8EBAD1] text-[#0D4F8B] font-semibold py-3 rounded-lg"
        >
          Continue
        </button>
      </div>
    </section>
  );
}
