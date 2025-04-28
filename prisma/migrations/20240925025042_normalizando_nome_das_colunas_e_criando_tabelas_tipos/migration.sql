/*
  Warnings:

  - The primary key for the `cidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `cidades` table. All the data in the column will be lost.
  - The primary key for the `despesas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `despesas` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `despesas` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `despesas` table. All the data in the column will be lost.
  - You are about to drop the column `categoria_id` on the `despesas` table. All the data in the column will be lost.
  - The primary key for the `hospedagens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `hospedagens` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `hospedagens` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `hospedagens` table. All the data in the column will be lost.
  - You are about to drop the column `categoria_id` on the `hospedagens` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `hospedagens` table. All the data in the column will be lost.
  - The primary key for the `passeios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `passeios` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `passeios` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `passeios` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `passeios` table. All the data in the column will be lost.
  - The primary key for the `transportes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `transportes` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `transportes` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `transportes` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `transportes` table. All the data in the column will be lost.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `tipo` on the `usuarios` table. All the data in the column will be lost.
  - The primary key for the `viagens` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `viagens` table. All the data in the column will be lost.
  - You are about to drop the column `ID` on the `viagens` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `viagens` table. All the data in the column will be lost.
  - You are about to drop the column `categoria_id` on the `viagens` table. All the data in the column will be lost.
  - Added the required column `tipo_despesa_id` to the `despesas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `despesas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_id` to the `hospedagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `hospedagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_id` to the `passeios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `passeios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_id` to the `transportes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `transportes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Updated_at` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_cadastro_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_usuario_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_viagem_id` to the `viagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `viagens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "despesas" DROP CONSTRAINT "despesas_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "despesas" DROP CONSTRAINT "despesas_viagem_id_fkey";

-- DropForeignKey
ALTER TABLE "hospedagens" DROP CONSTRAINT "hospedagens_cidade_fkey";

-- DropForeignKey
ALTER TABLE "hospedagens" DROP CONSTRAINT "hospedagens_despesa_id_fkey";

-- DropForeignKey
ALTER TABLE "hospedagens" DROP CONSTRAINT "hospedagens_viagem_id_fkey";

-- DropForeignKey
ALTER TABLE "passeios" DROP CONSTRAINT "passeios_cidade_fkey";

-- DropForeignKey
ALTER TABLE "passeios" DROP CONSTRAINT "passeios_despesa_id_fkey";

-- DropForeignKey
ALTER TABLE "passeios" DROP CONSTRAINT "passeios_viagem_id_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_despesa_id_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_transporte_destino_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_transporte_origem_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_viagem_id_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_cidade_fkey";

-- DropForeignKey
ALTER TABLE "viagens" DROP CONSTRAINT "viagens_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "viagens" DROP CONSTRAINT "viagens_viagem_destino_fkey";

-- DropForeignKey
ALTER TABLE "viagens" DROP CONSTRAINT "viagens_viagem_origem_fkey";

-- AlterTable
ALTER TABLE "cidades" DROP CONSTRAINT "cidades_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "cidades_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "despesas" DROP CONSTRAINT "despesas_pkey",
DROP COLUMN "CreatedAt",
DROP COLUMN "ID",
DROP COLUMN "UpdatedAt",
DROP COLUMN "categoria_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "tipo_despesa_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "despesas_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "hospedagens" DROP CONSTRAINT "hospedagens_pkey",
DROP COLUMN "CreatedAt",
DROP COLUMN "ID",
DROP COLUMN "UpdatedAt",
DROP COLUMN "categoria_id",
DROP COLUMN "tipo",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "tipo_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "hospedagens_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "passeios" DROP CONSTRAINT "passeios_pkey",
DROP COLUMN "CreatedAt",
DROP COLUMN "ID",
DROP COLUMN "UpdatedAt",
DROP COLUMN "tipo",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "tipo_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "passeios_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_pkey",
DROP COLUMN "CreatedAt",
DROP COLUMN "ID",
DROP COLUMN "UpdatedAt",
DROP COLUMN "tipo",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "tipo_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "transportes_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "CreatedAt",
DROP COLUMN "ID",
DROP COLUMN "UpdatedAt",
DROP COLUMN "tipo",
ADD COLUMN     "Updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "tipo_cadastro_id" INTEGER NOT NULL,
ADD COLUMN     "tipo_usuario_id" INTEGER NOT NULL,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "viagens" DROP CONSTRAINT "viagens_pkey",
DROP COLUMN "CreatedAt",
DROP COLUMN "ID",
DROP COLUMN "UpdatedAt",
DROP COLUMN "categoria_id",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "status_viagem_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "viagens_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "tipo_cadastro" (
    "id" SERIAL NOT NULL,
    "tipo_cadastro" TEXT NOT NULL,

    CONSTRAINT "tipo_cadastro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_usuario" (
    "id" SERIAL NOT NULL,
    "tipo_usuario" TEXT NOT NULL,

    CONSTRAINT "tipo_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_viagem" (
    "id" SERIAL NOT NULL,
    "status_viagem" TEXT NOT NULL,

    CONSTRAINT "status_viagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_despesa" (
    "id" SERIAL NOT NULL,
    "tipo_despesa" TEXT NOT NULL,

    CONSTRAINT "tipo_despesa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_transporte" (
    "id" SERIAL NOT NULL,
    "tipo_transporte" TEXT NOT NULL,

    CONSTRAINT "tipo_transporte_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_hospedagem" (
    "id" SERIAL NOT NULL,
    "tipo_hospedagem" TEXT NOT NULL,

    CONSTRAINT "tipo_hospedagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_passeio" (
    "id" SERIAL NOT NULL,
    "tipo_passeio" TEXT NOT NULL,

    CONSTRAINT "tipo_passeio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_cadastro_tipo_cadastro_key" ON "tipo_cadastro"("tipo_cadastro");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_usuario_tipo_usuario_key" ON "tipo_usuario"("tipo_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "status_viagem_status_viagem_key" ON "status_viagem"("status_viagem");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_despesa_tipo_despesa_key" ON "tipo_despesa"("tipo_despesa");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_transporte_tipo_transporte_key" ON "tipo_transporte"("tipo_transporte");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_hospedagem_tipo_hospedagem_key" ON "tipo_hospedagem"("tipo_hospedagem");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_passeio_tipo_passeio_key" ON "tipo_passeio"("tipo_passeio");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_cidade_fkey" FOREIGN KEY ("cidade") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_tipo_usuario_id_fkey" FOREIGN KEY ("tipo_usuario_id") REFERENCES "tipo_usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_tipo_cadastro_id_fkey" FOREIGN KEY ("tipo_cadastro_id") REFERENCES "tipo_cadastro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_tipo_despesa_id_fkey" FOREIGN KEY ("tipo_despesa_id") REFERENCES "tipo_despesa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_hospedagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_cidade_fkey" FOREIGN KEY ("cidade") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_passeio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_cidade_fkey" FOREIGN KEY ("cidade") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipo_transporte"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_viagem_id_fkey" FOREIGN KEY ("viagem_id") REFERENCES "viagens"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_transporte_origem_fkey" FOREIGN KEY ("transporte_origem") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_transporte_destino_fkey" FOREIGN KEY ("transporte_destino") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_viagem_origem_fkey" FOREIGN KEY ("viagem_origem") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_viagem_destino_fkey" FOREIGN KEY ("viagem_destino") REFERENCES "cidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_status_viagem_id_fkey" FOREIGN KEY ("status_viagem_id") REFERENCES "status_viagem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
