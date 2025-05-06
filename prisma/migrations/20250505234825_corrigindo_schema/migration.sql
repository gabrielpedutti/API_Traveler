/*
  Warnings:

  - You are about to drop the column `valor` on the `hospedagens` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `viagens` table. All the data in the column will be lost.
  - Added the required column `usuario_id` to the `despesas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `hospedagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `passeios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `transportes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "despesas" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "hospedagens" DROP COLUMN "valor",
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "passeios" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "transportes" ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "viagens" DROP COLUMN "descricao";

-- AddForeignKey
ALTER TABLE "despesas" ADD CONSTRAINT "despesas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
