import { CreateCustomerPort } from "../../infraestructure/port/in/create-customer.port";
import { Customer } from "../../domain/customer.domain";

import { RestPort } from "../../infraestructure/port/out/rest.port";
import { getRestAxiosPort } from "../../../util/container-out-port.util";

export class CreateCustomerUseCase implements CreateCustomerPort {

    private static instance: CreateCustomerUseCase;
    private restPort: RestPort = getRestAxiosPort(); 

    private constructor() { }

    static getInstance(): CreateCustomerUseCase {
        if (!CreateCustomerUseCase.instance) {
            CreateCustomerUseCase.instance = new CreateCustomerUseCase();
        }
        return CreateCustomerUseCase.instance;
    }

    createCustomer(customer: Customer): Promise<Customer> {        
        return this.restPort.post("/v1/customer", customer);
    }
}