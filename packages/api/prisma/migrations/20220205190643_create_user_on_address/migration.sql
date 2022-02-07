/*
  Warnings:

  - You are about to drop the column `type` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_type_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_type_fkey";

-- AlterTable
ALTER TABLE "addresses" ALTER COLUMN "type" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "type",
ADD COLUMN     "permission_id" TEXT;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_type_fkey" FOREIGN KEY ("type") REFERENCES "address_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
