/*
  Warnings:

  - You are about to drop the column `permissionsId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_permissionsId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "permissionsId",
ADD COLUMN     "type" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_type_fkey" FOREIGN KEY ("type") REFERENCES "permissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
