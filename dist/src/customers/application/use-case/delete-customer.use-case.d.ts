import { DeleteCustomerPort } from "../../infraestructure/port/in/delete-customer.port";
import { Customer } from "../../domain/customer.domain";
export declare class DeleteCustomerUseCase implements DeleteCustomerPort {
    private static instance;
    private restPort;
    private constructor();
    static getInstance(): DeleteCustomerUseCase;
    deleteCustomer(id: number): Promise<Customer>;
}
