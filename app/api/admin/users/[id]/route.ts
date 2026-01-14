import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id;

    if (!userId) {
      return NextResponse.json(
        { error: "ID utente richiesto" },
        { status: 400 }
      );
    }

    // Elimina l'utente (cascade eliminerà anche contratti e subscription)
    await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json({
      success: true,
      message: "Utente eliminato con successo",
    });
  } catch (error: any) {
    console.error("Errore eliminazione utente:", error);
    return NextResponse.json(
      { error: error.message || "Errore nell'eliminazione dell'utente" },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const userId = params.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        contracts: {
          orderBy: { createdAt: "desc" },
          take: 10,
        },
        subscription: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Utente non trovato" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user });
  } catch (error: any) {
    console.error("Errore get user:", error);
    return NextResponse.json(
      { error: error.message || "Errore nel recupero utente" },
      { status: 500 }
    );
  }
}

