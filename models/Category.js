import { Schema, model } from 'mongoose';

let collection = 'categories';

let schema = new Schema(
  {
    name: { type: String, required: true }, 
    color: { type: String, required: true },
    shadow: { type: String, required: true },
    description: { type: String, required: true }, 
    cover_photo: { type: String, required: true },
    character_photo: { type: String, required: true }, 
    admin_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  },
  { timestamps: true } 
);

let Category = model(collection, schema);

export default Category;
