import {userRepository} from "../repositories/index.js";

export class UserService {

  async createUser(user) {
    try {
      return await userRepository.createUser(user);
    } catch (e) {
      throw Error()
    }
  }
  addActionToken(userId, tokenObject) {
    try {
      return userRepository.addActionToken(userId, tokenObject);
    } catch (e) {
      console.log('e',e)
      throw Error()
    }
  }

  addUserRewardById(userId, reward) {
    try {
      return userRepository.addReward(userId, reward);
    } catch (e) {
      console.log('e',e)
      throw Error()
    }
  }

  updateUserByParams(params, update) {
    try {
      return userRepository.updateUserByParams(params, update, {new: true});
    } catch (e) {
      throw Error()
    }
  }

  deleteUserById(id) {
    try {
      return userRepository.deleteUserById(id)
    } catch (e) {
      throw Error()
    }
  }

  async findOneByParams(findObject) {
    try {
      return await userRepository.findOneByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }

  async findAllByParams(findObject) {
    try {
      return await userRepository.findAllByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }
}

export const userService = new UserService();
