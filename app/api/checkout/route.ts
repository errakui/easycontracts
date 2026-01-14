import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession, stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const { priceId, customerId, email } = await req.json();

    // Validazioni
    if (!priceId) {
      return NextResponse.json(
        { 
          error: "Price ID mancante. Configura NEXT_PUBLIC_STRIPE_PRICE_PRO e NEXT_PUBLIC_STRIPE_PRICE_BUSINESS nel file .env.local",
          code: "MISSING_PRICE_ID" 
        }, 
        { status: 400 }
      );
    }

    if (!stripe) {
      return NextResponse.json(
        { 
          error: "Stripe non è configurato. Aggiungi STRIPE_SECRET_KEY al file .env.local",
          code: "STRIPE_NOT_CONFIGURED" 
        }, 
        { status: 500 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { 
          error: "Email richiesta per il checkout",
          code: "MISSING_EMAIL" 
        }, 
        { status: 400 }
      );
    }

    // Crea la sessione di checkout
    const session = await createCheckoutSession(
      priceId,
      customerId,
      `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?success=true&session_id={CHECKOUT_SESSION_ID}`,
      `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/#prezzi`,
      email
    );

    return NextResponse.json({ 
      sessionId: session.id, 
      url: session.url 
    });

  } catch (error: any) {
    console.error("Errore creazione checkout:", error);
    
    // Gestisci errori specifici di Stripe
    if (error.type === 'StripeInvalidRequestError') {
      return NextResponse.json(
        { 
          error: `Errore Stripe: ${error.message}. Verifica che i Price IDs siano corretti.`,
          code: "STRIPE_INVALID_REQUEST" 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        error: error.message || "Errore nella creazione della sessione di checkout",
        code: "CHECKOUT_ERROR" 
      },
      { status: 500 }
    );
  }
}
