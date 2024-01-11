import { Customer } from "../../domain/customer.domain";

import { RestPort } from "../../../shared/infraestructure/port/out/rest.port";
import { getRestAxiosPort } from "../../../shared/application/container/container-out-port.util";
import { GetCustomerPort } from "@/customers/infraestructure/port/in/get-customer.port";

export class GetCustomerUseCase implements GetCustomerPort {

    private static instance: GetCustomerUseCase;
    private restPort: RestPort = getRestAxiosPort(); 

    private constructor() { }

    static getInstance(): GetCustomerUseCase {
        if (!GetCustomerUseCase.instance) {
            GetCustomerUseCase.instance = new GetCustomerUseCase();
        }
        return GetCustomerUseCase.instance;
    }

    getCustomer(id: number): Promise<Customer[]> {
        return this.restPort.get(`/v1/customer/${id}`);
    }
}