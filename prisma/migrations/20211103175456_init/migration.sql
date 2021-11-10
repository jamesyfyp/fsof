/*
  Warnings:

  - Added the required column `company` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` ADD COLUMN `company` VARCHAR(255) NOT NULL,
    ADD COLUMN `role` VARCHAR(255) NOT NULL;
