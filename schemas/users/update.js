import joi from "joi-oid";
import {
    ERROR_FORMAT_ID,
    ERROR_EMPTY,
    ERROR_REQUIRED,
    ERROR_EMAIL,
    ERROR_NUMBER,
    ERROR_BOOLEAN,
    ERROR_MIN,
    ERROR_FORMAT_STRING,
} from "../../schemas/utils/message.js";

const schema = joi.object({
    _id: joi
        .objectId()
        .required()
        .messages({
            "string.pattern.name": "_id " + ERROR_FORMAT_ID,
            "any.required": "_id " + ERROR_REQUIRED,
        }),
    firstName: joi
        .string()
        .messages({
            "string.empty": "firstName " + ERROR_EMPTY,
            "any.required": "firstName " + ERROR_REQUIRED,
            "string.pattern.base": "firstName " + ERROR_FORMAT_STRING,
        }),
    lastName: joi
        .string()

        .messages({
            "string.empty": "lastName " + ERROR_EMPTY,
            "any.required": "lastName " + ERROR_REQUIRED,
            "string.pattern.base": "lastName " + ERROR_FORMAT_STRING,
        }),
    email: joi
        .string()
        .email()
        .messages({
            "string.empty": "email " + ERROR_EMPTY,
            "string.email": "email " + ERROR_EMAIL,
            "any.required": "email " + ERROR_REQUIRED,
        }),
    photoUrl: joi
        .string()
        .messages({
            "string.empty": "photoUrl " + ERROR_EMPTY,
            "any.required": "photoUrl " + ERROR_REQUIRED,
        }),
    country: joi
        .string()
        .messages({
            "string.empty": "country " + ERROR_EMPTY,
            "any.required": "country " + ERROR_REQUIRED,
            "string.pattern.base": "country " + ERROR_FORMAT_STRING,
        }),
    role: joi
        .number()
        .messages({
            "number.base": "role " + ERROR_NUMBER,
            "any.required": "role " + ERROR_REQUIRED,
        }),
    password: joi
        .string()
        .alphanum()
        .min(8)
        .messages({
            "string.empty": "password " + ERROR_EMPTY,
            "any.required": "password " + ERROR_REQUIRED,
            "string.min": "password " + ERROR_MIN(8),
            "string.alphanum": "password " + ERROR_FORMAT_STRING,
        }),
    online: joi
        .boolean()
        .messages({
            "boolean.base": "online " + ERROR_BOOLEAN,
            "any.required": "online " + ERROR_REQUIRED,
        }),
});

export default schema;
