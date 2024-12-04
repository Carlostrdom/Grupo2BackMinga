import joi from "joi-oid";
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


const updateAuthorSchema = joi.object({
    _id: joi
        .objectId()
        .required()
        .messages({
            "string.pattern.name": "_id " + ERROR_FORMAT_ID,
            "any.required": "_id " + ERROR_REQUIRED,
        }),
    name: joi.string()
        .min(2)
        .max(30)
        .optional()
        .messages({
            'string.base': "name" + ERROR_STRING,
            'string.min': "name " + ERROR_MIN,
            'string.max': "name " + ERROR_MAX,
        }),
    last_name: joi.string()
        .min(2)
        .max(30)
        .optional()
        .messages({
            'string.base': "Last name" + ERROR_STRING,
            'string.min': "Last name" + ERROR_MIN,
            'string.max': "Last name" + ERROR_MAX,
        }),
    city: joi
        .string()
        .optional()
        .messages({
            'string.empty': "City" + ERROR_EMPTY,
        }),
    country: joi
        .string()
        .optional()
        .messages({
            'string.empty': "Country" + ERROR_EMPTY,
        }),
    date: joi
        .date()
        .optional()
        .messages({
            'date.base': "Date" + ERROR_DATE,
        }),
    photo: joi
        .string()
        .uri()
        .optional()
        .messages({
            "string.uri": "photo" + ERROR_FORMAT_URL,
        }),
    user_id: joi
        .string()
        .optional()
        .regex(/^[0-9a-fA-F]{24}$/)
        .messages({
            'string.pattern.base': "user_id" + ERROR_FORMAT_ID,
        }),
    active: joi
        .boolean()
        .optional()
        .messages({
            "boolean.base": "online " + ERROR_BOOLEAN,
        })
})


export default updateAuthorSchema