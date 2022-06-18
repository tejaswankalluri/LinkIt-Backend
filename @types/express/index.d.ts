export interface Iuser {}
declare global {
    namespace Express {
        interface User {
            username: string;
            email: string;
            id: number;
        }
    }
}
