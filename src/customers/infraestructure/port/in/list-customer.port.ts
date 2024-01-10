import {Customer} from "../../../domain/customer.domain";

export interface ListCustomerPort {
    listCustomer(): Promise<Customer[]>;
}