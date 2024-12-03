import joi from "joi-oid";
import {
    ERROR_EMAIL,
    ERROR_EMPTY,
    ERROR_REQUIRED,
    ERROR_FORMAT_STRING,
    ERROR_MIN,
} from "../../schemas/utils/message.js";

const schema = joi.object({
    email: joi
        .string()
        .required()
        .email()
        .messages({
            "string.empty":"email " + ERROR_EMPTY,
            "any.required":"email " + ERROR_REQUIRED,
            "string.email":"email " + ERROR_EMAIL,
        }),
    
    password: joi
        .string()
        .alphanum()
        .required()
        .min(8)
        .messages({
            "string.empty":"password " + ERROR_EMPTY,
            "any.required":"password " + ERROR_REQUIRED,
            "string.alphanum":"password " + ERROR_FORMAT_STRING,
            "string.min":"password " + ERROR_MIN(8),
        }),
});

export default schema;
