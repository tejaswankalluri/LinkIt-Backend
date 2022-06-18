export interface TypedUser extends Express.Request {
    user: { username: string; email: string; id: number };
}
export interface TypedRequestBody<T> extends TypedUser {
    body: T;
}
export interface TypedRequestBodyandQuery<T, Q> extends TypedRequestBody<T> {
    query: Q;
}
