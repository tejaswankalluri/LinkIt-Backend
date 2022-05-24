import { Schema, model, Types } from 'mongoose';

interface link {
    name: string;
    url: string;
}

export interface ILinks {
    userId: Types.ObjectId;
    user_uri: string;
    links: link[];
}

const LinkSchema = new Schema<ILinks>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', unique: true },
    user_uri: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    links: [{ name: { type: String, required: true }, url: { type: String, required: true } }],
});

const Links = model<ILinks>('links', LinkSchema);

export default Links;
