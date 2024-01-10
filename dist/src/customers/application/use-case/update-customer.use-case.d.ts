import { UpdateCustomerPort } from "../../infraestructure/port/in/update-customer.port";
import { Customer } from "../../domain/customer.domain";
export declare class UpdateCustomerUseCase implements UpdateCustomerPort {
    private static instance;
    private restPort;
    private constructor();
    static getInstance(): UpdateCustomerUseCase;
    updateCustomer(customer: Customer): Promise<Customer>;
}
