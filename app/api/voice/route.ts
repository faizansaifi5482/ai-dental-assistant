import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import pool from "@/lib/db";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { message } = body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(
      `You are a helpful AI dental assistant. Answer safely and professionally.\n\nUser: ${message}`
    );

    const response = result.response.text();

    // SAVE CHAT IN POSTGRESQL
    await pool.query(
      `
      INSERT INTO chat_history
      (user_message, bot_reply)
      VALUES ($1, $2)
      `,
      [message, response]
    );

    return NextResponse.json({
      reply: response,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      reply: "Something went wrong.",
    });
  }
}