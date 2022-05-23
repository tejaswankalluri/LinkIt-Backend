import { Request, Response } from 'express';
import User from '../../models/user.model';
import { loginUserValidate } from '../../validation/auth/loginUser.validation';
import bcrypt from 'bcrypt';
import JwtService from '../../services/jwt.services';

const loginUser = async (req: Request, res: Response) => {
    const { error } = loginUserValidate.validate(req.body);
    if (error) return res.status(422).send(error);
    const { email, password } = req.body;
    // check the user has an account
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(403).send({ message: 'Email or password is Invalid' });
        }
        // check password
        const checkpass = await bcrypt.compare(password, user.password);
        if (!checkpass) {
            return res.status(403).send({ message: 'Email or password is Invalid' });
        }
        console.log(user._id);
        // sign token
        const payload = {
            username: user.username,
            id: user._id,
        };
        const token = JwtService.sign(payload);

        return res.send({ id: user._id, access_token: `Bearer ${token}`, username: user.username });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'internal server error' });
    }
};

export { loginUser };
