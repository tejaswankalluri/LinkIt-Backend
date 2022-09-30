import { Router } from 'express';
const router = Router();
// controllers
import { getHelloUser, postHelloUser } from '../controllers/hello.controller';
import {
    registerUser,
    loginUser,
    updateLinks,
    getLinks,
    getPublicLinks,
    emailExist,
    usernameExist,
} from '../controllers/index';

import auth from '../middleware/auth';

router.get('/getuser', auth(), getHelloUser);
router.post('/adduser', postHelloUser);
// admin
router.get('/admin', auth(), getLinks);
router.post('/admin', auth(), updateLinks);
// auth
router.post('/signup', registerUser);
router.post('/login', loginUser);
// public
router.get('/user/:name', getPublicLinks);
router.post('/exist/email', emailExist);
router.post('/exist/username', usernameExist);

export default router;
