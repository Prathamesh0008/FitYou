// "use client";

// import { IoClose } from "react-icons/io5";
// import { useState, useEffect, useRef } from "react";

// export default function OtpModal({ open, onClose }) {
//   if (!open) return null;

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timer, setTimer] = useState(30);
//   const inputRefs = useRef([]);

//   // COUNTDOWN TIMER
//   useEffect(() => {
//     if (timer === 0) return;
//     const interval = setInterval(() => setTimer(t => t - 1), 1000);
//     return () => clearInterval(interval);
//   }, [timer]);

//   // CHANGE HANDLER
//   const handleChange = (value, index) => {
//     if (!/^\d*$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value.slice(-1);
//     setOtp(newOtp);

//     if (value && index < 5) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   // BACKSPACE LOGIC
//   const handleBackspace = (value, index) => {
//     if (value === "" && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   // RESEND OTP
//   const handleResend = async () => {
//     setTimer(30);
//     const email = window.currentEmail;

//     await fetch("/api/send-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     });
//   };

//   // VERIFY OTP
//   const verifyOtp = async () => {
//     const code = otp.join("");

//     if (code.length !== 6) {
//       alert("Please enter your 6-digit OTP");
//       return;
//     }

//     const email = window.currentEmail;

//     const res = await fetch("/api/verify-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, otp: code }),
//     });

//     const data = await res.json();

//     // ❌ FIXED HERE → check success not ok
//     if (!data.success) {
//       alert("Invalid or expired OTP");
//       return;
//     }

//     // SUCCESS
//     onClose();
//     window.dispatchEvent(new Event("otp-success"));
//   };

//   return (
//     <>
//       {/* BACKDROP */}
//       <div
//         className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
//         onClick={onClose}
//       />

//       {/* MODAL */}
//       <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
//         <div className="bg-white rounded-[18px] shadow-[0_4px_30px_rgba(0,0,0,0.12)]
//           w-full max-w-[460px] p-10 relative">

//           {/* CLOSE BUTTON */}
//           <button
//             className="absolute top-5 right-5 text-[#0D4F8B] hover:text-[#062a50]"
//             onClick={onClose}
//           >
//             <IoClose size={28} />
//           </button>

//           {/* TITLE */}
//           <h2 className="text-center text-[28px] font-semibold text-[#0D4F8B]">
//             Enter passcode
//           </h2>

//           <p className="text-center text-[15px] text-[#4d4d4d] mt-3 leading-relaxed">
//             We've sent a 6-digit passcode to your email.
//           </p>

//           {/* OTP INPUTS */}
//           <div className="flex justify-between mt-7 px-4">
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={el => (inputRefs.current[index] = el)}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={e => handleChange(e.target.value, index)}
//                 onKeyDown={e => {
//                   if (e.key === "Backspace") {
//                     handleBackspace(e.target.value, index);
//                   }
//                 }}
//                 className="
//                   w-12 h-12 text-center border border-[#D0D7E2]
//                   rounded-[10px] text-[20px] font-semibold
//                   focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40
//                 "
//               />
//             ))}
//           </div>

//           {/* TIMER */}
//           <div className="text-center mt-4 text-[14px] text-[#4d4d4d]">
//             {timer > 0 ? (
//               <>Resend code in <span className="font-semibold">{timer}s</span></>
//             ) : (
//               <button
//                 className="text-[#0D4F8B] font-semibold hover:underline"
//                 onClick={handleResend}
//               >
//                 Resend code
//               </button>
//             )}
//           </div>

//           {/* VERIFY BUTTON */}
//           <button
//             className="
//               w-full mt-6 py-3.5 
//               rounded-[10px]
//               bg-[#8DBFC9] hover:bg-[#7EB4C0]
//               text-[#0B2340] text-[16px] font-medium tracking-wide
//             "
//             onClick={verifyOtp}
//           >
//             Verify
//           </button>

//         </div>
//       </div>
//     </>
//   );
// }


// components/OtpModal.jsx
"use client";

import { IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/components/AuthProvider";

export default function OtpModal({ open, onClose }) {
  if (!open) return null;

  const { login } = useAuth();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef([]);

  // COUNTDOWN
  useEffect(() => {
    if (timer === 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (value, index) => {
    if (value === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = async () => {
    setTimer(30);

    const email = window.currentEmail;
    if (!email) return;

    await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  };

  const verifyOtp = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      alert("Please enter your 6-digit OTP");
      return;
    }

    const email = window.currentEmail;
    if (!email) {
      alert("Missing email. Please try logging in again.");
      return;
    }

    const res = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp: code }),
    });

    const data = await res.json();

    if (!data.success) {
      alert("Invalid or expired OTP");
      return;
    }

    // ✅ SUCCESS: save email + update context
    login(email);

    // close OTP modal
    onClose();
    // show success tick + redirect (Navbar effect is already listening)
    window.dispatchEvent(new Event("otp-success"));
  };

  return (
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-40"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <div
          className="bg-white rounded-[18px] shadow-[0_4px_30px_rgba(0,0,0,0.12)]
            w-full max-w-[460px] p-10 relative"
        >
          {/* CLOSE */}
          <button
            className="absolute top-5 right-5 text-[#0D4F8B] hover:text-[#062a50]"
            onClick={onClose}
          >
            <IoClose size={28} />
          </button>

          {/* TITLE */}
          <h2 className="text-center text-[28px] font-semibold text-[#0D4F8B]">
            Enter passcode
          </h2>

          <p className="text-center text-[15px] text-[#4d4d4d] mt-3 leading-relaxed">
            We&apos;ve sent a 6-digit passcode to your email.
          </p>

          {/* OTP BOXES */}
          <div className="flex justify-between mt-7 px-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    handleBackspace(e.target.value, index);
                  }
                }}
                className="
                  w-12 h-12 text-center border border-[#D0D7E2]
                  rounded-[10px] text-[20px] font-semibold
                  focus:outline-none focus:ring-2 focus:ring-[#0D4F8B]/40
                "
              />
            ))}
          </div>

          {/* TIMER */}
          <div className="text-center mt-4 text-[14px] text-[#4d4d4d]">
            {timer > 0 ? (
              <>
                Resend code in{" "}
                <span className="font-semibold">{timer}s</span>
              </>
            ) : (
              <button
                className="text-[#0D4F8B] font-semibold hover:underline"
                onClick={handleResend}
              >
                Resend code
              </button>
            )}
          </div>

          {/* VERIFY BUTTON */}
          <button
            className="
              w-full mt-6 py-3.5 
              rounded-[10px]
              bg-[#8DBFC9] hover:bg-[#7EB4C0]
              text-[#0B2340] text-[16px] font-medium tracking-wide
            "
            onClick={verifyOtp}
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
}
