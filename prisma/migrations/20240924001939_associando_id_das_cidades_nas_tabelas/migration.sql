/*
  Warnings:

  - You are about to drop the column `cidade_residencia_id` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `cidade_partida_id` on the `viagens` table. All the data in the column will be lost.
  - Added the required column `cidade` to the `hospedagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `passeios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transporte_destino` to the `transportes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transporte_origem` to the `transportes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viagem_destino` to the `viagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viagem_origem` to the `viagens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hospedagens" ADD COLUMN     "cidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "passeios" ADD COLUMN     "cidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "transportes" ADD COLUMN     "transporte_destino" INTEGER NOT NULL,
ADD COLUMN     "transporte_origem" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "cidade_residencia_id",
ADD COLUMN     "cidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "viagens" DROP COLUMN "cidade_partida_id",
ADD COLUMN     "viagem_destino" INTEGER NOT NULL,
ADD COLUMN     "viagem_origem" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_cidade_fkey" FOREIGN KEY ("cidade") REFERENCES "cidades"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_cidade_fkey" FOREIGN KEY ("cidade") REFERENCES "cidades"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_cidade_fkey" FOREIGN KEY ("cidade") REFERENCES "cidades"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_transporte_origem_fkey" FOREIGN KEY ("transporte_origem") REFERENCES "cidades"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_transporte_destino_fkey" FOREIGN KEY ("transporte_destino") REFERENCES "cidades"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_viagem_origem_fkey" FOREIGN KEY ("viagem_origem") REFERENCES "cidades"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "viagens" ADD CONSTRAINT "viagens_viagem_destino_fkey" FOREIGN KEY ("viagem_destino") REFERENCES "cidades"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
