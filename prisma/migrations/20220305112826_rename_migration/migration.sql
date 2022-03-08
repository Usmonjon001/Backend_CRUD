/*
  Warnings:

  - A unique constraint covering the columns `[region_id]` on the table `Districts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Districts_region_id_key` ON `Districts`(`region_id`);
