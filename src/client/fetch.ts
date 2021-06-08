import axios, { AxiosRequestConfig } from "axios";
import { Method, Request, Return } from '../types';
export const fetch = (url: string) => 
    async (request: Request) => {
        const axiosConfig: AxiosRequestConfig = {
            params: request.params,
        }
        switch (request.method) {
            case Method.GET:
                return await axios.get(url + request.path, axiosConfig) as Return;
            case Method.POST:
                return await axios.post(url + request.path, request.body, axiosConfig) as Return
            default:
                return;
        }
    }