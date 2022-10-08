import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import keys from '../config/env';

cloudinary.config({
    cloud_name: keys.cloudinary.cloud_name,
    api_key: keys.cloudinary.api_key,
    api_secret: keys.cloudinary.api_secret,
    secure: true,
});

const uploadSingleImage = async (image: string, filename: string): Promise<UploadApiResponse> => {
    return new Promise<UploadApiResponse>((resolve, reject) => {
        cloudinary.uploader
            .upload(image, {
                folder: '/linkit_backend/userimages',
                filename_override: filename,
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                // transformation: { quality: 80, width: 100 },
            })
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            });
    });
};
export { uploadSingleImage };
