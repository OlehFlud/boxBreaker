import { userService} from '../../services/index.js';
import { CustomErrors, ErrorHandler} from "../../errors/index.js";
import {StatusCodes} from "http-status-codes";

export const checkIsUserExistByLoginMiddleware = async (req, res, next) => {
  const { username } = req.body;

  const userByLogin = await userService.findOneByParams({name: username});

  if (!userByLogin) {
    return next(new ErrorHandler(
      StatusCodes.NOT_FOUND,
      CustomErrors.NOT_FOUND.message,
    ));
  }

  req.user = userByLogin;
  next();
};
