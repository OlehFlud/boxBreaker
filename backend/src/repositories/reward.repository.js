import {RewardModel} from '../models/index.js';

export class RewardRepository {
  _selectFields = '_id name firstName lastName avatar followers email active';

  createReward(reward) {
    const rewardToCreate = new RewardModel(reward);

    return rewardToCreate.save();
  }

  updateRewardByParams(params, update) {
    return RewardModel.updateOne(params, update, {new: true});
  }

  deleteRewardById(id) {
    return RewardModel.findByIdAndDelete(id)
      .select(this._selectFields)
      .lean();
  }

  findOneByParams(findObject) {
    return RewardModel.findOne(findObject);
  }

  findAllByParams(findObject) {
    return RewardModel.find(findObject);
  }
}

export const rewardRepository = new RewardRepository();