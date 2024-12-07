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
    
    
   
    email: joi
        .string()
        .email()
        .messages({
            "string.empty": "email " + ERROR_EMPTY,
            "string.email": "email " + ERROR_EMAIL,
            "any.required": "email " + ERROR_REQUIRED,
        }),
    photo: joi
        .string()
        .messages({
            "string.empty": "photoUrl " + ERROR_EMPTY,
            "any.required": "photoUrl " + ERROR_REQUIRED,
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
