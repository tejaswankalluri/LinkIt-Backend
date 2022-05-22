import { Router } from 'express';
const router = Router();

// controllers
import { getHelloUser, postHelloUser } from '../controllers/hello.controller';

router.get('/getuser', getHelloUser);
router.post('/adduser', postHelloUser);

export default router;
