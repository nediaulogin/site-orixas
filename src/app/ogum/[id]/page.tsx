// src/app/ogum/[id]/page.tsx

import { prisma } from "@/lib/prisma";


interface Props {
  params: {
    id: string; // id da história
  };
}

export default async function Page({ params }: Props) {
  // Aqui você pega o orixá pelo ID (exemplo: Ogum = 2)
  const orixaId = 1;
  const historiaId = Number(params.id);

  // Busca o orixá e suas histórias no banco
  const orixa = await prisma.orixa.findUnique({
    where: { id: orixaId },
    include: { historias: true },
  });
  console.log(orixa);
  if (!orixa) {
    return <div>Orixá não encontrado</div>;
  }

  // Acha a história dentro do array
  const historia = orixa.historias.find((h) => h.id === historiaId);
  console.log(historia);

  if (!historia) {
    return <div>História não encontrada</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-black">
      <h1 className="text-3xl font-bold mb-4">{historia.titulo}</h1>
      <div
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: historia.conteudo }}
      />
    </div>
  );
}
