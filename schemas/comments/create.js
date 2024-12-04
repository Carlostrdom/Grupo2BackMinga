import joi from 'joi-oid';
import {
  ERROR_EMPTY,
  ERROR_REQUIRED,
  ERROR_FORMAT_ID,
  ERROR_MIN,
  ERROR_MAX,
  ERROR_STRING,
} from "../../schemas/utils/message.js";

const createSchemaComment = joi.object({
    chapter_id: joi
    .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.base': "Chapter ID" + ERROR_STRING,
            'any.required': "Chapter ID" + ERROR_REQUIRED,
            'string.pattern.base': "Chapter ID" + ERROR_FORMAT_ID,
        }),
    author_id: joi
    .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.base': "Author ID" + ERROR_STRING,
            'string.pattern.base': "Author ID" + ERROR_FORMAT_ID,
        }),
    company_id: joi
    .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.base': "Company ID" + ERROR_STRING,
            'string.pattern.base': "Company ID" + ERROR_FORMAT_ID,
        }),
    message: joi
    .string()
        .min(1)
        .max(500)
        .required()
        .messages({
            'string.base': "Message" + ERROR_STRING,
            'string.empty': "Message" + ERROR_EMPTY,
            'string.min': "Message" + ERROR_MIN,
            'string.max': "Message" + ERROR_MAX,
            'any.required': "Message" + ERROR_REQUIRED,
        })
});


export default createSchemaComment