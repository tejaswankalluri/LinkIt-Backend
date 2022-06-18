import passport from 'passport';

export default function () {
    return passport.authenticate('jwt', { session: false });
}
