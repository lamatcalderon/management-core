import { RestPort } from "../../port/out/rest.port";
export declare const instance: import("axios").AxiosInstance;
export declare class RestAxios implements RestPort {
    private static instance;
    private constructor();
    static getInstance(): RestAxios;
    get<T>(path: string): Promise<T[]>;
    post<T>(path: string, entity: T): Promise<T>;
    delete<T>(path: string): Promise<any>;
    put<T>(path: string, entity: T): Promise<any>;
}
