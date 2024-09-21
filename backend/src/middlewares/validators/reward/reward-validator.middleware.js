import Joi from 'joi';

export const rewardValidator = Joi.object({
  amount: Joi.number(),
  chance: Joi.number().max(100),
});
