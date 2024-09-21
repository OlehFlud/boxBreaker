import {AccessTokenModel} from '../models/index.js';

export class AccessTokenRepository {

  createAccessToken(accessToken) {
    const accessTokenToCreate = new AccessTokenModel(accessToken);

    return accessTokenToCreate.save();
  }

  deleteAccessTokenById(id) {
    return AccessTokenModel.findByIdAndDelete(id)
      .lean();
  }

  findOneByParams(findObject) {
    return AccessTokenModel.findOne(findObject);
  }


  findOneAndDelete(findObject) {
    return AccessTokenModel.findOneAndDelete(findObject);
  }
}

export const accessTokenRepository = new AccessTokenRepository();
