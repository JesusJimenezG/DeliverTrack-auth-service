/*
  Warnings:

  - The primary key for the `fingerprint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `fingerprint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "fingerprint" DROP CONSTRAINT "fingerprint_pkey",
DROP COLUMN "id",
ADD COLUMN     "fingerprint_id" SERIAL NOT NULL,
ADD CONSTRAINT "fingerprint_pkey" PRIMARY KEY ("fingerprint_id");
