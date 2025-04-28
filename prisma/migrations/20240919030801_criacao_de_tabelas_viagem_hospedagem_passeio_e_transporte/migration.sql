/*
  Warnings:

  - Added the required column `viagem_id` to the `despesas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "despesas" ADD COLUMN     "viagem_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "hospedagens" (
    "ID" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "data_checkin" TIMESTAMP(3) NOT NULL,
    "data_checkout" TIMESTAMP(3) NOT NULL,
    "despesa_id" INTEGER NOT NULL,
    "viagem_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hospedagens_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "passeios" (
    "ID" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "despesa_id" INTEGER NOT NULL,
    "viagem_id" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "passeios_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "transportes" (
    "ID" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "despesa_id" INTEGER NOT NULL,
    "viagem_id" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transportes_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "viagens" (
    "ID" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cidade_partida_id" DOUBLE PRECISION NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "viagens_pkey" PRIMARY KEY ("ID")
);

-- AddForeignKey
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
