import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY non configurata");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
  typescript: true,
});

// IDs dei prodotti Stripe (da configurare nel dashboard Stripe)
export const STRIPE_PLANS = {
  FREE: {
    name: "Free",
    price: 0,
    priceId: null, // Nessun price ID per il piano free
    features: [
      "1 contratto gratis",
      "Template base (4 contratti)",
      "Watermark",
    ],
    contractsLimit: 1,
  },
  PRO: {
    name: "Pro",
    price: 19,
    priceId: process.env.STRIPE_PRICE_PRO || "price_pro_monthly", // Sostituisci con il tuo Price ID
    features: [
      "10 contratti/mese",
      "Tutti i template (50+)",
      "Export PDF professionale",
      "Supporto email",
    ],
    contractsLimit: 10,
  },
  BUSINESS: {
    name: "Business",
    price: 49,
    priceId: process.env.STRIPE_PRICE_BUSINESS || "price_business_monthly", // Sostituisci con il tuo Price ID
    features: [
      "Contratti illimitati",
      "Nessun watermark",
      "Team (5 membri)",
      "API access",
      "Supporto prioritario",
    ],
    contractsLimit: -1, // -1 = illimitati
  },
};

export async function createCheckoutSession(
  priceId: string,
  customerId?: string,
  successUrl?: string,
  cancelUrl?: string,
  customerEmail?: string
) {
  const sessionConfig: any = {
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/#prezzi`,
    allow_promotion_codes: true,
  };

  // Se c'è un customerId esistente, usalo
  if (customerId) {
    sessionConfig.customer = customerId;
  } else if (customerEmail) {
    // Altrimenti usa l'email per pre-compilare e creare il customer
    sessionConfig.customer_email = customerEmail;
  }

  const session = await stripe.checkout.sessions.create(sessionConfig);

  return session;
}

export async function createCustomerPortalSession(customerId: string) {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
  });

  return session;
}

export async function getCustomerSubscriptions(customerId: string) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    status: "active",
    limit: 10,
  });

  return subscriptions.data;
}

