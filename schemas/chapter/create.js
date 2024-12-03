import joi from "joi-oid";
import {
    ERROR_REQUIRED,
    ERROR_NUMBER,
    ERROR_FORMAT_ID,
} from "../utils/message.js";

const schemaChapter = joi.object({

    manga_id: joi
        .objectId()
        .required()
        .messages({
            "string.pattern.name": "manga_id " + ERROR_FORMAT_ID,
        }),
    title: joi
        .string()
        .required()
        .messages({
            "string.empty": "title " + ERROR_REQUIRED,
            "any.required": "title " + ERROR_REQUIRED,
        }),
    cover_photo: joi
        .string()
        .uri()
        .required()
        .messages({
            "string.empty": "cover_photo " + ERROR_REQUIRED,
            "any.required": "cover_photo " + ERROR_REQUIRED,
        }),
    pages: joi
        .string()
        .required()
        .messages({
            "string.empty": "pages " + ERROR_REQUIRED,
            "any.required": "pages " + ERROR_REQUIRED,
        }),
    order: joi
        .number()
        .required()
        .messages({
            "number.base": "order " + ERROR_NUMBER,
            "any.required": "order " + ERROR_REQUIRED,
        }),
});


export default schemaChapter;








