import { Customer } from "../../../../domain/customer.domain";
import { 
    getCreateCustomerPort,
    getDeleteCustomerPort, 
    getListCustomerPort, 
    getUpdateCustomerPort 
} from "../../../../application/conteiner/container-use-case.container";

import { CreateCustomerPort } from "../../../port/in/create-customer.port";
import { DeleteCustomerPort } from "../../../port/in/delete-customer.port";
import { ListCustomerPort } from "../../../port/in/list-customer.port";
import { UpdateCustomerPort } from "../../../port/in/update-customer.port";

export const createCustomer = (customer: Customer) => {
    const createCustomerPort: CreateCustomerPort = getCreateCustomerPort();
    return createCustomerPort.createCustomer(customer);
}

export const listCustomer = () => {
    const listCustomerPort: ListCustomerPort = getListCustomerPort();
    return listCustomerPort.listCustomer();
}

export const updateCustomer = (customer: Customer) => {
    const updateCustomerPort: UpdateCustomerPort = getUpdateCustomerPort();
    return updateCustomerPort.updateCustomer(customer);
}

export const deleteCustomer = (customer: Customer) => {
    const deleteCustomerPort: DeleteCustomerPort = getDeleteCustomerPort();
    return deleteCustomerPort.deleteCustomer(customer);
}