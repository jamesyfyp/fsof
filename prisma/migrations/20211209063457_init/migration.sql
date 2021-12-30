/*
  Warnings:

  - Added the required column `lastContacted` to the `ContactForm` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ContactForm` ADD COLUMN `lastContacted` DATE NOT NULL;
