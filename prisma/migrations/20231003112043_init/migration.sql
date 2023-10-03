/*
  Warnings:

  - The `status` column on the `Subscription` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SUBSCRIPTION_STATUS" AS ENUM ('ACTIVE', 'NOT_ACTIVE');

-- AlterTable
ALTER TABLE "Subscription" ALTER COLUMN "currency" SET DEFAULT 'PLN',
ALTER COLUMN "start_date" SET DATA TYPE DATE,
ALTER COLUMN "end_date" SET DATA TYPE DATE,
ALTER COLUMN "billing_period" SET DEFAULT 'MONTHLY',
ALTER COLUMN "next_payment_date" SET DATA TYPE DATE,
DROP COLUMN "status",
ADD COLUMN     "status" "SUBSCRIPTION_STATUS" NOT NULL DEFAULT 'ACTIVE';

-- DropEnum
DROP TYPE "STATUS";
