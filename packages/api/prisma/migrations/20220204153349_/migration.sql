/*
  Warnings:

  - You are about to drop the column `userId` on the `addresses` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_userId_fkey";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "addresses_on_users" (
    "userId" TEXT NOT NULL,
    "addressesId" TEXT NOT NULL,

    CONSTRAINT "addresses_on_users_pkey" PRIMARY KEY ("addressesId","userId")
);

-- CreateTable
CREATE TABLE "_AddressesToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AddressesToUser_AB_unique" ON "_AddressesToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_AddressesToUser_B_index" ON "_AddressesToUser"("B");

-- AddForeignKey
ALTER TABLE "addresses_on_users" ADD CONSTRAINT "addresses_on_users_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses_on_users" ADD CONSTRAINT "addresses_on_users_addressesId_fkey" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressesToUser" ADD FOREIGN KEY ("A") REFERENCES "addresses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddressesToUser" ADD FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
