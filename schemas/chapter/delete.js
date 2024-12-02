import joi from "joi-oid";
import { ERROR_FORMAT_ID, ERROR_REQUIRED } from "../../schemas/utils/message.js";

const schemaDelete = joi.object({
    _id: joi
        .objectId()
        .required()
        .messages({
            "string.pattern.name": ERROR_FORMAT_ID,
            "any.required": ERROR_REQUIRED,
        }),
});

export default schemaDelete;