/*
  Warnings:

  - You are about to drop the column `fixed_Price` on the `calculationservice` table. All the data in the column will be lost.
  - Added the required column `fixed_price` to the `CalculationService` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calculationservice` DROP COLUMN `fixed_Price`,
    ADD COLUMN `fixed_price` DOUBLE NOT NULL;
