import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { registerUserValidate } from '../../validation/auth/registerUser.validation';
import JwtService from '../../services/jwt.services';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const registerUser = async (req: Request, res: Response) => {
    // validate the user
    const { error } = registerUserValidate.validate(req.body);
    if (error) return res.status(422).send(error);

    const { username, email, password } = req.body;
    // check if email is already exist
    try {
        const exist = await prisma.users.findUnique({ where: { email: email } });
        if (exist) {
            return res.status(420).send({ message: 'Email already taken' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'internal server error' });
    }
    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store data into db
    try {
        const user = await prisma.users.create({
            data: {
                username,
                email,
                password: hashedPassword,
                uri: username,
            },
            select: {
                id: true,
            },
        });
        // sign token
        const payload = {
            username,
            id: user.id,
        };
        const token = JwtService.sign(payload);

        return res.send({ id: user.id, access_token: `Bearer ${token}`, username });
    } catch (err) {
        console.log(err);
        return res.status(420).send({ message: 'internal server error' });
    }
};

export { registerUser };
