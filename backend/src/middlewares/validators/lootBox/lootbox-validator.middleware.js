import Joi from 'joi';

export const lootBoxValidator = Joi.object({
  name: Joi.string().trim().required(),
  openCount: Joi.number().integer(),
  isOpened: Joi.boolean(),
  rewards: Joi.array().required(),
});

