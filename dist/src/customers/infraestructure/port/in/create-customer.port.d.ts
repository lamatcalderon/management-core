import { Customer } from "../../../domain/customer.domain";
export interface CreateCustomerPort {
    createCustomer(customer: Customer): Promise<Customer>;
}
