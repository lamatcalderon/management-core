import { DeleteCustomerPort } from "../../infraestructure/port/in/delete-customer.port";
import { Customer } from "../../domain/customer.domain";

import { RestPort } from "../../../shared/infraestructure/port/out/rest.port";
import { getRestAxiosPort } from "../../../shared/application/container/container-out-port.util";

export class DeleteCustomerUseCase implements DeleteCustomerPort {

    private static instance: DeleteCustomerUseCase;
    private restPort: RestPort = getRestAxiosPort(); 

    private constructor() { }

    static getInstance(): DeleteCustomerUseCase {
        if (!DeleteCustomerUseCase.instance) {
            DeleteCustomerUseCase.instance = new DeleteCustomerUseCase();
        }
        return DeleteCustomerUseCase.instance;
    }

    deleteCustomer(customer: Customer): Promise<Customer> {        
        return this.restPort.delete("/v1/customer", customer.id);
    }
}