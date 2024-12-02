import Joi from 'joi-oid';



const companySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'The name field is required.',
    'string.empty': 'The name cannot be empty.',
  }),
  website: Joi.string().uri().optional().messages({
    'string.uri': 'The website must be a valid URL.',
  }),
  photo: Joi.string().uri().required().messages({
    'any.required': 'The photo field is required.',
    'string.empty': 'The photo cannot be empty.',
    'string.uri': 'The photo must be a valid URL.',
  }),
  user_id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      'any.required': 'The user_id field is required.',
      'string.pattern.base': 'The user_id must be a valid ObjectId.',
    }),
  active: Joi.boolean().required().messages({
    'any.required': 'The active field is required.',
  }),
});

export default companySchema
