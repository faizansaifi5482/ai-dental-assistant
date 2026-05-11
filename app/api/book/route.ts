import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, date, time, problem } = body;

    const result = await pool.query(
      "INSERT INTO appointments(name,email,phone,date,time,problem) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [name, email, phone, date, time, problem]
    );

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    });

  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}