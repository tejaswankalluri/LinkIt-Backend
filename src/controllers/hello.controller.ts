import { Request, Response } from 'express';

// schema
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

// controllers
const getHelloUser = async (req: Request, res: Response) => {
    // try {
    //     const link: HydratedDocument<ILinks> = new Links({
    //         // @ts-ignore
    //         userId: '628a5105d7e399ba818dec99',
    //         // userId: req.user._id,
    //         user_uri: 'tejaswan1',
    //         links: {
    //             name: 'youtube',
    //             url: 'www.youtube.com',
    //         },
    //     });
    //     await link.save();
    //     console.log(link);
    // } catch (err) {
    //     console.log(err);
    //     return res.status(500).send();
    // }

    // @ts-ignore
    return res.send({ user: req.user });
};
const postHelloUser = async (req: Request, res: Response) => {
    res.send('hello');
};
export { getHelloUser, postHelloUser };
