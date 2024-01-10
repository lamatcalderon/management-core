import { RestPort } from '../../infraestructure/port/out/rest.port';
import { RestAxios } from '../../infraestructure/adapter/out/rest-axios.adapter';

let restAxiosInstance: RestPort | null = null;

export function getRestAxiosPort(): RestPort {
    if (!restAxiosInstance) {
        restAxiosInstance = RestAxios.getInstance();
    }
    return restAxiosInstance;
}