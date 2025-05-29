import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json();
    if (!phone) {
      return Response.json({ error: "Missing phone number" }, { status: 400 });
    }
    const text = `📩 *Запрос обратной связи:* ${phone}`;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return Response.json(
        { error: "Server misconfiguration: telegram variables missing" },
        { status: 500 }
      );
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: "Markdown",
      }),
    });

    const result = await response.json();

    if (result.ok) {
      return Response.json({ success: true }, { status: 200 });
    } else {
      return Response.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }
  } catch {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
