import { RestPort } from "../../port/out/rest.port";
export declare class FetchAxios implements RestPort {
    get<T>(path: string): Promise<T[]>;
    post<T>(path: string, entity: T): Promise<T>;
    delete<T>(path: string): Promise<T>;
    put<T>(path: string, entity: T): Promise<T>;
}
