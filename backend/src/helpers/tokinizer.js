import {Action} from "../constants/action.js";
import {config} from '../config/index.js';
import jwt from "jsonwebtoken";

export const tokinizer = (action) => {
  let accessToken = '';
  let refreshToken = '';

  switch (action) {
    case Action.USER_AUTH:
      accessToken = jwt.sign({}, config.JWT_SECRET, { expiresIn: config.ACCESS_TOKEN_LIFETIME });
      refreshToken = jwt.sign({}, config.JWT_REFRESH_SECRET,
        { expiresIn: config.REFRESH_TOKEN_LIFETIME });
      break;

    default:
      throw Error();
  }

  return {
    accessToken,
    refreshToken,
  };
};
