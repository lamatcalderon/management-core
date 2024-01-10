import axios, { AxiosRequestConfig } from "axios";

import { RestPort } from "../../port/out/rest.port";

const instance = axios.create({
    baseURL: "http://localhost:8083",
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.log(error.response.data)
      console.log(error.response.status)
      return Promise.reject(error);
    }
  );

export class RestAxios implements RestPort {

    private static instance: RestAxios;

    private constructor() { }

    static getInstance(): RestAxios {
        if (!RestAxios.instance) {
            RestAxios.instance = new RestAxios();
        }
        return RestAxios.instance;
    }

    get<T>(path: string): Promise<T[]> {
        return instance.get(path);
    }
    post<T>(path: string, entity: T): Promise<T> {
        return instance.post(path, entity);
    }
    delete<T>(entity: T): Promise<any> {
        throw new Error("Method not implemented.");
    }
    put<T>(entity: T): Promise<any> {
        throw new Error("Method not implemented.");
    }
}