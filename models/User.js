import { Schema, model } from 'mongoose';

let collection = 'users';

let schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },     
        photo: { type: String, required: false },
        role:{ type: Number, required: true },
        online: { type: Boolean, default: false },
    },
    { timestamps: true } 
);

let User = model(collection, schema);

export default User;
