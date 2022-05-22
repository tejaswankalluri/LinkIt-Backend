import { Request, Response } from 'express';
// schema
import User from '../models/user.model';
// validation
import { createUserValidate } from '../validation/user.validation';

// controllers
const getHelloUser = (req: Request, res: Response) => {
    res.send('hello world from controller');
};
const postHelloUser = async (req: Request, res: Response) => {
    const { username, email } = req.body;

    // validation of the user request
    const check = createUserValidate.validate(req.body);
    if (check.error) return res.send({ error: check.error });

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
