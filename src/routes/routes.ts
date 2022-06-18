import { Router } from 'express';
const router = Router();
// controllers
import { getHelloUser, postHelloUser } from '../controllers/hello.controller';
import { registerUser, loginUser, updateLinks, getLinks } from '../controllers/index';

import auth from '../middleware/auth';

router.get('/getuser', auth(), getHelloUser);
router.post('/adduser', postHelloUser);
// admin
router.get('/admin', auth(), getLinks);
router.post('/admin', auth(), updateLinks);
// auth
router.post('/signup', registerUser);
router.post('/login', loginUser);
export default router;
