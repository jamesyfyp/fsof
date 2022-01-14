/*
  Warnings:

  - You are about to drop the column `title` on the `WalkAround` table. All the data in the column will be lost.
  - Added the required column `customer` to the `WalkAround` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mileage` to the `WalkAround` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `WalkAround` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vin` to the `WalkAround` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WalkAround` DROP COLUMN `title`,
    ADD COLUMN `customer` VARCHAR(255) NOT NULL,
    ADD COLUMN `mileage` INTEGER NOT NULL,
    ADD COLUMN `tag` VARCHAR(255) NOT NULL,
    ADD COLUMN `vin` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `CCC` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `walkAroundId` INTEGER NOT NULL,
    `complaint` VARCHAR(255) NOT NULL,
    `cause` VARCHAR(255) NOT NULL,
    `correction` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
