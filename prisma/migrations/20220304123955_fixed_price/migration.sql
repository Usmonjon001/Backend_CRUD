/*
  Warnings:

  - You are about to drop the column `cost` on the `calculationservice` table. All the data in the column will be lost.
  - Added the required column `fixed_Price` to the `CalculationService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calculationservice` DROP COLUMN `cost`,
    ADD COLUMN `fixed_Price` DOUBLE NOT NULL;
