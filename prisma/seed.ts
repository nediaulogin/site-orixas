import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.orixa.create({
    data: {
      nome: "Ogum",
      historias: {
        create: [
          {
            titulo: "Ogum e o ferro",
            conteudo: "<p>Ogum é o senhor do ferro e da guerra...</p>",
          },
          {
            titulo: "Ogum abre os caminhos",
            conteudo: "<p>Com sua espada, Ogum abre os caminhos...</p>",
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
