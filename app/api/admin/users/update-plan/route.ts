import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const PLAN_LIMITS = {
  FREE: 1,
  PRO: 10,
  BUSINESS: -1, // Illimitato
};

export async function POST(req: NextRequest) {
  try {
    const { userId, plan } = await req.json();

    if (!userId || !plan) {
      return NextResponse.json(
        { error: "userId e plan sono richiesti" },
        { status: 400 }
      );
    }

    if (!["FREE", "PRO", "BUSINESS"].includes(plan)) {
      return NextResponse.json(
        { error: "Piano non valido" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        plan: plan as any,
        contractsLimit: PLAN_LIMITS[plan as keyof typeof PLAN_LIMITS],
      },
    });

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });
  } catch (error: any) {
    console.error("Errore update plan:", error);
    return NextResponse.json(
      { error: error.message || "Errore nell'aggiornamento del piano" },
      { status: 500 }
    );
  }
}

