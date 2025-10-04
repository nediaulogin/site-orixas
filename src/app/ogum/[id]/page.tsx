interface Props {
  params: {
    id: string; // id da história
  };
}

export default async function Page({ params }: Props) {
  const api = "http://localhost:4000/orixas/2"; // fixo no Ogum (id 2)

  const res = await fetch(api, { cache: "no-store" });
  const orixa = await res.json();

  // converte o id da URL em número
  const historiaId = Number(params.id);

  // procura a história dentro do array
  const historia = orixa.historias.find((h: any) => h.id === historiaId);

  if (!historia) {
    return <div>História não encontrada</div>;
  }

  return (
    <div>
      <h1>{historia.titulo}</h1>
      <div dangerouslySetInnerHTML={{ __html: historia.conteudo }} />
    </div>
  );
}
