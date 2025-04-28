/*
  Warnings:

  - You are about to drop the column `status_viagem` on the `status_viagem` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_cadastro` on the `tipo_cadastro` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_despesa` on the `tipo_despesa` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_hospedagem` on the `tipo_hospedagem` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_passeio` on the `tipo_passeio` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_transporte` on the `tipo_transporte` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_usuario` on the `tipo_usuario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[descricao]` on the table `status_viagem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descricao]` on the table `tipo_cadastro` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descricao]` on the table `tipo_despesa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descricao]` on the table `tipo_hospedagem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descricao]` on the table `tipo_passeio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descricao]` on the table `tipo_transporte` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[descricao]` on the table `tipo_usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `descricao` to the `status_viagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `tipo_cadastro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `tipo_despesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `tipo_hospedagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `tipo_passeio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `tipo_transporte` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `tipo_usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "status_viagem_status_viagem_key";

-- DropIndex
DROP INDEX "tipo_cadastro_tipo_cadastro_key";

-- DropIndex
DROP INDEX "tipo_despesa_tipo_despesa_key";

-- DropIndex
DROP INDEX "tipo_hospedagem_tipo_hospedagem_key";

-- DropIndex
DROP INDEX "tipo_passeio_tipo_passeio_key";

-- DropIndex
DROP INDEX "tipo_transporte_tipo_transporte_key";

-- DropIndex
DROP INDEX "tipo_usuario_tipo_usuario_key";

-- AlterTable
ALTER TABLE "status_viagem" DROP COLUMN "status_viagem",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tipo_cadastro" DROP COLUMN "tipo_cadastro",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tipo_despesa" DROP COLUMN "tipo_despesa",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tipo_hospedagem" DROP COLUMN "tipo_hospedagem",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tipo_passeio" DROP COLUMN "tipo_passeio",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tipo_transporte" DROP COLUMN "tipo_transporte",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tipo_usuario" DROP COLUMN "tipo_usuario",
ADD COLUMN     "descricao" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "status_viagem_descricao_key" ON "status_viagem"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_cadastro_descricao_key" ON "tipo_cadastro"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_despesa_descricao_key" ON "tipo_despesa"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_hospedagem_descricao_key" ON "tipo_hospedagem"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_passeio_descricao_key" ON "tipo_passeio"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_transporte_descricao_key" ON "tipo_transporte"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_usuario_descricao_key" ON "tipo_usuario"("descricao");
