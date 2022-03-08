/*
  Warnings:

  - You are about to drop the column `consumption` on the `calculationservice` table. All the data in the column will be lost.
  - Added the required column `cost` to the `CalculationService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calculationservice` DROP COLUMN `consumption`,
    ADD COLUMN `cost` DOUBLE NOT NULL;
