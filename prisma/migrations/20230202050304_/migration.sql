-- CreateEnum
CREATE TYPE "EOffer" AS ENUM ('BATH', 'TOSA', 'VACCINE');

-- CreateTable
CREATE TABLE "customer" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "identityNumber" VARCHAR(255) NOT NULL,
    "addressState" VARCHAR(255) NOT NULL,
    "addressStreet" VARCHAR(255) NOT NULL,
    "addressCountry" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petOffer" (
    "id" UUID NOT NULL,
    "name" "EOffer" NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "petOffer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");
