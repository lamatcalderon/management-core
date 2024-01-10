import { ListCustomerPort } from '../../infraestructure/port/in/list-customer.port';
import { DeleteCustomerPort } from '../../infraestructure/port/in/delete-customer.port';
import { CreateCustomerPort } from '../../infraestructure/port/in/create-customer.port';
import { UpdateCustomerPort } from '../../infraestructure/port/in/update-customer.port';

import { CreateCustomerUseCase } from '../use-case/create-customer.use-case';
import { DeleteCustomerUseCase } from '../use-case/delete-customer.use-case';
import { ListCustomerUseCase } from '../use-case/list-customer.use-case';
import { UpdateCustomerUseCase } from '../use-case/update-customer.use-case';

let createCustomerUseCaseInstance: CreateCustomerPort | null = null;
let listCustomerUseCaseInstance: ListCustomerPort | null = null;
let updateCustomerUseCaseInstance: UpdateCustomerPort | null = null;
let deleteCustomerUseCaseInstance: DeleteCustomerPort | null = null;

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

export function getUpdateCustomerPort(): UpdateCustomerPort {
    if (!updateCustomerUseCaseInstance) {
        updateCustomerUseCaseInstance = UpdateCustomerUseCase.getInstance();
    }
    return updateCustomerUseCaseInstance;
}

export function getDeleteCustomerPort(): DeleteCustomerPort {
    if (!deleteCustomerUseCaseInstance) {
        deleteCustomerUseCaseInstance = DeleteCustomerUseCase.getInstance();
    }
    return deleteCustomerUseCaseInstance;
}