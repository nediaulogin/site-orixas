-- CreateTable
CREATE TABLE "Orixa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Historia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "orixaId" INTEGER NOT NULL,
    CONSTRAINT "Historia_orixaId_fkey" FOREIGN KEY ("orixaId") REFERENCES "Orixa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
