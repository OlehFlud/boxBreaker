import {authService} from "../services/index.js";
import { tokinizer, comparePassword } from '../helpers/index.js';
import { Action, RequestHeaders } from '../constants/index.js';
import { StatusCodes } from 'http-status-codes';
import {CustomErrors, ErrorHandler} from "../errors/index.js";

export class AuthController {

  async auth(req, res, next) {
    try {
      const { _id, password } = req.user;
      const authInfo = req.body;
      const isPasswordEquals = await comparePassword(authInfo.password, password);

      if (!isPasswordEquals) {
        return next(
          new ErrorHandler(
            StatusCodes.NOT_FOUND,
            CustomErrors.NOT_FOUND.message,
          ),
        );
      }

      const { accessToken, refreshToken } = tokinizer(Action.USER_AUTH);

      await authService.createTokenPair({
        accessToken: accessToken,
        refreshToken: refreshToken,
        userId: _id,
      });

      res.json({ accessToken, refreshToken });
    } catch (e) {
      next(e)
    }
  }


  async logout(req, res, next) {
    try {
      const accessToken = req.get(RequestHeaders.AUTHORIZATION);
      console.log('accessToken',accessToken);
      await authService.removeToken({ accessToken });

      res.sendStatus(StatusCodes.NO_CONTENT);

    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }
}

export const authController = new AuthController();
