import { Schema, model } from 'mongoose';

const collection = 'reactions';

const schema = new Schema(
  {
    manga_id: { type: Schema.Types.ObjectId, ref: 'Manga', required: true }, // Referencia al ID del manga
    author_id: { type: Schema.Types.ObjectId, ref: 'Author', required: false }, // Referencia al ID del autor (opcional)
    company_id: { type: Schema.Types.ObjectId, ref: 'Company', required: false }, // Referencia al ID de la empresa editorial (opcional)
    reaction: { type: String, required: true, enum: ['like', 'love',  'wow', 'dislike'] }, // Reacción
  },
  { timestamps: true } // Incluye createdAt y updatedAt
);

const Reaction = model(collection, schema);

export default Reaction;
