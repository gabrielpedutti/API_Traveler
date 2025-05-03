/*
  Warnings:

  - You are about to drop the column `usuario_id` on the `despesas` table. All the data in the column will be lost.
  - Added the required column `valor` to the `hospedagens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "despesas" DROP CONSTRAINT "despesas_usuario_id_fkey";

-- AlterTable
ALTER TABLE "despesas" DROP COLUMN "usuario_id";

-- AlterTable
ALTER TABLE "hospedagens" ADD COLUMN     "valor" DOUBLE PRECISION NOT NULL;
