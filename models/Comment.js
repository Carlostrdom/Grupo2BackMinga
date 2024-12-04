import { Schema, model } from 'mongoose';

const collection = 'comments';
const schema = new Schema(
  {
    chapter_id: { type: Schema.Types.ObjectId, ref: 'chapters', required: true }, // Referencia al ID del capítulo
    author_id: { type: Schema.Types.ObjectId, ref: 'authors' }, // Referencia al ID del autor (opcional)
    company_id: { type: Schema.Types.ObjectId, ref: 'companies' }, // Referencia al ID de la empresa editorial (opcional)
    message: { type: String, required: true }, // Comentario
  },
  { timestamps: true } // Incluye createdAt y updatedAt
);

const Comment = model(collection, schema);

export default Comment;
