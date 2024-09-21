import {authService, historyService, userService} from "../services/index.js";
import {passwordHasher, tokinizer} from '../helpers/index.js'
import {Action} from "../constants/index.js";
import { StatusCodes } from 'http-status-codes';
import {ErrorHandler} from "../errors/index.js";
export class UserController {

  async createUser(req, res, next) {
    try {
      const user = req.body;

      user.password = await passwordHasher(user.password);

      const { _id } = await userService.createUser(user);

      const { accessToken, refreshToken } = tokinizer(Action.USER_AUTH);

      await userService.addActionToken(
        _id,
        { action: Action.USER_AUTH, token: accessToken },
      );

      await authService.createTokenPair({
        accessToken: accessToken,
        refreshToken: refreshToken,
        userId: _id,
      });

      await historyService.createHistory({ event: Action.USER_AUTH, userId: _id });
      res.json({ accessToken, refreshToken });

    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }

  updateUserByParams(params, update) {
    try {
      return userService.updateUserByParams(params, update, {new: true});
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }

  async findAll(req, res, next) {
    try {
      const users = await userService.findAllByParams({});
      res.send(users);
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }
}

export const userController = new UserController();
