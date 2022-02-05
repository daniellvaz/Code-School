/*
  Warnings:

  - You are about to drop the column `address_type` on the `addresses` table. All the data in the column will be lost.
  - Added the required column `addressTypeId` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_address_type_fkey";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "address_type",
ADD COLUMN     "addressTypeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_addressTypeId_fkey" FOREIGN KEY ("addressTypeId") REFERENCES "address_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
