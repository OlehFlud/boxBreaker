import { userService} from '../../services/index.js';
import { CustomErrors, ErrorHandler} from "../../errors/index.js";
import {StatusCodes} from "http-status-codes";

export const checkIsUserRegisteredByLoginMiddleware = async (req, res, next) => {
  const { username } = req.body;

  const userByLogin = await userService.findOneByParams({name: username});

  if (userByLogin) {
    return next(new ErrorHandler(
      StatusCodes.FORBIDDEN,
      CustomErrors.BAD_REQUEST_USER_ACTIVATED.message,
    ));
  }

  req.user = userByLogin;
  next();
};
