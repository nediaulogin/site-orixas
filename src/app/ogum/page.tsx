import Card from "@/_components/Card";
import Background from "./_components/background";

interface Historia {
  id?: number;
  titulo: string;
  conteudo: string;
}
export default async function ItanOgum() {

  const api = 'http://localhost:4000/orixas/2'

  const res = await fetch(`${api}`) 
  const data = await res.json()
  
  const historias = data.historias
  return (
    <div className=" flex items-center justify-center ">

      <div >
        <ul className='grid grid-cols-4 gap-6'>

          {historias.map((historia: Historia) => (
            <Card key={historia.id} historia={historia} />

          ))}
        </ul>
        
      
    </div>
    </div>
  );
};
