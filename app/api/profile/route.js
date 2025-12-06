    // import { cookies } from "next/headers";
    // import dbConnect from "@/lib/db";
    // import User from "@/models/User";
    // import { NextResponse } from "next/server";

    // export async function POST(req) {
    // try {
    //     await dbConnect();

    //     const cookieStore = await cookies();
    //     const email = cookieStore.get("fityou_auth")?.value;

    //     if (!email) {
    //     return NextResponse.json(
    //         { success: false, error: "Not logged in" },
    //         { status: 401 }
    //     );
    //     }

    //     const { name, phone, address, dob } = await req.json();

    //     const user = await User.findOne({ email });

    //     if (!user) {
    //     return NextResponse.json(
    //         { success: false, error: "User not found" },
    //         { status: 404 }
    //     );
    //     }

    //     if (name !== undefined) user.name = name;
    //     if (phone !== undefined) user.phone = phone;
    //     if (dob !== undefined) user.dob = dob;
    //     if (address !== undefined) user.address = address;

    //     await user.save();

    //     return NextResponse.json({
    //     success: true,
    //     user: {
    //         email: user.email,
    //         name: user.name,
    //         phone: user.phone,
    //         dob: user.dob,
    //         address: user.address,
    //     },
    //     });

    // } catch (err) {
    //     console.error("PROFILE UPDATE ERROR:", err);
    //     return NextResponse.json(
    //     { success: false, error: err.message },
    //     { status: 500 }
    //     );
    // }
    // }
