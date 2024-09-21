import { Types } from 'mongoose';
import {UserModel} from '../models/index.js';

export class UserRepository {
  _selectFields = '_id username firstName lastName avatar followers email active';

  createUser(user) {
    const userToCreate = new UserModel(user);

    return userToCreate.save();
  }

  addActionToken(userId, tokenObject) {
    return UserModel.updateOne(
      {_id: new Types.ObjectId(userId)},
      {
        $push: {
          tokens: tokenObject
        }
      }
    );
  }
  addReward(userId, reward) {
    return UserModel.updateOne(
      {_id: userId},
      { $inc: { totalReward: reward } }, // Increment the rewardPoints field
      { new: true }
    );
  }

  updateUserByParams(params, update) {
    return UserModel.updateOne(params, update, {new: true});
  }

  deleteUserById(id) {
    return UserModel.findByIdAndDelete(id)
      .select(this._selectFields)
      .lean();
  }

  async findOneByParams(findObject) {
    return await UserModel.findOne(findObject);
  }

  findUserByActionToken(action, token) {
    return UserModel.findOne({
      $and: [
        {'tokens.action': action},
        {'tokens.token': token}
      ]
    });
  }

  removeActionToken(action, token) {
    return UserModel.update(
      {},
      {
        $pull: {
          $and: [
            {'tokens.token': token},
            {'tokens.action': action}
          ]
        }
      });
  }

  async findAllByParams(findObject) {
    const users = await UserModel.find(findObject);
    return users
  }
}

export const userRepository = new UserRepository();
