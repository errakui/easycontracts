import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { priceId, customerId, email } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Price ID mancante" }, { status: 400 });
    }

    const session = await createCheckoutSession(
      priceId,
      customerId,
      `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      `${process.env.NEXT_PUBLIC_APP_URL}/#prezzi`,
      email
    );

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("Errore creazione checkout:", error);
    return NextResponse.json(
      { error: error.message || "Errore nella creazione della sessione" },
      { status: 500 }
    );
  }
}

