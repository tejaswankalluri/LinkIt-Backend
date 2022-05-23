import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import keys from '../config/env';
import User from '../models/user.model';
import { Request } from 'express';
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt_secret,
    passReqToCallback: true,
};
passport.use(
    // @ts-ignore
    new JwtStrategy(opts, async (req: Request, jwt_payload, done) => {
        // User.findOne({ _id: jwt_payload.id }, (err: any, user: any) => {
        //     if (err) {
        //         return done(err, false);
        //     }
        //     if (user) {
        //         // //@ts-ignore
        //         req.user = user;
        //         console.log(user);
        //         return done(null, user);
        //     } else {
        //         return done(null, false);
        //         // or you could create a new account
        //     }
        // });
        try {
            const user = await User.findOne({ _id: jwt_payload.id });
            if (user) {
                req.user = user;
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    }),
);
