import { Action, RequestHeaders } from '../../constants/index.js';
import { authService } from '../../services/index.js';
import { tokenVerificator } from '../../helpers/index.js';
import {CustomErrors, ErrorHandler} from "../../errors/index.js";
import { StatusCodes } from 'http-status-codes';

export const checkAccessTokenMiddleware = async (req, res, next) => {
  try {
    const token = req.get(RequestHeaders.AUTHORIZATION);

    console.log('token',token);
    if (!token) {
      return next(new ErrorHandler(
        StatusCodes.BAD_REQUEST,
        CustomErrors.BAD_REQUEST_NO_TOKEN.message,
      ));
    }
    await tokenVerificator(Action.USER_AUTH, token);

    const userByToken = await authService.findOneByParams({ accessToken: token });
    if (!userByToken) {
      return next(new ErrorHandler(
        StatusCodes.NOT_FOUND,
        CustomErrors.NOT_FOUND.message,
      ));
    }
    req.user = userByToken;
    next();
  } catch (e) {
    next(e);
  }
};