import { UpdateCustomerPort } from "../../infraestructure/port/in/update-customer.port";
import { Customer } from "../../domain/customer.domain";

import { RestPort } from "../../../shared/infraestructure/port/out/rest.port";
import { getRestAxiosPort } from "../../../shared/application/container/container-out-port.util";

export class UpdateCustomerUseCase implements UpdateCustomerPort {

    private static instance: UpdateCustomerUseCase;
    private restPort: RestPort = getRestAxiosPort(); 

    private constructor() { }

    static getInstance(): UpdateCustomerUseCase {
        if (!UpdateCustomerUseCase.instance) {
            UpdateCustomerUseCase.instance = new UpdateCustomerUseCase();
        }
        return UpdateCustomerUseCase.instance;
    }

    updateCustomer(customer: Customer): Promise<Customer> {        
        return this.restPort.put("/v1/customer", customer);
    }
}