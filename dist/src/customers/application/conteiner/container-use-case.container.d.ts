import { ListCustomerPort } from '../../infraestructure/port/in/list-customer.port';
import { DeleteCustomerPort } from '../../infraestructure/port/in/delete-customer.port';
import { CreateCustomerPort } from '../../infraestructure/port/in/create-customer.port';
import { UpdateCustomerPort } from '../../infraestructure/port/in/update-customer.port';
export declare function getCreateCustomerPort(): CreateCustomerPort;
export declare function getListCustomerPort(): ListCustomerPort;
export declare function getUpdateCustomerPort(): UpdateCustomerPort;
export declare function getDeleteCustomerPort(): DeleteCustomerPort;
