import { Request, Response } from 'express';
import { prisma } from '../../services/prisma';

const getPublicLinks = async (req: Request, res: Response) => {
    try {
        const links = await prisma.users.findUnique({
            where: { username: req.params.name },
            select: { username: true, email: true, links: true, avatar: true },
        });
        if (links) return res.status(200).send(links);
        else return res.status(404).send({ message: 'user not found' });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};
export { getPublicLinks };
