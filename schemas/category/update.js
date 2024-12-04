import joi from 'joi-oid'
import {
    ERROR_FORMAT_URL,
    ERROR_FORMAT_ID,
    ERROR_STRING,
    ERROR_MIN,
    ERROR_MAX,
} from "../../schemas/utils/message.js";

const updateSchemaCategory = joi.object({
    name: joi
        .string()
        .min(2)
        .max(100)
        .messages({
            'string.base': "name" + ERROR_STRING,
            'string.min': "name " + ERROR_MIN,
            'string.max': "name " + ERROR_MAX,
        }),
    color: joi
        .string()
        .messages({
            'string.base': "Color" + ERROR_STRING,
        }),
    shadow: joi
        .string()
        .messages({
            'string.base': "Shadow" + ERROR_STRING,
        }),
    description: joi
        .string()
        .min(10)
        .max(300)
        .messages({
            'string.base': "Description" + ERROR_STRING,
            'string.min': "Description" + ERROR_MIN,
            'string.max': "Description" + ERROR_MAX,
        }),
    cover_photo: joi
        .string()
        .uri()
        .messages({
            'string.base': "Cover photo" + ERROR_STRING,
            "string.uri": "Cover photo" + ERROR_FORMAT_URL,
        }),
    character_photo: joi
        .string()
        .uri()
        .messages({
            'string.base': "Character photo" + ERROR_STRING,
            "string.uri": "Character photo" + ERROR_FORMAT_URL,
        }),
    admin_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.pattern.base': "user_id" + ERROR_FORMAT_ID,
        })
})

export default updateSchemaCategory