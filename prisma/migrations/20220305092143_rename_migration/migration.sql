/*
  Warnings:

  - The primary key for the `districts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `district_id` on the `districts` table. All the data in the column will be lost.
  - Added the required column `region_id` to the `Districts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `districts` DROP FOREIGN KEY `Districts_district_id_fkey`;

-- AlterTable
ALTER TABLE `districts` DROP PRIMARY KEY,
    DROP COLUMN `district_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `region_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Districts` ADD CONSTRAINT `Districts_region_id_fkey` FOREIGN KEY (`region_id`) REFERENCES `Region`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
