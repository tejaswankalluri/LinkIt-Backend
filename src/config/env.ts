const keys = {
    url: process.env.DB_URI || '',
    jwt_secret: process.env.JWT_SECRET || '',
    port: process.env.PORT || '',
    cloudinary: {
        cloud_name: process.env.cloudinary_cloud_name,
        api_key: process.env.cloudinary_api_key,
        api_secret: process.env.cloudinary_api_secret,
    },
};
export default keys;
