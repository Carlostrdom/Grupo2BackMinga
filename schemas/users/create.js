import joi from "joi-oid";
import {
    ERROR_EMPTY,
    ERROR_REQUIRED,
    ERROR_EMAIL,
    ERROR_FORMAT_STRING,
    ERROR_NUMBER,
    ERROR_BOOLEAN,
    ERROR_MIN,
} from "../../schemas/utils/message.js";

const schema = joi.object({
  
        email: joi
        .string()
        .required()
        .email()
        .messages({
            "string.empty": "email " + ERROR_EMPTY,
            "string.email": "email " + ERROR_EMAIL,
            "any.required": "email " + ERROR_REQUIRED,
            
        }),
    photo: joi
        .string()
        .required()
        .uri()
        .messages({
            "string.empty": "photo " + ERROR_EMPTY,
            "any.required": "photo " + ERROR_REQUIRED,
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
        .required()
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
