import Joi from "joi-oid";


const updateCompanySchema = Joi.object({
  name: Joi.string().optional().messages({
    'string.empty': 'The name cannot be empty.',
  }),
  website: Joi.string().uri().optional().messages({
    'string.uri': 'The website must be a valid URL.',
  }),
  photo: Joi.string().uri().optional().messages({
    'string.uri': 'The photo must be a valid URL.',
  }),
  user_id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .optional()
    .messages({
      'string.pattern.base': 'The user_id must be a valid ObjectId.',
    }),
  active: Joi.boolean().optional().messages({
    'boolean.base': 'The active field must be a boolean.',
  }),
}).min(1).messages({
  'object.min': 'At least one field must be provided for update.',
});

export default updateCompanySchema
