import { Customer } from "../../../../domain/customer.domain";
import { 
    iCreateCustomerPort,
    iDeleteCustomerPort,
    iGetCustomerPort,
    iListCustomerPort, 
    iUpdateCustomerPort 
} from "../../../../application/conteiner/container-use-case.container";

import { CreateCustomerPort } from "../../../port/in/create-customer.port";
import { DeleteCustomerPort } from "../../../port/in/delete-customer.port";
import { GetCustomerPort } from "../../../port/in/get-customer.port";
import { ListCustomerPort } from "../../../port/in/list-customer.port";
import { UpdateCustomerPort } from "../../../port/in/update-customer.port";

export const createCustomer = (customer: Customer) => {
    const createCustomerPort: CreateCustomerPort = iCreateCustomerPort();
    return createCustomerPort.createCustomer(customer);
}

export const listCustomer = () => {
    const listCustomerPort: ListCustomerPort = iListCustomerPort();
    return listCustomerPort.listCustomer();
}

export const updateCustomer = (customer: Customer) => {
    const updateCustomerPort: UpdateCustomerPort = iUpdateCustomerPort();
    return updateCustomerPort.updateCustomer(customer);
}

export const deleteCustomer = (id: number) => {
    const deleteCustomerPort: DeleteCustomerPort = iDeleteCustomerPort();
    return deleteCustomerPort.deleteCustomer(id);
}

export const getCustomer = (id: number) => {
    const getCustomerPort: GetCustomerPort = iGetCustomerPort();
    return getCustomerPort.getCustomer(id);
}