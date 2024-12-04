import joi from 'joi-oid'
import {
    ERROR_EMPTY,
    ERROR_REQUIRED,
    ERROR_FORMAT_URL,
    ERROR_FORMAT_ID,
    ERROR_STRING,
    ERROR_MIN,
    ERROR_MAX,
} from "../../schemas/utils/message.js";

const createSchemaManga = joi.object({
    author_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.base': "Author ID" + ERROR_STRING,
            'string.pattern.base': "Author ID" + ERROR_FORMAT_ID,
            'any.required': "Author ID" + ERROR_REQUIRED,
        }),
    company_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.base': "Company ID" + ERROR_STRING,
            'string.pattern.base': "Company ID" + ERROR_FORMAT_ID,
        }),
    title: joi.string()
        .min(3)
        .max(200)
        .required()
        .messages({
            'string.base': "Title" + ERROR_STRING,
            'string.empty': "Title" + ERROR_EMPTY,
            'string.min': "Title" + ERROR_MIN,
            'string.max': "Title" + ERROR_MAX,
            'any.required': "Title" + ERROR_REQUIRED,
        }),
    cover_photo: joi.string()
        .uri()
        .required()
        .messages({
            'string.base': "Cover photo" + ERROR_STRING,
            "string.empty": "Cover photo" + ERROR_EMPTY,
            "any.required": "Cover photo" + ERROR_REQUIRED,
            "string.uri": "Cover photo" + ERROR_FORMAT_URL,
        }),
    description: joi.string()
        .min(10)
        .max(1000)
        .required()
        .messages({
            'string.base': "Description" + ERROR_STRING,
            'string.empty': "Description" + ERROR_EMPTY,
            'string.min': "Description" + ERROR_MIN,
            'string.max': "Description" + ERROR_MAX,
            'any.required': "Description" + ERROR_REQUIRED,
        }),
    category_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'string.base': "Category ID" + ERROR_STRING,
            'string.pattern.base': "Category ID" + ERROR_FORMAT_ID,
            'any.required': "Category ID" + ERROR_REQUIRED,
        })
});

export default createSchemaManga
