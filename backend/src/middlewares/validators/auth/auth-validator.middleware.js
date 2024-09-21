import Joi from 'joi';

import { ReqexpEnum } from '../../../constants/index.js';

export const authValidator = Joi.object({
  name: Joi.string().trim().max(30).required(),
  password: Joi.string().trim().required(),
});

export const AuthValidator = authValidator;