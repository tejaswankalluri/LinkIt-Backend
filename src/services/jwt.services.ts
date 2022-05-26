import keys from '../config/env';
import jwt from 'jsonwebtoken';

class JwtService {
    static sign(payload: object, expire = '1d', secret: string = keys.jwt_secret) {
        return jwt.sign(payload, secret, { expiresIn: expire });
    }
    static verfiyl(token: string, secret: string = keys.jwt_secret) {
        return jwt.verify(token, secret);
    }
}

export default JwtService;
