import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const orixas = await prisma.orixa.findMany({
      include: {
        historias: true,
      },
    });

    return NextResponse.json(orixas);
  } catch (error) {
    console.error("Erro ao buscar orixás:", error);
    return NextResponse.json({ error: "Erro ao buscar orixás" }, { status: 500 });
  }
}
