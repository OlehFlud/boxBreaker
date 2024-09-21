
import jsonwebtoken from 'jsonwebtoken';
const { verify } = jsonwebtoken;
const verifyPromise = promisify(verify);
import { promisify } from 'util';
import { StatusCodes } from 'http-status-codes'
  ;
import {CustomErrors, ErrorHandler} from "../errors/index.js";
import {Action} from "../constants/action.js";
import {config} from '../config/index.js';

export const tokenVerificator = async (action, token) => {
  try {
    let isValid;
    switch (action) {
      case Action.USER_AUTH:
        isValid = await verifyPromise(token, config.JWT_SECRET);
        break;
      default:
        throw new ErrorHandler(StatusCodes.BAD_REQUEST, 'wrong Action type');
    }
    return isValid;
  } catch (e) {
    throw new ErrorHandler(StatusCodes.UNAUTHORIZED, CustomErrors.UNAUTHORIZED_BAD_TOKEN.message);
  }
};
