import { Request, Response } from 'express';
// schema
import User from '../models/user.model';

// controllers
const getHelloUser = (req: Request, res: Response) => {
    res.send('hello world from controller');
};
const postHelloUser = async (req: Request, res: Response) => {
    const { username, email } = req.body;
    if (!username || !email) return res.send({ message: 'email and username is must' });
    try {
        const user = new User({
            name: username,
            email: email,
        });
        await user.save();
        return res.send({ message: 'user added' });
    } catch (err) {
        res.status(500).send({ message: 'internal server Error' });
    }
};
export { getHelloUser, postHelloUser };
