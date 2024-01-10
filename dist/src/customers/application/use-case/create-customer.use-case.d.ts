import { CreateCustomerPort } from "../../infraestructure/port/in/create-customer.port";
import { Customer } from "../../domain/customer.domain";
export declare class CreateCustomerUseCase implements CreateCustomerPort {
    private static instance;
    private restPort;
    private constructor();
    static getInstance(): CreateCustomerUseCase;
    createCustomer(customer: Customer): Promise<Customer>;
}
