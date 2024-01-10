import { Customer } from "../../domain/customer.domain";
import { ListCustomerPort } from "@/customers/infraestructure/port/in/list-customer.port";
export declare class ListCustomerUseCase implements ListCustomerPort {
    private static instance;
    private restPort;
    private constructor();
    static getInstance(): ListCustomerUseCase;
    listCustomer(): Promise<Customer[]>;
}
