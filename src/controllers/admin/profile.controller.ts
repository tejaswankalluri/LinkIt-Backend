import { Request, Response } from 'express';
import { UploadApiResponse } from 'cloudinary';
import fileUpload from 'express-fileupload';
import sharp from 'sharp';
import { usernameValidate } from '../../validation/public/exist.validation';
import { uploadSingleImage } from '../../services/cloudinary.services';
import { prisma } from '../../services/prisma';

const updateImage = async (req: Request, res: Response) => {
    if (!req.user) return;
    // if no image uploaded
    if (!req.files) return res.status(403).json({ message: 'image must needed' });

    const image: fileUpload.UploadedFile = req.files.data as fileUpload.UploadedFile;
    // compress images
    try {
        const imagebuffer = await sharp(image.data).resize(100).toBuffer();
        image.data = Buffer.from(imagebuffer);
    } catch (err) {
        return res.status(502).json({ message: 'unable to compress image' });
    }
    // convert the buffer to baseb6
    const imagebuffer = image.data.toString('base64');

    // upload image to cloudinary
    let resuploadsinglefile: UploadApiResponse;
    try {
        resuploadsinglefile = await uploadSingleImage(
            `data:${image.mimetype};base64,` + imagebuffer,
            req.user.username,
        );
    } catch (err) {
        console.log(err);
        return res.status(502).json({ message: 'unable to upload the image' });
    }

    // update the link into the database
    try {
        const updateprofile = await prisma.users.update({
            where: {
                username: 'tejaswan',
            },
            data: {
                Profile: {
                    update: {
                        avatar: resuploadsinglefile.secure_url,
                    },
                },
            },
            include: {
                Profile: true,
            },
        });
        if (updateprofile) return res.send({ avatar: updateprofile.Profile?.avatar });
    } catch (err) {
        return res.status(502).send({ message: 'unable to add link in the database' });
    }
};
const updateUsername = async (req: Request, res: Response) => {
    if (!req.user) return;
    // validate username
    const { error } = usernameValidate.validate(req.body);
    if (error) return res.status(422).send(error);
    // check if username is same as before
    if (req.user.username === req.body.username)
        return res.status(403).json({ message: 'cannot update same username' });

    // update username
    try {
        const result = await prisma.users.update({
            where: {
                username: req.user.username,
            },
            data: {
                username: req.body.username,
            },
        });
        if (result) return res.send({ message: 'username updated', username: result.username });
    } catch (err) {
        console.log(err);
        return res.status(420).send({ message: 'internal server error' });
    }
};
export { updateImage, updateUsername };
