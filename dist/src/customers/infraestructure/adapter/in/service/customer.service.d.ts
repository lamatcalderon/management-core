import { Customer } from "../../../../domain/customer.domain";
export declare const createCustomer: (customer: Customer) => Promise<Customer>;
export declare const listCustomer: () => Promise<Customer[]>;
export declare const updateCustomer: (customer: Customer) => Promise<Customer>;
export declare const deleteCustomer: (id: number) => Promise<Customer>;
export declare const getCustomer: (id: number) => Promise<Customer[]>;
