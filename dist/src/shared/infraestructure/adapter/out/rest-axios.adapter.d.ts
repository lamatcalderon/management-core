import { RestPort } from "../../port/out/rest.port";
export declare class RestAxios implements RestPort {
    private static instance;
    private constructor();
    static getInstance(): RestAxios;
    get<T>(path: string): Promise<T[]>;
    post<T>(path: string, entity: T): Promise<T>;
    delete<T>(path: string, id: number): Promise<any>;
    put<T>(path: string, entity: T): Promise<any>;
}
