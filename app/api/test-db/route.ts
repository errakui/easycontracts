import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    // Test 1: Connessione DB
    const count = await prisma.user.count();
    
    // Test 2: Crea utente test
    const testUser = await prisma.user.upsert({
      where: { email: "test-webhook-db@test.com" },
      update: { name: "TEST AGGIORNATO " + new Date().toISOString() },
      create: {
        email: "test-webhook-db@test.com",
        name: "TEST CREATO " + new Date().toISOString(),
        plan: "PRO",
        contractsLimit: 10,
        contractsUsed: 0,
      },
    });

    return NextResponse.json({
      success: true,
      dbConnected: true,
      totalUsers: count,
      testUser: {
        id: testUser.id,
        email: testUser.email,
        name: testUser.name,
      },
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack,
    }, { status: 500 });
  }
}

