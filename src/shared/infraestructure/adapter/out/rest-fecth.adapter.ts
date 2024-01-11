import { RestPort } from "../../port/out/rest.port";

export class FetchAxios implements RestPort {
    get<T>(path: string): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
    post<T>(path: string, entity: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete<T>(path: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    put<T>(path: string, entity: T): Promise<T> {
        throw new Error("Method not implemented.");
    }
}