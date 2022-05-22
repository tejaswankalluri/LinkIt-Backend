import mongoose from 'mongoose';

export default () => {
    mongoose
        .connect(process.env.DB_URI || '')
        .then(() => console.log(`connected to db`))
        .catch((err) => console.log(err));
};
