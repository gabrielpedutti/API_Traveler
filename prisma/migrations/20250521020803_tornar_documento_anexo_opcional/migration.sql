-- AlterTable
ALTER TABLE "hospedagens" ALTER COLUMN "endereco" DROP NOT NULL,
ALTER COLUMN "documento_anexo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "passeios" ALTER COLUMN "documento_anexo" DROP NOT NULL;

-- AlterTable
ALTER TABLE "transportes" ALTER COLUMN "documento_anexo" DROP NOT NULL;
