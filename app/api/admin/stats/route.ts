import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function GET(req: NextRequest) {
  try {
    // Verifica admin (in produzione dovresti verificare il token)
    
    // Date per filtri
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const weekStart = new Date(todayStart);
    weekStart.setDate(weekStart.getDate() - 7);
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    // === STATISTICHE UTENTI ===
    const totalUsers = await prisma.user.count();
    const proUsers = await prisma.user.count({ where: { plan: "PRO" } });
    const businessUsers = await prisma.user.count({ where: { plan: "BUSINESS" } });
    const freeUsers = await prisma.user.count({ where: { plan: "FREE" } });
    
    const newUsersToday = await prisma.user.count({
      where: { createdAt: { gte: todayStart } }
    });
    const newUsersWeek = await prisma.user.count({
      where: { createdAt: { gte: weekStart } }
    });

    // === STATISTICHE CONTRATTI ===
    const totalContracts = await prisma.contract.count();
    const contractsToday = await prisma.contract.count({
      where: { createdAt: { gte: todayStart } }
    });
    const contractsWeek = await prisma.contract.count({
      where: { createdAt: { gte: weekStart } }
    });

    // === STATISTICHE ABBONAMENTI ===
    const activeSubscriptions = await prisma.subscription.count({
      where: { status: "ACTIVE" }
    });

    // === LISTA UTENTI ===
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        plan: true,
        contractsUsed: true,
        contractsLimit: true,
        createdAt: true,
        stripeCustomerId: true,
      }
    });

    // === LISTA ABBONAMENTI ===
    const subscriptions = await prisma.subscription.findMany({
      where: { status: "ACTIVE" },
      include: {
        user: {
          select: { name: true, email: true }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    const formattedSubscriptions = subscriptions.map(sub => ({
      id: sub.id,
      userEmail: sub.user.email,
      userName: sub.user.name || sub.user.email,
      plan: sub.plan,
      status: sub.status,
      amount: sub.plan === "BUSINESS" ? 49 : 19,
      currentPeriodEnd: sub.currentPeriodEnd,
      createdAt: sub.createdAt,
    }));

    // === STATISTICHE REVENUE DA STRIPE ===
    let revenueToday = 0;
    let revenueWeek = 0;
    let revenueMonth = 0;
    let revenueTotal = 0;
    let payments: any[] = [];

    if (stripe) {
      try {
        // Recupera pagamenti da Stripe
        const charges = await stripe.charges.list({
          limit: 100,
          created: {
            gte: Math.floor(monthStart.getTime() / 1000)
          }
        });

        for (const charge of charges.data) {
          if (charge.paid && charge.status === "succeeded") {
            const amount = charge.amount / 100; // Converti da centesimi
            const chargeDate = new Date(charge.created * 1000);
            
            revenueTotal += amount;
            
            if (chargeDate >= monthStart) {
              revenueMonth += amount;
            }
            if (chargeDate >= weekStart) {
              revenueWeek += amount;
            }
            if (chargeDate >= todayStart) {
              revenueToday += amount;
            }

            // Determina il piano dal prezzo
            let plan = "PRO";
            if (amount >= 49) plan = "BUSINESS";

            payments.push({
              id: charge.id,
              email: charge.billing_details?.email || charge.receipt_email || "N/A",
              amount: amount,
              status: charge.status,
              plan: plan,
              date: chargeDate.toISOString(),
            });
          }
        }

        // Recupera anche pagamenti più vecchi per il totale
        const allCharges = await stripe.charges.list({
          limit: 100,
        });

        revenueTotal = 0;
        for (const charge of allCharges.data) {
          if (charge.paid && charge.status === "succeeded") {
            revenueTotal += charge.amount / 100;
          }
        }

      } catch (stripeError) {
        console.error("Errore Stripe:", stripeError);
        // Calcola revenue dalle subscriptions se Stripe fallisce
        revenueTotal = (proUsers * 19) + (businessUsers * 49);
        revenueMonth = revenueTotal;
      }
    } else {
      // Fallback: calcola approssimativamente
      revenueTotal = (proUsers * 19) + (businessUsers * 49);
      revenueMonth = revenueTotal;
    }

    return NextResponse.json({
      stats: {
        totalUsers,
        proUsers,
        businessUsers,
        freeUsers,
        totalContracts,
        activeSubscriptions,
        revenueToday: Math.round(revenueToday * 100) / 100,
        revenueWeek: Math.round(revenueWeek * 100) / 100,
        revenueMonth: Math.round(revenueMonth * 100) / 100,
        revenueTotal: Math.round(revenueTotal * 100) / 100,
        newUsersToday,
        newUsersWeek,
        contractsToday,
        contractsWeek,
      },
      users,
      subscriptions: formattedSubscriptions,
      payments: payments.slice(0, 50), // Ultimi 50 pagamenti
    });

  } catch (error: any) {
    console.error("Errore API admin stats:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

