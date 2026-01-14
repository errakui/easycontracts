import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Lista degli admin autorizzati
const ADMIN_EMAILS = [
  "admin@easycontracts.ai",
  process.env.ADMIN_EMAIL,
].filter(Boolean);

export async function GET(req: NextRequest) {
  try {
    // Verifica autorizzazione admin (in produzione usa un sistema più robusto)
    const authHeader = req.headers.get("authorization");
    
    // Ottieni tutti gli utenti
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        plan: true,
        contractsUsed: true,
        contractsLimit: true,
        createdAt: true,
        stripeCustomerId: true,
        _count: {
          select: {
            contracts: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Calcola statistiche
    const totalUsers = users.length;
    const totalContracts = users.reduce((sum, user) => sum + user._count.contracts, 0);
    const activeSubscriptions = users.filter(u => u.plan !== "FREE").length;
    
    // Calcola revenue approssimativo
    const revenue = users.reduce((sum, user) => {
      if (user.plan === "PRO") return sum + 19;
      if (user.plan === "BUSINESS") return sum + 49;
      return sum;
    }, 0);

    return NextResponse.json({
      users: users.map(u => ({
        ...u,
        contractsUsed: u._count.contracts,
      })),
      stats: {
        totalUsers,
        totalContracts,
        revenue,
        activeSubscriptions,
      },
    });
  } catch (error: any) {
    console.error("Errore API admin/users:", error);
    return NextResponse.json(
      { error: error.message || "Errore nel recupero utenti" },
      { status: 500 }
    );
  }
}

