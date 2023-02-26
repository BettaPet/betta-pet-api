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
    "cep" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pet" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "breed" VARCHAR(255) NOT NULL,
    "gender" VARCHAR(255) NOT NULL,
    "age" VARCHAR(255) NOT NULL,
    "photo" VARCHAR(255) NOT NULL,
    "customerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "petOffer" (
    "id" UUID NOT NULL,
    "description" VARCHAR(3555) NOT NULL,
    "customerId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "petOffer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" BIGINT NOT NULL,
    "petOfferId" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_cpf_key" ON "customer"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- AddForeignKey
ALTER TABLE "pet" ADD CONSTRAINT "pet_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "petOffer" ADD CONSTRAINT "petOffer_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_petOfferId_fkey" FOREIGN KEY ("petOfferId") REFERENCES "petOffer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
