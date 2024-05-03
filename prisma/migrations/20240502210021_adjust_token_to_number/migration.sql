/*
  Warnings:

  - You are about to alter the column `token` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Int`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `token` INTEGER NOT NULL;
