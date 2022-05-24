/* 
    file: DB model for user
    file Created: 22 march 2022
*/

import { Schema, model } from 'mongoose';

export interface IUser {
    username: string;
    email: string;
    password: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
}
// create userSchema
const UserSchema = new Schema<IUser>(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        avatar: String,
    },
    { timestamps: true },
);

// create userModel
const User = model<IUser>('User', UserSchema);

export default User;
