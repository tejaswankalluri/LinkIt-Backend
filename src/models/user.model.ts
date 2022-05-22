/* 
    file: DB model for user
    file Created: 22 march 2022
*/

import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
}
// create userSchema
const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
});

// create userModel
const User = model<IUser>('User', UserSchema);

export default User;
