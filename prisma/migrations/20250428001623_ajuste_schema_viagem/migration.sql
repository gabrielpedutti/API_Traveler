/*
  Warnings:

  - You are about to drop the column `viagem_origem_id` on the `viagens` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "viagens" DROP CONSTRAINT "viagens_viagem_origem_id_fkey";

-- AlterTable
ALTER TABLE "viagens" DROP COLUMN "viagem_origem_id";
