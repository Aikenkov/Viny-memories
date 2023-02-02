/*
  Warnings:

  - You are about to drop the column `private` on the `Memories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Memories" DROP COLUMN "private",
ADD COLUMN     "isPrivate" BOOLEAN NOT NULL DEFAULT true;
