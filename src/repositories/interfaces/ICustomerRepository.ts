import CustomerDTO  from 'src/dtos/customer/customer.dto';
import Customer from "src/entities/Customer.entity";

export const ICUSTOMER_REPOSITORY = "ICUSTOMER_REPOSITORY"
export interface IcustomerRepository {
    create(customer: Customer): Promise<Customer>
    updateCustomerById(id: string, payload: CustomerDTO): Promise<Customer>
    getAllCustomers(): Promise<Customer[]>
    getCustomerById(id: string): Promise<Customer>
    deleteCustomerById(id: string): Promise<Customer>
}