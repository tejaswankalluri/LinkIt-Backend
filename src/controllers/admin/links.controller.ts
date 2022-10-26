import { Request, Response } from 'express';
import { prisma } from '../../services/prisma';

const updateLinks = async (req: Request, res: Response) => {
    if (!req.user) return;
    try {
        await prisma.users.update({ where: { id: req.user.id }, data: { links: req.body.links } });
        return res.status(200).send({ message: 'updated' });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};
const getLinks = async (req: Request, res: Response) => {
    if (!req.user) return;
    try {
        const links = await prisma.users.findUnique({
            where: { id: req.user.id },
            select: { username: true, email: true, links: true, avatar: true },
        });
        return res.status(200).send(links);
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};
export { updateLinks, getLinks };
