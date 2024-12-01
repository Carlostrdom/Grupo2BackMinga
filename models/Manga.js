import { Schema, model } from 'mongoose';

let collection = 'mangas';

let schema = new Schema(
  {
    author_id: { type: Schema.Types.ObjectId, ref: 'authors', required: true }, // Reference to the author's ID
    company_id: { type: Schema.Types.ObjectId, ref: 'companies',  }, // Optional reference to the publishing company
    title: { type: String, required: true }, // Title of the manga
    cover_photo: { type: String, required: true }, // URL of the manga's cover photo
    description: { type: String, required: true }, // Descriptive text about the manga
    category_id: { type: Schema.Types.ObjectId, ref: 'categories', required: true }, // Reference to the category ID
  },
  { timestamps: true } // Includes createdAt and updatedAt automatically
);

let Manga = model(collection, schema);

export default Manga;
