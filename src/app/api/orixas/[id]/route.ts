import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);

    // busca um único orixá com todas as histórias
    const orixa = await prisma.orixa.findUnique({
      where: { id },
      include: { historias: true },
    });

    if (!orixa) {
      return NextResponse.json({ error: "Orixá não encontrado" }, { status: 404 });
    }

    return NextResponse.json(orixa);
  } catch (error) {
    console.error("Erro ao buscar orixá:", error);
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 });
  }
}
