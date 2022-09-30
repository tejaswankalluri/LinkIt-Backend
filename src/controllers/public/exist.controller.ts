import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { usernameValidate, emailValidate } from '../../validation/public/exist.validation';

const emailExist = async (req: Request, res: Response) => {
    const { email } = req.body;
    // validate
    const { error } = emailValidate.validate(req.body);
    if (error) return res.status(422).send(error);

    try {
        const exist = await prisma.users.findUnique({ where: { email: email } });
        if (exist) return res.status(420).send({ message: 'Email already in use' });
        else return res.status(200).send({ meessage: 'Email is free' });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'internal server error' });
    }
};

const usernameExist = async (req: Request, res: Response) => {
    const { username } = req.body;
    // validate
    const { error } = usernameValidate.validate(req.body);
    if (error) return res.status(422).send(error);

    try {
        const exist = await prisma.users.findUnique({ where: { username: username } });
        if (exist) return res.status(420).send({ message: 'username already taken' });
        else return res.status(200).send({ meessage: 'username is free' });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'internal server error' });
    }
};
export { emailExist, usernameExist };
