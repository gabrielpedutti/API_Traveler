-- DropForeignKey
ALTER TABLE "hospedagens" DROP CONSTRAINT "hospedagens_despesa_id_fkey";

-- DropForeignKey
ALTER TABLE "passeios" DROP CONSTRAINT "passeios_despesa_id_fkey";

-- DropForeignKey
ALTER TABLE "transportes" DROP CONSTRAINT "transportes_despesa_id_fkey";

-- AddForeignKey
ALTER TABLE "hospedagens" ADD CONSTRAINT "hospedagens_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "passeios" ADD CONSTRAINT "passeios_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transportes" ADD CONSTRAINT "transportes_despesa_id_fkey" FOREIGN KEY ("despesa_id") REFERENCES "despesas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
