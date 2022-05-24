import { Request, Response } from 'express';
// import Links, { ILinks } from '../models/links.model';
// import { HydratedDocument } from 'mongoose';
// schema
import User from '../models/user.model';
// validation
import { createUserValidate } from '../validation/user.validation';
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
    return res.send({ name: req.user.email });
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
