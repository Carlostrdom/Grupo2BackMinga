import joi from "joi-oid";
import {
    ERROR_REQUIRED,
    ERROR_EMPTY,
    ERROR_FORMAT_ID,
    ERROR_FORMAT_STRING,
} from "../utils/message.js";

const schemaUpdate = joi.object({
    _id: joi
        .objectId()
        .required()
        .messages({
            "string.pattern.name": "_id " + ERROR_FORMAT_ID,
            "any.required": "_id " + ERROR_REQUIRED,
        }),

    manga_id: joi
        .objectId()
        .required()
        .messages({
            "string.pattern.name": "manga_id " + ERROR_FORMAT_ID,
            "any.required": "_id " + ERROR_REQUIRED,
        }),
    title: joi
        .string()
        .required()
        .messages({
            "string.empty": "title " + ERROR_EMPTY,
            "any.required": "title " + ERROR_REQUIRED,
            "string.pattern.base": "title " + ERROR_FORMAT_STRING,
        }),
    cover_photo: joi
        .string()
        .messages({
            "string.empty": "cover_photo " + ERROR_EMPTY,
            "any.required": "cover_photo " + ERROR_REQUIRED,
        }),
    pages: joi
        .string()
        .messages({
            "string.empty": "pages " + ERROR_EMPTY,
            "any.required": "pages " + ERROR_REQUIRED,
            "string.pattern.base": "pages " + ERROR_FORMAT_STRING,
        }),

    order: joi
        .number()
        .messages({
            "number.base": "order " + ERROR_NUMBER,
            "any.required": "order " + ERROR_REQUIRED,
        })
})


export default schemaUpdate;






