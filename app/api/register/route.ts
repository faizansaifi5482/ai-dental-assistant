import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  await pool.query(
    "INSERT INTO users (name,email,password) VALUES ($1,$2,$3)",
    [name, email, password]
  );

  return NextResponse.json({ message: "User created" });
}