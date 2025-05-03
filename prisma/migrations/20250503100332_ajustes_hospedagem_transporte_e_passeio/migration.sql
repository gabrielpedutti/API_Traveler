/*
  Warnings:

  - You are about to drop the column `municipio_id` on the `hospedagens` table. All the data in the column will be lost.
  - You are about to drop the column `municipio_id` on the `passeios` table. All the data in the column will be lost.
  - You are about to drop the column `transporte_origem_id` on the `transportes` table. All the data in the column will be lost.
  - Added the required column `documento_anexo` to the `hospedagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `hospedagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documento_anexo` to the `passeios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `documento_anexo` to the `transportes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hospedagens" DROP CONSTRAINT "hospedagens_municipio_id_fkey";

-- DropForeignKey
ALTER TABLE "passeios" DROP CONSTRAINT "passeios_municipio_id_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_transporte_origem_id_fkey";

-- AlterTable
ALTER TABLE "hospedagens" DROP COLUMN "municipio_id",
ADD COLUMN     "documento_anexo" TEXT NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "passeios" DROP COLUMN "municipio_id",
ADD COLUMN     "documento_anexo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "transportes" DROP COLUMN "transporte_origem_id",
ADD COLUMN     "documento_anexo" TEXT NOT NULL;
