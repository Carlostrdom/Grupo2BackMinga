import joi from 'joi-oid';
import {
  ERROR_EMPTY,
  ERROR_REQUIRED,
  ERROR_BOOLEAN,
  ERROR_FORMAT_URL,
  ERROR_FORMAT_ID,
} from "../../schemas/utils/message.js";


const companySchema = joi.object({
  name: joi
    .string()
    .required()
    .messages({
      'any.required': "name " + ERROR_REQUIRED,
      'string.empty': "name " + ERROR_EMPTY,
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
    .required()
    .messages({
      "string.empty": "photo " + ERROR_EMPTY,
      "any.required": "photo " + ERROR_REQUIRED,
      "string.uri": "photo" + ERROR_FORMAT_URL,
    }),
    description: joi
    .string()
    .required()
    .messages({
      "string.empty": "description " + ERROR_EMPTY,
      "any.required": "description" + ERROR_REQUIRED,
    }),
  user_id: joi
    .string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'any.required': "user_id" + ERROR_REQUIRED,
      'string.pattern.base': "user_id" + ERROR_FORMAT_ID,
    }),
  active: joi
    .boolean()
    .messages({
      "boolean.base": "online " + ERROR_BOOLEAN,
      "any.required": "online " + ERROR_REQUIRED,
    }),
});

export default companySchema
