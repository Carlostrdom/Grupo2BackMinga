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

const createSchemaCategory = joi.object({
    name: joi.string()
        .min(2)
        .max(100)
        .required()
        .messages({
            'string.base': "name" + ERROR_STRING,
            'string.empty': "name " + ERROR_EMPTY,
            'string.min': "name " + ERROR_MIN,
            'string.max': "name " + ERROR_MAX,
            'any.required': "name " + ERROR_REQUIRED,
        }),
    color: joi.string()
        .required()
        .messages({
            'string.base': "Color" + ERROR_STRING,
            'string.empty': "Color" + ERROR_EMPTY,
            'any.required': "Color" + ERROR_REQUIRED,
        }),
    shadow: joi.string()
        .required()
        .messages({
            'string.base': "Shadow" + ERROR_STRING,
            'string.empty': "Shadow " + ERROR_EMPTY,
            'any.required': "Shadow" + ERROR_REQUIRED,
        }),
    description: joi.string()
        .min(10)
        .max(300)
        .required()
        .messages({
            'string.base': "Description" + ERROR_STRING,
            'string.empty': "Description" + ERROR_EMPTY,
            'string.min': "Description" + ERROR_MIN,
            'string.max': "Description" + ERROR_MAX,
            'any.required': "Description" + ERROR_REQUIRED,
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
    character_photo: joi.string()
        .uri()
        .required()
        .messages({
            'string.base': "Character photo" + ERROR_STRING,
            "string.empty": "Character photo" + ERROR_EMPTY,
            "any.required": "Character photo" + ERROR_REQUIRED,
            "string.uri": "Character photo" + ERROR_FORMAT_URL,
        }),
    admin_id: joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'any.required': "user_id" + ERROR_REQUIRED,
            'string.pattern.base': "user_id" + ERROR_FORMAT_ID,
        })
});


export default createSchemaCategory