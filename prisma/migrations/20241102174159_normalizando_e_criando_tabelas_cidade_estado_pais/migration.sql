/*
  Warnings:

  - You are about to drop the column `cidade` on the `hospedagens` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `passeios` table. All the data in the column will be lost.
  - You are about to drop the column `transporte_destino` on the `transportes` table. All the data in the column will be lost.
  - You are about to drop the column `transporte_origem` on the `transportes` table. All the data in the column will be lost.
  - You are about to drop the column `Updated_at` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `viagem_destino` on the `viagens` table. All the data in the column will be lost.
  - You are about to drop the column `viagem_origem` on the `viagens` table. All the data in the column will be lost.
  - You are about to drop the `cidades` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `municipio_id` to the `hospedagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipio_id` to the `passeios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transporte_destino_id` to the `transportes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transporte_origem_id` to the `transportes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `municipio_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viagem_destino_id` to the `viagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viagem_origem_id` to the `viagens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "hospedagens" DROP CONSTRAINT "hospedagens_cidade_fkey";

-- DropForeignKey
ALTER TABLE "passeios" DROP CONSTRAINT "passeios_cidade_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_transporte_destino_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_transporte_origem_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_cidade_fkey";

-- DropForeignKey
ALTER TABLE "viagens" DROP CONSTRAINT "viagens_viagem_destino_fkey";

-- DropForeignKey
ALTER TABLE "viagens" DROP CONSTRAINT "viagens_viagem_origem_fkey";

-- AlterTable
ALTER TABLE "hospedagens" DROP COLUMN "cidade",
ADD COLUMN     "municipio_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "passeios" DROP COLUMN "cidade",
ADD COLUMN     "municipio_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "transportes" DROP COLUMN "transporte_destino",
DROP COLUMN "transporte_origem",
ADD COLUMN     "transporte_destino_id" INTEGER NOT NULL,
ADD COLUMN     "transporte_origem_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "Updated_at",
DROP COLUMN "cidade",
ADD COLUMN     "municipio_id" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "viagens" DROP COLUMN "viagem_destino",
DROP COLUMN "viagem_origem",
ADD COLUMN     "viagem_destino_id" INTEGER NOT NULL,
ADD COLUMN     "viagem_origem_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "cidades";

-- CreateTable
CREATE TABLE "paises" (
    "id" SERIAL NOT NULL,
    "nm_pais" TEXT NOT NULL,
    "nm_pais_ascii" TEXT,

    CONSTRAINT "paises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estados" (
    "id" SERIAL NOT NULL,
    "nm_estado" TEXT NOT NULL,
    "nm_estado_ascii" TEXT,
    "pais_id" INTEGER NOT NULL,

    CONSTRAINT "estados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "municipios" (
    "id" SERIAL NOT NULL,
    "nm_municipio" TEXT NOT NULL,
    "nm_municipio_ascii" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "estado_id" INTEGER NOT NULL,

    CONSTRAINT "municipios_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_municipio_id_fkey" FOREIGN KEY ("municipio_id") REFERENCES "municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_transporte_origem_id_fkey" FOREIGN KEY ("transporte_origem_id") REFERENCES "municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_transporte_destino_id_fkey" FOREIGN KEY ("transporte_destino_id") REFERENCES "municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_viagem_origem_id_fkey" FOREIGN KEY ("viagem_origem_id") REFERENCES "municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_viagem_destino_id_fkey" FOREIGN KEY ("viagem_destino_id") REFERENCES "municipios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estados" ADD CONSTRAINT "estados_pais_id_fkey" FOREIGN KEY ("pais_id") REFERENCES "paises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "municipios" ADD CONSTRAINT "municipios_estado_id_fkey" FOREIGN KEY ("estado_id") REFERENCES "estados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
