import joi from 'joi-oid'
import {
  ERROR_REQUIRED,
  ERROR_FORMAT_ID,
  ERROR_STRING,
} from "../../schemas/utils/message.js";


const createSchemaReaction = joi.object({
    manga_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.base': "Manga ID" + ERROR_STRING,
            'string.pattern.base': "Manga ID" + ERROR_FORMAT_ID,
            'any.required': "Manga ID" + ERROR_REQUIRED,
        }),
    author_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.base': "Author ID" + ERROR_STRING,
            'string.pattern.base': "Author ID" + ERROR_FORMAT_ID,
        }),
    company_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.base': "Company ID" + ERROR_STRING,
            'string.pattern.base': "Company ID" + ERROR_FORMAT_ID,
        }),
    reaction: joi.string()
        .valid('like', 'love', 'wow', 'dislike')
        .required()
        .messages({
            'string.base': "Reaction" + ERROR_STRING,
            'any.only': 'Reaction must be one of the following: like, love, wow, dislike.',
            'any.required': "Message" + ERROR_REQUIRED,
        })
});

export default createSchemaReaction
