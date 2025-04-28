/*
  Warnings:

  - You are about to drop the column `tipo_cadastro_id` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_usuario_id` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the `tipo_cadastro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_tipo_cadastro_id_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_tipo_usuario_id_fkey";

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "tipo_cadastro_id",
DROP COLUMN "tipo_usuario_id";

-- DropTable
DROP TABLE "tipo_cadastro";

-- DropTable
DROP TABLE "tipo_usuario";
