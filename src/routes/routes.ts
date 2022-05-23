import { Router } from 'express';
const router = Router();
import passport from 'passport';
// controllers
import { getHelloUser, postHelloUser } from '../controllers/hello.controller';
import { registerUser, loginUser } from '../controllers/index';

router.get('/getuser', passport.authorize('jwt', { session: false }), getHelloUser);
router.post('/adduser', postHelloUser);

router.post('/signup', registerUser);
router.post('/login', loginUser);
export default router;
