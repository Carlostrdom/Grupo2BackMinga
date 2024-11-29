import { Schema, model } from 'mongoose';

const collection = 'categories';

const schema = new Schema(
  {
    name: { type: String, required: true }, 
    color: { type: String, required: true },
    shadow: { type: String, required: true }, 
    description: { type: String, required: true }, 
    cover_photo: { type: String, required: true },
    character_photo: { type: String, required: true }, 
    admin_id: { type: Schema.Types.ObjectId, ref: 'admins', required: true },
  },
  { timestamps: true } 
);

const Category = model(collection, schema);

export default Category;