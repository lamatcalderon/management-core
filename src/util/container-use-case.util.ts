import { ListCustomerPort } from '../customers/infraestructure/port/in/list-customer.port';
import { CreateCustomerPort } from '../customers/infraestructure/port/in/create-customer.port';

import { CreateCustomerUseCase } from '../customers/application/use-case/create-customer.use-case';
import { ListCustomerUseCase } from '../customers/application/use-case/list-customer.use-case';

let createCustomerUseCaseInstance: CreateCustomerPort | null = null;
let listCustomerUseCaseInstance: ListCustomerPort | null = null;

export function getCreateCustomerPort(): CreateCustomerPort {
    if (!createCustomerUseCaseInstance) {
        createCustomerUseCaseInstance = CreateCustomerUseCase.getInstance();
    }
    return createCustomerUseCaseInstance;
}

export function getListCustomerPort(): ListCustomerPort {
    if (!listCustomerUseCaseInstance) {
        listCustomerUseCaseInstance = ListCustomerUseCase.getInstance();
    }
    return listCustomerUseCaseInstance;
}
