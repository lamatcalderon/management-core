import { Customer } from "../../../../domain/customer.domain";
export declare const createCustomer: (customer: Customer) => Promise<Customer>;
export declare const listCustomer: () => Promise<Customer[]>;
