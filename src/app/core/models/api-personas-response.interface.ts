export interface ApiPersonasResponse<T = any> {
    data: T;
    status: number;
    message: string;
}