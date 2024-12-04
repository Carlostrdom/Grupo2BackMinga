import joi from 'joi-oid'
import {
    ERROR_FORMAT_URL,
    ERROR_FORMAT_ID,
    ERROR_STRING,
    ERROR_MIN,
    ERROR_MAX,
} from "../../schemas/utils/message.js";

const updateSchemaManga = joi.object({
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
    title: joi.string()
        .min(3)
        .max(200)
        .messages({
            'string.base': "Title" + ERROR_STRING,
            'string.min': "Title" + ERROR_MIN,
            'string.max': "Title" + ERROR_MAX,
        }),
    cover_photo: joi.string()
        .uri()
        .messages({
            'string.base': "Cover photo" + ERROR_STRING,
            "string.uri": "Cover photo" + ERROR_FORMAT_URL,
        }),
    description: joi.string()
        .min(10)
        .max(1000)
        .messages({
            'string.base': "Description" + ERROR_STRING,
            'string.min': "Description" + ERROR_MIN,
            'string.max': "Description" + ERROR_MAX,
        }),
    category_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.base': "Category ID" + ERROR_STRING,
            'string.pattern.base': "Category ID" + ERROR_FORMAT_ID,
        })
})

export default updateSchemaManga