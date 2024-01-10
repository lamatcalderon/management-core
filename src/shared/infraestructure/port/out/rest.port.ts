export interface RestPort {
    get<T>(path: string): Promise<T[]>;
    post<T>(path: string, entity: T): Promise<T>;
    delete<T>(entity: T): Promise<any>;
    put<T>(entity: T): Promise<any>;
}