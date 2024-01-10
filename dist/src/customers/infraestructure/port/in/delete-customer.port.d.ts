import { Customer } from "../../../domain/customer.domain";
export interface DeleteCustomerPort {
    deleteCustomer(customer: Customer): Promise<Customer>;
}
