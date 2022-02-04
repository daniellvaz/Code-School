-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_permissionsId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "permissionsId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_permissionsId_fkey" FOREIGN KEY ("permissionsId") REFERENCES "permissions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
