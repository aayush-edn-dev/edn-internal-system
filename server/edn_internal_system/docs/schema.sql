
-- SET FOREIGN_KEY_CHECKS = 0;

-- CREATE TABLE `cache` (
--   `key` varchar(255) NOT NULL,
--   `value` mediumtext NOT NULL,
--   `expiration` int(11) NOT NULL,
--   PRIMARY KEY (`key`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `cache_locks` (
--   `key` varchar(255) NOT NULL,
--   `owner` varchar(255) NOT NULL,
--   `expiration` int(11) NOT NULL,
--   PRIMARY KEY (`key`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `failed_jobs` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `uuid` varchar(255) NOT NULL,
--   `connection` text NOT NULL,
--   `queue` text NOT NULL,
--   `payload` longtext NOT NULL,
--   `exception` longtext NOT NULL,
--   `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `job_batches` (
--   `id` varchar(255) NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `total_jobs` int(11) NOT NULL,
--   `pending_jobs` int(11) NOT NULL,
--   `failed_jobs` int(11) NOT NULL,
--   `failed_job_ids` longtext NOT NULL,
--   `options` mediumtext DEFAULT NULL,
--   `cancelled_at` int(11) DEFAULT NULL,
--   `created_at` int(11) NOT NULL,
--   `finished_at` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `jobs` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `queue` varchar(255) NOT NULL,
--   `payload` longtext NOT NULL,
--   `attempts` tinyint(3) unsigned NOT NULL,
--   `reserved_at` int(10) unsigned DEFAULT NULL,
--   `available_at` int(10) unsigned NOT NULL,
--   `created_at` int(10) unsigned NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `jobs_queue_index` (`queue`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `migrations` (
--   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `migration` varchar(255) NOT NULL,
--   `batch` int(11) NOT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `password_reset_tokens` (
--   `email` varchar(255) NOT NULL,
--   `token` varchar(255) NOT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`email`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `sessions` (
--   `id` varchar(255) NOT NULL,
--   `user_id` bigint(20) unsigned DEFAULT NULL,
--   `ip_address` varchar(45) DEFAULT NULL,
--   `user_agent` text DEFAULT NULL,
--   `payload` longtext NOT NULL,
--   `last_activity` int(11) NOT NULL,
--   PRIMARY KEY (`id`),
--   KEY `sessions_user_id_index` (`user_id`),
--   KEY `sessions_last_activity_index` (`last_activity`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- ROLES & PERMISSIONS
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `roles` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `guard_name` varchar(255) DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `roles_name_guard_name_unique` (`name`, `guard_name`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `permissions` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `guard_name` varchar(255) NOT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `permissions_name_guard_name_unique` (`name`, `guard_name`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- USERS
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `user_logins` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `user_id` bigint(20) unsigned NOT NULL,
--   `ip_address` varchar(255) DEFAULT NULL,
--   `login_at` timestamp NULL DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `users` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `username` varchar(255) NOT NULL,
--   `email` varchar(255) NOT NULL,
--   `email_verified_at` timestamp NULL DEFAULT NULL,
--   `password` varchar(255) NOT NULL,
--   `remember_token` varchar(100) DEFAULT NULL,
--   `address` varchar(255) DEFAULT NULL,
--   `phone` varchar(255) DEFAULT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `comment` text DEFAULT NULL,
--   `role_id` bigint(20) unsigned DEFAULT NULL,
--   `user_login_id` bigint(20) unsigned DEFAULT NULL,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `users_username_unique` (`username`),
--   UNIQUE KEY `users_email_unique` (`email`),
--   KEY `users_role_id_foreign` (`role_id`),
--   KEY `users_user_login_id_foreign` (`user_login_id`),
--   KEY `users_created_by_foreign` (`created_by`),
--   KEY `users_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
--   CONSTRAINT `users_user_login_id_foreign` FOREIGN KEY (`user_login_id`) REFERENCES `user_logins` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `users_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
--   CONSTRAINT `users_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- Add FK on user_logins after users is created
-- ALTER TABLE `user_logins`
--   ADD KEY `user_logins_user_id_foreign` (`user_id`),
--   ADD CONSTRAINT `user_logins_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);


-- -- ─────────────────────────────────────────────
-- -- ROLE / PERMISSION PIVOT TABLES
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `roles_has_permissions` (
--   `permission_id` bigint(20) unsigned NOT NULL,
--   `role_id` bigint(20) unsigned NOT NULL,
--   PRIMARY KEY (`permission_id`, `role_id`),
--   KEY `roles_has_permissions_role_id_foreign` (`role_id`),
--   CONSTRAINT `roles_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
--   CONSTRAINT `roles_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `model_has_permissions` (
--   `permission_id` bigint(20) unsigned NOT NULL,
--   `model_type` varchar(255) NOT NULL,
--   `model_id` bigint(20) unsigned NOT NULL,
--   PRIMARY KEY (`permission_id`, `model_id`, `model_type`),
--   KEY `model_has_permissions_model_id_model_type_index` (`model_id`, `model_type`),
--   CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `model_has_roles` (
--   `role_id` bigint(20) unsigned NOT NULL,
--   `model_type` varchar(255) NOT NULL,
--   `model_id` bigint(20) unsigned NOT NULL,
--   PRIMARY KEY (`role_id`, `model_id`, `model_type`),
--   KEY `model_has_roles_model_id_model_type_index` (`model_id`, `model_type`),
--   CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- GEOGRAPHY
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `administrative_area` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `parent_id` bigint(20) unsigned DEFAULT NULL,
--   `name` varchar(255) NOT NULL,
--   `slug` varchar(255) NOT NULL,
--   `rank` varchar(255) NOT NULL,
--   `created_by` bigint(20) unsigned NOT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `administrative_area_slug_unique` (`slug`),
--   KEY `administrative_area_created_by_foreign` (`created_by`),
--   KEY `administrative_area_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `administrative_area_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
--   CONSTRAINT `administrative_area_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `localities` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `administrative_area_id` bigint(20) unsigned NOT NULL,
--   `name` varchar(255) NOT NULL,
--   `rank` int(11) DEFAULT NULL,
--   `created_by` bigint(20) unsigned NOT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `localities_administrative_area_id_foreign` (`administrative_area_id`),
--   KEY `localities_created_by_foreign` (`created_by`),
--   KEY `localities_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `localities_administrative_area_id_foreign` FOREIGN KEY (`administrative_area_id`) REFERENCES `administrative_area` (`id`),
--   CONSTRAINT `localities_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
--   CONSTRAINT `localities_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- CUSTOMERS
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `customers` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `pan_no` varchar(255) NOT NULL,
--   `party_name` varchar(255) NOT NULL,
--   `legal_name` varchar(255) DEFAULT NULL,
--   `locality_id` bigint(20) unsigned DEFAULT NULL,
--   `address` text DEFAULT NULL,
--   `email` varchar(255) DEFAULT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `rank` varchar(255) DEFAULT NULL,
--   `opening_balance` decimal(15,2) DEFAULT NULL,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `customers_pan_no_unique` (`pan_no`),
--   KEY `customers_locality_id_foreign` (`locality_id`),
--   KEY `customers_created_by_foreign` (`created_by`),
--   KEY `customers_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `customers_locality_id_foreign` FOREIGN KEY (`locality_id`) REFERENCES `localities` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `customers_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `customers_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `contact_persons` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `customer_id` bigint(20) unsigned DEFAULT NULL,
--   `name` varchar(255) NOT NULL,
--   `phone_number` varchar(255) DEFAULT NULL,
--   `email` varchar(255) DEFAULT NULL,
--   `role` varchar(255) DEFAULT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `preferred_contact` tinyint(1) NOT NULL DEFAULT 0,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `contact_persons_customer_id_foreign` (`customer_id`),
--   KEY `contact_persons_created_by_foreign` (`created_by`),
--   KEY `contact_persons_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `contact_persons_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `contact_persons_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `contact_persons_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- SALES
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `sales_persons` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `phone` varchar(255) DEFAULT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `sales_persons_created_by_foreign` (`created_by`),
--   KEY `sales_persons_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `sales_persons_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `sales_persons_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- CONTRACTS
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `contract_names` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `contract_names_created_by_foreign` (`created_by`),
--   KEY `contract_names_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `contract_names_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
--   CONSTRAINT `contract_names_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `contract_types` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `type` varchar(255) DEFAULT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `contract_types_created_by_foreign` (`created_by`),
--   KEY `contract_types_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `contract_types_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `contract_types_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `contracts` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `customer_id` bigint(20) unsigned DEFAULT NULL,
--   `contract_name_id` bigint(20) unsigned DEFAULT NULL,
--   `name` varchar(255) DEFAULT NULL,
--   `date` date DEFAULT NULL,
--   `validity_years` int(11) DEFAULT NULL,
--   `valid_till` date DEFAULT NULL,
--   `amount` double DEFAULT NULL,
--   `sold_by` bigint(20) unsigned DEFAULT NULL,
--   `contract_file` varchar(255) DEFAULT NULL,
--   `paymentterm_total` double DEFAULT NULL,
--   `is_verified` tinyint(1) NOT NULL DEFAULT 0,
--   `verified_by` bigint(20) unsigned DEFAULT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `updated` tinyint(1) DEFAULT 0,
--   `remarks` text DEFAULT NULL,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `contracts_customer_id_foreign` (`customer_id`),
--   KEY `contracts_contract_name_id_foreign` (`contract_name_id`),
--   KEY `contracts_sold_by_foreign` (`sold_by`),
--   KEY `contracts_verified_by_foreign` (`verified_by`),
--   KEY `contracts_created_by_foreign` (`created_by`),
--   KEY `contracts_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `contracts_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `contracts_contract_name_id_foreign` FOREIGN KEY (`contract_name_id`) REFERENCES `contract_names` (`id`),
--   CONSTRAINT `contracts_sold_by_foreign` FOREIGN KEY (`sold_by`) REFERENCES `sales_persons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `contracts_verified_by_foreign` FOREIGN KEY (`verified_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `contracts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `contracts_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `contractfiles` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `contract_id` bigint(20) unsigned DEFAULT NULL,
--   `contract_file` varchar(255) DEFAULT NULL,
--   `original_name` varchar(255) DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `contractfiles_contract_id_foreign` (`contract_id`),
--   CONSTRAINT `contractfiles_contract_id_foreign` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `contract_extenddates` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `contract_id` bigint(20) unsigned NOT NULL,
--   `valid_till` date NOT NULL,
--   `approved_by` varchar(255) DEFAULT NULL,
--   `sales_person_id` bigint(20) unsigned DEFAULT NULL,
--   `reason_behind_date_extend` text NOT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 0,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `contract_extenddates_contract_id_foreign` (`contract_id`),
--   KEY `contract_extenddates_sales_person_id_foreign` (`sales_person_id`),
--   KEY `contract_extenddates_created_by_foreign` (`created_by`),
--   KEY `contract_extenddates_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `contract_extenddates_contract_id_foreign` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
--   CONSTRAINT `contract_extenddates_sales_person_id_foreign` FOREIGN KEY (`sales_person_id`) REFERENCES `sales_persons` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `contract_extenddates_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `contract_extenddates_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `annualmaintenancecosts` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `contract_id` bigint(20) unsigned DEFAULT NULL,
--   `type` varchar(255) DEFAULT NULL,
--   `effective_date` date NOT NULL,
--   `amount` double DEFAULT NULL,
--   `percent` double DEFAULT NULL,
--   `total_cost` double DEFAULT NULL,
--   `increment_from` date DEFAULT NULL,
--   `increment_percent` decimal(5,2) DEFAULT NULL,
--   `increment_years` int(11) DEFAULT NULL,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `annualmaintenancecosts_contract_id_foreign` (`contract_id`),
--   KEY `annualmaintenancecosts_created_by_foreign` (`created_by`),
--   KEY `annualmaintenancecosts_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `annualmaintenancecosts_contract_id_foreign` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `annualmaintenancecosts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `annualmaintenancecosts_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- PAYMENT & BILLING
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `received_modes` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `name` varchar(255) NOT NULL,
--   `account_no` varchar(255) DEFAULT NULL,
--   `account_holder_name` varchar(255) DEFAULT NULL,
--   `branch` varchar(255) DEFAULT NULL,
--   `status` tinyint(1) NOT NULL DEFAULT 1,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `received_modes_created_by_foreign` (`created_by`),
--   KEY `received_modes_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `received_modes_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `received_modes_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `payment_terms` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `contract_id` bigint(20) unsigned DEFAULT NULL,
--   `customer_id` bigint(20) unsigned DEFAULT NULL,
--   `contract_type_id` bigint(20) unsigned DEFAULT NULL,
--   `installment` int(11) DEFAULT NULL,
--   `percent` decimal(5,2) DEFAULT NULL,
--   `amount` decimal(15,2) DEFAULT NULL,
--   `rate` decimal(8,2) DEFAULT NULL,
--   `quantity` decimal(8,2) DEFAULT NULL,
--   `total_amount` decimal(15,2) DEFAULT NULL,
--   `due_date` varchar(255) DEFAULT NULL,
--   `vat_applied` tinyint(1) NOT NULL DEFAULT 0,
--   `discounttype` enum('amount','percent') DEFAULT NULL,
--   `discount` varchar(255) DEFAULT NULL,
--   `contract_medium` varchar(255) DEFAULT NULL,
--   `type` varchar(255) DEFAULT NULL,
--   `received_amount` double DEFAULT NULL,
--   `received_date` date DEFAULT NULL,
--   `received_remarks` text DEFAULT NULL,
--   `remarks` varchar(255) DEFAULT NULL,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `payment_terms_contract_id_foreign` (`contract_id`),
--   KEY `payment_terms_customer_id_foreign` (`customer_id`),
--   KEY `payment_terms_contract_type_id_foreign` (`contract_type_id`),
--   KEY `payment_terms_created_by_foreign` (`created_by`),
--   KEY `payment_terms_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `payment_terms_contract_id_foreign` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `payment_terms_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `payment_terms_contract_type_id_foreign` FOREIGN KEY (`contract_type_id`) REFERENCES `contract_types` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `payment_terms_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `payment_terms_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `invoices` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `invoice_number` varchar(255) NOT NULL,
--   `bill_type` varchar(255) DEFAULT NULL,
--   `invoice_date` date NOT NULL,
--   `fiscal_year` varchar(255) NOT NULL,
--   `modeofpayment` varchar(255) DEFAULT NULL,
--   `customer_id` bigint(20) unsigned DEFAULT NULL,
--   `performa_id` bigint(20) unsigned DEFAULT NULL,
--   `gross_amount` double DEFAULT NULL,
--   `discount` double DEFAULT NULL,
--   `taxable_value` double DEFAULT NULL,
--   `vat` double DEFAULT NULL,
--   `totalamount` double DEFAULT NULL,
--   `transaction_date` date DEFAULT NULL,
--   `status` enum('active','cancelled') DEFAULT 'active',
--   `remarks` varchar(255) DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   UNIQUE KEY `invoices_invoice_number_unique` (`invoice_number`),
--   KEY `invoices_customer_id_foreign` (`customer_id`),
--   KEY `invoices_performa_id_foreign` (`performa_id`),
--   CONSTRAINT `invoices_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `invoices_performa_id_foreign` FOREIGN KEY (`performa_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `invoice_payment_terms` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `invoice_id` bigint(20) unsigned DEFAULT NULL,
--   `payment_term_id` bigint(20) unsigned DEFAULT NULL,
--   `gross_amount` decimal(8,2) DEFAULT NULL,
--   `net_amount` decimal(8,2) DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `invoice_payment_terms_invoice_id_foreign` (`invoice_id`),
--   KEY `invoice_payment_terms_payment_term_id_foreign` (`payment_term_id`),
--   CONSTRAINT `invoice_payment_terms_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `invoice_payment_terms_payment_term_id_foreign` FOREIGN KEY (`payment_term_id`) REFERENCES `payment_terms` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `receipts` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `payment_term_id` bigint(20) unsigned DEFAULT NULL,
--   `contract_id` bigint(20) unsigned DEFAULT NULL,
--   `customer_id` bigint(20) unsigned DEFAULT NULL,
--   `received_mode_id` bigint(20) unsigned DEFAULT NULL,
--   `receipt_no` varchar(255) DEFAULT NULL,
--   `receipt_file` varchar(255) DEFAULT NULL,
--   `received_amount` double NOT NULL,
--   `discount_amount` decimal(15,2) DEFAULT NULL,
--   `adjustment` varchar(255) DEFAULT NULL,
--   `received_mode` varchar(255) DEFAULT NULL,
--   `date` varchar(255) NOT NULL,
--   `received_remarks` text DEFAULT NULL,
--   `status` enum('active','cancelled') DEFAULT 'active',
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `receipts_payment_term_id_foreign` (`payment_term_id`),
--   KEY `receipts_contract_id_foreign` (`contract_id`),
--   KEY `receipts_customer_id_foreign` (`customer_id`),
--   KEY `receipts_received_mode_id_foreign` (`received_mode_id`),
--   KEY `receipts_created_by_foreign` (`created_by`),
--   KEY `receipts_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `receipts_payment_term_id_foreign` FOREIGN KEY (`payment_term_id`) REFERENCES `payment_terms` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `receipts_contract_id_foreign` FOREIGN KEY (`contract_id`) REFERENCES `contracts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `receipts_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `receipts_received_mode_id_foreign` FOREIGN KEY (`received_mode_id`) REFERENCES `received_modes` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `receipts_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `receipts_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `receipt_info` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `customer_id` bigint(20) unsigned DEFAULT NULL,
--   `received_mode_id` bigint(20) unsigned DEFAULT NULL,
--   `receipt_no` varchar(255) NOT NULL,
--   `receipt_file` varchar(255) DEFAULT NULL,
--   `received_date` varchar(255) NOT NULL,
--   `opening_balance` decimal(15,2) DEFAULT NULL,
--   `gross_amount` decimal(15,2) NOT NULL,
--   `discount_amount` decimal(15,2) DEFAULT NULL,
--   `adjustment_amount` decimal(15,2) DEFAULT NULL,
--   `net_amount` decimal(15,2) DEFAULT NULL,
--   `received_amount` decimal(15,2) DEFAULT NULL,
--   `balance` decimal(15,2) NOT NULL,
--   `narration` varchar(255) DEFAULT NULL,
--   `remarks` text DEFAULT NULL,
--   `version` varchar(255) NOT NULL DEFAULT 'v1',
--   `status` tinyint(1) NOT NULL DEFAULT 0,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `receipt_info_customer_id_foreign` (`customer_id`),
--   KEY `receipt_info_received_mode_id_foreign` (`received_mode_id`),
--   KEY `receipt_info_created_by_foreign` (`created_by`),
--   KEY `receipt_info_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `receipt_info_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
--   CONSTRAINT `receipt_info_received_mode_id_foreign` FOREIGN KEY (`received_mode_id`) REFERENCES `received_modes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
--   CONSTRAINT `receipt_info_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `receipt_info_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `receipt_tables` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `receipt_info_id` bigint(20) unsigned DEFAULT NULL,
--   `payment_term_id` bigint(20) unsigned DEFAULT NULL,
--   `opening_balance` decimal(15,2) DEFAULT NULL,
--   `gross_amount` decimal(15,2) NOT NULL,
--   `discount_amount` decimal(15,2) DEFAULT NULL,
--   `adjustment_amount` decimal(15,2) DEFAULT NULL,
--   `net_amount` decimal(15,2) DEFAULT NULL,
--   `received_amount` decimal(15,2) DEFAULT NULL,
--   `balance` decimal(15,2) NOT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `receipt_tables_receipt_info_id_foreign` (`receipt_info_id`),
--   KEY `receipt_tables_payment_term_id_foreign` (`payment_term_id`),
--   CONSTRAINT `receipt_tables_receipt_info_id_foreign` FOREIGN KEY (`receipt_info_id`) REFERENCES `receipt_info` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `receipt_tables_payment_term_id_foreign` FOREIGN KEY (`payment_term_id`) REFERENCES `payment_terms` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- -- ─────────────────────────────────────────────
-- -- FOLLOW-UPS
-- -- ─────────────────────────────────────────────

-- CREATE TABLE `status` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `title` varchar(255) NOT NULL,
--   `color` varchar(255) DEFAULT NULL,
--   `note` text DEFAULT NULL,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `status_created_by_foreign` (`created_by`),
--   KEY `status_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `status_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `status_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE SET NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- CREATE TABLE `follow_ups` (
--   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
--   `customer_id` bigint(20) unsigned NOT NULL,
--   `contact_person_id` bigint(20) unsigned DEFAULT NULL,
--   `status_id` bigint(20) unsigned DEFAULT NULL,
--   `follow_up_date` date DEFAULT NULL,
--   `follow_up_time` time DEFAULT NULL,
--   `next_follow_up_date` date DEFAULT NULL,
--   `next_follow_up_time` time DEFAULT NULL,
--   `via` varchar(255) DEFAULT NULL,
--   `note` text DEFAULT NULL,
--   `message` longtext DEFAULT NULL,
--   `followup_done_at` datetime DEFAULT NULL,
--   `completed` tinyint(1) NOT NULL DEFAULT 0,
--   `created_by` bigint(20) unsigned DEFAULT NULL,
--   `updated_by` bigint(20) unsigned DEFAULT NULL,
--   `created_at` timestamp NULL DEFAULT NULL,
--   `updated_at` timestamp NULL DEFAULT NULL,
--   `deleted_at` timestamp NULL DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `follow_ups_customer_id_foreign` (`customer_id`),
--   KEY `follow_ups_contact_person_id_foreign` (`contact_person_id`),
--   KEY `follow_ups_status_id_foreign` (`status_id`),
--   KEY `follow_ups_created_by_foreign` (`created_by`),
--   KEY `follow_ups_updated_by_foreign` (`updated_by`),
--   CONSTRAINT `follow_ups_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE,
--   CONSTRAINT `follow_ups_contact_person_id_foreign` FOREIGN KEY (`contact_person_id`) REFERENCES `contact_persons` (`id`) ON DELETE SET NULL,
--   CONSTRAINT `follow_ups_status_id_foreign` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE,
--   CONSTRAINT `follow_ups_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
--   CONSTRAINT `follow_ups_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- SET FOREIGN_KEY_CHECKS = 1;