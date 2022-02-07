/*
  Warnings:

  - The primary key for the `addresses_on_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `addressesId` on the `addresses_on_users` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `addresses_on_users` table. All the data in the column will be lost.
  - Added the required column `address_id` to the `addresses_on_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `addresses_on_users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses_on_users" DROP CONSTRAINT "addresses_on_users_addressesId_fkey";

-- DropForeignKey
ALTER TABLE "addresses_on_users" DROP CONSTRAINT "addresses_on_users_userId_fkey";

-- AlterTable
ALTER TABLE "addresses_on_users" DROP CONSTRAINT "addresses_on_users_pkey",
DROP COLUMN "addressesId",
DROP COLUMN "userId",
ADD COLUMN     "address_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD CONSTRAINT "addresses_on_users_pkey" PRIMARY KEY ("user_id", "address_id");

-- AddForeignKey
ALTER TABLE "addresses_on_users" ADD CONSTRAINT "addresses_on_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses_on_users" ADD CONSTRAINT "addresses_on_users_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
