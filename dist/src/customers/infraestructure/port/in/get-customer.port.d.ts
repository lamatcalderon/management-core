import { Customer } from "../../../domain/customer.domain";
export interface GetCustomerPort {
    getCustomer(id: number): Promise<Customer[]>;
}
