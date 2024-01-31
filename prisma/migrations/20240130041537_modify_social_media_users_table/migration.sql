-- CreateTable
CREATE TABLE `social_media_users` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `socmed_id` VARCHAR(255) NOT NULL,
    `link` VARCHAR(100) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `social_media_users` ADD CONSTRAINT `social_media_users_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `social_media_users` ADD CONSTRAINT `social_media_users_socmed_id_fkey` FOREIGN KEY (`socmed_id`) REFERENCES `social_medias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
