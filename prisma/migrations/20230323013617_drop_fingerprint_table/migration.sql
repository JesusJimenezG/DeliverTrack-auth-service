/*
  Warnings:

  - You are about to drop the `fingerprint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "fingerprint" DROP CONSTRAINT "fingerprint_user_id_fkey";

-- DropTable
DROP TABLE "fingerprint";
