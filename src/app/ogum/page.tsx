import Card from "@/_components/Card";
import Background from "./_components/background";

interface Historia {
  id: number;
  titulo: string;
  conteudo: string;
}

export default async function ItanOgum() {
  // Agora busca da API real (Next.js)
  const api = `http://localhost:3000/api/orixas/1`;

  const res = await fetch(api, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Erro ao buscar dados da API");
  }

  const data = await res.json();
  const historias = data.historias || [];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {historias.map((historia: Historia) => (
            <Card key={historia.id} historia={historia} />
          ))}
        </ul>
      </div>
    </div>
  );
}
