import { localDB } from "@/lib/localDB";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existing = localDB.users.find((u) => u.email === email);
    if (existing) {
      return Response.json(
        { error: "Email already registered" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashed,
      role: "user",
    };

    localDB.users.push(newUser);

    return Response.json(
      {
        message: "Registered successfully",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Register error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
