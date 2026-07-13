import { NextRequest, NextResponse } from "next/server";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Bot konfiguratsiyasi yo'q. .env.local da TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID o'rnating.",
      },
      { status: 500 },
    );
  }

  let data: { name?: string; phone?: string; message?: string };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Noto'g'ri so'rov" }, { status: 400 });
  }

  const name = (data.name || "").toString().trim().slice(0, 200);
  const phone = (data.phone || "").toString().trim().slice(0, 50);
  const message = (data.message || "").toString().trim().slice(0, 1500);

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Ism va telefon majburiy" },
      { status: 400 },
    );
  }

  // HTML formati ishlatamiz — maxsus belgilar Markdown ni buzadi.
  const text =
    `🔔 <b>Yangi murojaat — INOVA sayti</b>\n\n` +
    `👤 <b>Ism:</b> ${escapeHtml(name)}\n` +
    `📞 <b>Telefon:</b> ${escapeHtml(phone)}\n` +
    (message ? `💬 <b>Xabar:</b> ${escapeHtml(message)}\n` : "") +
    `\n🕒 ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}`;

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    });

    const tgJson = (await tgRes.json().catch(() => null)) as
      | { ok: boolean; description?: string; error_code?: number }
      | null;

    if (!tgRes.ok || !tgJson?.ok) {
      const description = tgJson?.description || "Noma'lum Telegram API xatosi";
      const code = tgJson?.error_code;
      // Server logiga to'liq xato yozamiz (terminalda ko'rasiz)
      console.error("[contact] Telegram API error:", {
        status: tgRes.status,
        code,
        description,
        chatId,
      });

      // Tez-tez uchraydigan xatolarga foydalanuvchi uchun tushuntirish beramiz
      let hint = "";
      if (description.includes("chat not found")) {
        hint =
          " (chat_id noto'g'ri yoki siz botga /start yozmagansiz — botingizni ochib /start bosing)";
      } else if (description.includes("bot was blocked")) {
        hint = " (foydalanuvchi botni bloklab qo'ygan)";
      } else if (description.includes("Unauthorized")) {
        hint = " (TELEGRAM_BOT_TOKEN noto'g'ri)";
      } else if (description.toLowerCase().includes("can't parse")) {
        hint = " (xabar matnida formatlash xatosi)";
      }

      return NextResponse.json(
        {
          ok: false,
          error: `Telegram: ${description}${hint}`,
          code,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] fetch error:", e);
    return NextResponse.json(
      {
        ok: false,
        error: e instanceof Error ? e.message : "Tarmoq xatosi",
      },
      { status: 500 },
    );
  }
}
