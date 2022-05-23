import keys from '../config/env';
import jwt from 'jsonwebtoken';

interface Ipayload {
    username: string;
    id: object;
}

class JwtService {
    static sign(payload: Ipayload, expire = '1d', secret: string = keys.jwt_secret) {
        return jwt.sign(payload, secret, { expiresIn: expire });
    }
    static verfiyl(token: string, secret: string = keys.jwt_secret) {
        return jwt.verify(token, secret);
    }
}

export default JwtService;
