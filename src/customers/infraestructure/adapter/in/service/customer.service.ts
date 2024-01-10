import { Customer } from "../../../../domain/customer.domain";
import { getCreateCustomerPort, getListCustomerPort } from "../../../../../util/container-use-case.util";

import { CreateCustomerPort } from "../../../port/in/create-customer.port";
import { ListCustomerPort } from "../../../port/in/list-customer.port";

export const createCustomer = (customer: Customer) => {
    const createUserPort: CreateCustomerPort = getCreateCustomerPort();
    return createUserPort.createCustomer(customer);
}

export const listCustomer = () => {
    const listUserPort: ListCustomerPort = getListCustomerPort();
    return listUserPort.listCustomer();
}