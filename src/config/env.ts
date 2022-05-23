const keys = {
    url: process.env.DB_URI || '',
    jwt_secret: process.env.JWT_SECRET || '',
    port: process.env.PORT || '',
};
export default keys;
