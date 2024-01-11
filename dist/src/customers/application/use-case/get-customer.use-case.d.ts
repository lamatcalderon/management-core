import { Customer } from "../../domain/customer.domain";
import { GetCustomerPort } from "@/customers/infraestructure/port/in/get-customer.port";
export declare class GetCustomerUseCase implements GetCustomerPort {
    private static instance;
    private restPort;
    private constructor();
    static getInstance(): GetCustomerUseCase;
    getCustomer(id: number): Promise<Customer[]>;
}
