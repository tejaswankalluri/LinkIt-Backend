import { Request, Response } from 'express';
import { loginUserValidate } from '../../validation/auth/loginUser.validation';
import bcrypt from 'bcrypt';
import JwtService from '../../services/jwt.services';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const loginUser = async (req: Request, res: Response) => {
    const { error } = loginUserValidate.validate(req.body);
    if (error) return res.status(422).send(error);
    const { email, password } = req.body;
    // check the user has an account
    try {
        const user = await prisma.users.findUnique({ where: { email: email } });
        if (!user) {
            return res.status(403).send({ message: 'Email or password is Invalid' });
        }
        // check password
        const checkpass = await bcrypt.compare(password, user.password);
        if (!checkpass) {
            return res.status(403).send({ message: 'Email or password is Invalid' });
        }
        console.log(user.id);
        // sign token
        const payload = {
            username: user.username,
            id: user.id,
        };
        const token = JwtService.sign(payload);

        return res.send({ id: user.id, access_token: `Bearer ${token}`, username: user.username });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'internal server error' });
    }
};

export { loginUser };
