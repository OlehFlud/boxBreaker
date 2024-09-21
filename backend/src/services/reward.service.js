import {rewardRepository} from "../repositories/index.js";

export class RewardService {

  createReward(reward) {
    try {
      return rewardRepository.createReward(reward);

    } catch (e) {
      throw Error()
    }
  }

  updateRewardByParams(params, update) {
    try {
      return rewardRepository.updateRewardByParams(params, update, {new: true});
    } catch (e) {
      throw Error()
    }
  }

  findOneByParams(findObject) {
    try {
      return rewardRepository.findOneByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }

  findAllByParams(findObject) {
    try {
      return rewardRepository.findAllByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }
  findCountOfDropsByParams(findObject) {
    try {
      return rewardRepository.findAllByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }
}

export const rewardService = new RewardService();
