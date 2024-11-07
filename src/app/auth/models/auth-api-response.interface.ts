export interface LoginResponse {
    id: string,
    password: string,
    token: string
}

export interface LoginErrorResponse {
    message: string,
    error: string,
    statusCode: number
}