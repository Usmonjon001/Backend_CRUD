-- CreateTable
CREATE TABLE `Activity_Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activity_type_account` VARCHAR(191) NOT NULL,
    `swot_type` BOOLEAN NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
