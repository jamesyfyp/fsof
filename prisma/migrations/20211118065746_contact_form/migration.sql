/*
  Warnings:

  - You are about to drop the column `content` on the `WalkAround` table. All the data in the column will be lost.
  - You are about to drop the `UserAuthForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `company` VARCHAR(255) NOT NULL DEFAULT 'none';

-- AlterTable
ALTER TABLE `WalkAround` DROP COLUMN `content`;

-- DropTable
DROP TABLE `UserAuthForm`;

-- CreateTable
CREATE TABLE `UserVerifyForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `CompanyName` VARCHAR(255) NOT NULL,
    `PhoneNumber` VARCHAR(255) NOT NULL,
    `userEmail` VARCHAR(255) NOT NULL,
    `userDID` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContactForm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `CompanyName` VARCHAR(255) NOT NULL,
    `PhoneNumber` VARCHAR(255) NOT NULL,
    `userEmail` VARCHAR(255) NOT NULL,
    `message` VARCHAR(1000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
