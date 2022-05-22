import mongoose from 'mongoose';

export default async () => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        await mongoose.connect(process.env.DB_URI!);
    } catch (err) {
        console.log(err);
    }
};
