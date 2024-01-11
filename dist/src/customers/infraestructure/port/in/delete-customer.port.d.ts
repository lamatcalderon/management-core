import { Customer } from "../../../domain/customer.domain";
export interface DeleteCustomerPort {
    deleteCustomer(id: number): Promise<Customer>;
}
