import joi from 'joi-oid'
import {
    ERROR_EMPTY,
    ERROR_REQUIRED,
    ERROR_BOOLEAN,
    ERROR_FORMAT_URL,
    ERROR_FORMAT_ID,
    ERROR_STRING,
    ERROR_MIN,
    ERROR_MAX,
    ERROR_DATE,
} from "../../schemas/utils/message.js";


const createAuthorSchema = joi.object({
    name: joi
        .string()
        .min(2)
        .max(30)
        .required()
        .messages({
            'string.base': "name" + ERROR_STRING,
            'string.empty': "name " + ERROR_EMPTY,
            'string.min': "name " + ERROR_MIN,
            'string.max': "name " + ERROR_MAX,
            'any.required': "name " + ERROR_REQUIRED,
        }),
    last_name: joi
        .string()
        .min(2)
        .max(30)
        .required()
        .messages({
            'string.base': "Last name" + ERROR_STRING,
            'string.empty': "Last name" + ERROR_EMPTY,
            'string.min': "Last name" + ERROR_MIN,
            'string.max': "Last name" + ERROR_MAX,
            'any.required': "Last name" + ERROR_REQUIRED,
        }),
    city: joi
        .string()
        .required()
        .messages({
            'string.empty': "City" + ERROR_EMPTY,
            'any.required': "City" + ERROR_REQUIRED,
        }),
    country: joi
        .string()
        .required()
        .messages({
            'string.empty': "Country" + ERROR_EMPTY,
            'any.required': "Country" + ERROR_REQUIRED,
        }),
    date: joi
        .date()
        .required()
        .messages({
            'date.base': "Date" + ERROR_DATE,
            'any.required': "Date" + ERROR_REQUIRED,
        }),
    photo: joi
        .string()
        .uri()
        .required()
        .messages({
            "string.empty": "photo " + ERROR_EMPTY,
            "any.required": "photo " + ERROR_REQUIRED,
            "string.uri": "photo" + ERROR_FORMAT_URL,
        }),
    user_id: joi
        .string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            'any.required': "user_id" + ERROR_REQUIRED,
            'string.pattern.base': "user_id" + ERROR_FORMAT_ID,
        }),
    active: joi
        .boolean()
        .required()
        .messages({
            "boolean.base": "online " + ERROR_BOOLEAN,
            "any.required": "online " + ERROR_REQUIRED,
        })
});

export default createAuthorSchema