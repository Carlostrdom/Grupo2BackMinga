import joi from "joi-oid";
import {
  ERROR_FORMAT_ID,
  ERROR_EMPTY,
  ERROR_REQUIRED,
  ERROR_BOOLEAN,
  ERROR_FORMAT_URL,
} from "../../schemas/utils/message.js";


const updateCompanySchema = joi.object({
  _id: joi
    .objectId()
    .required()
    .messages({
      "string.pattern.name": "_id " + ERROR_FORMAT_ID,
      "any.required": "_id " + ERROR_REQUIRED,
    }),
  name: joi
    .string()
    .optional()
    .messages({
      "string.empty": "name" + ERROR_EMPTY,
    }),
  website: joi
    .string()
    .uri()
    .optional()
    .messages({
      "string.empty": "website " + ERROR_EMPTY,
      "string.uri": "website" + ERROR_FORMAT_URL,
    }),
  photo: joi
    .string()
    .uri()
    .optional()
    .messages({
      "string.empty": "photo " + ERROR_EMPTY,
      "any.required": "photo " + ERROR_REQUIRED,
    }),
  user_id: joi
    .string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .optional()
    .messages({
      'string.pattern.base': "user_id" + ERROR_FORMAT_ID,
    }),
  active: joi
    .boolean()
    .optional()
    .messages({
      "boolean.base": "active" + ERROR_BOOLEAN,
    }),
})

export default updateCompanySchema
