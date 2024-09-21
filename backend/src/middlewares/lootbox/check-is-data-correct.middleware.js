import {ErrorHandler} from "../../errors/index.js";
import {StatusCodes} from "http-status-codes";
import Joi from "joi";
import {lootBoxValidator} from "../validators/index.js";

export const checkIsLootBoxDataCorrectMiddleware = async (req, res, next) => {
  const { error } = Joi.validate(req.body, lootBoxValidator);

  if (error) {
    return next(new ErrorHandler(StatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};
