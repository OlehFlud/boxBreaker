import {accessTokenRepository} from "../repositories/index.js";

export class AuthService {

  createTokenPair(data) {
    try {
      return accessTokenRepository.createAccessToken(data);
    } catch (e) {
      throw Error()
    }
  }

  removeToken(removeObject) {
    try {
      return accessTokenRepository.findOneAndDelete(removeObject);
    } catch (e) {
      throw Error()
    }
  }

  async findOneByParams(findObject) {
    try {
      const tokenAndUser = await accessTokenRepository
        .findOneByParams(findObject)
        .populate('userId')
        .select({userId: 1, _id: 0});

      return tokenAndUser?.userId.toJSON();
    } catch (e) {
      console.log('e',e)
      throw Error()
    }
  }
}

export const authService = new AuthService();
