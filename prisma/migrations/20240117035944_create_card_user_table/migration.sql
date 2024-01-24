/*
  Warnings:

  - A unique constraint covering the columns `[card_number]` on the table `cards` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `card_users` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `card_number` VARCHAR(20) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;

-- CreateIndex
CREATE UNIQUE INDEX `cards_card_number_key` ON `cards`(`card_number`);

-- AddForeignKey
ALTER TABLE `card_users` ADD CONSTRAINT `card_users_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `card_users` ADD CONSTRAINT `card_users_card_number_fkey` FOREIGN KEY (`card_number`) REFERENCES `cards`(`card_number`) ON DELETE RESTRICT ON UPDATE CASCADE;
