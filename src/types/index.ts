export type Return = {
    type: 'obj' | 'string' | 'empty',
    status: number
    body?: any
}

export type Request = {
    method: Method
    path: string,
    params: object,
    body: any,
}

export enum Method {
    POST = "POST",
    GET = "GET"
}

export type Config = Request & Return