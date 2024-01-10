import { Customer } from "../../../domain/customer.domain";

export interface UpdateCustomerPort {
    updateCustomer(customer: Customer): Promise<Customer>;
}