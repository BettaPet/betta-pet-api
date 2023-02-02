import Customer from "src/entities/Customer.entity";

export const ICUSTOMER_REPOSITORY = "ICUSTOMER_REPOSITORY"
export interface IcustomerRepository {
    create(customer: Customer): Promise<Customer>
}