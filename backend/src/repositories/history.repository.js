import {HistoryModel} from '../models/index.js';

export class HistoryRepository {
  _selectFields = '_id name firstName lastName avatar followers email active';

  createHistory(history) {
    const historyToCreate = new HistoryModel(history);

    return historyToCreate.save();
  }

  updateHistoryByParams(params, update) {
    return HistoryModel.updateOne(params, update, {new: true});
  }

  deleteHistoryById(id) {
    return HistoryModel.findByIdAndDelete(id)
      .select(this._selectFields)
      .lean();
  }

  findOneByParams(findObject) {
    return HistoryModel.findOne(findObject);
  }

  findAllByParams(findObject) {
    return HistoryModel.find(findObject).populate('rewardId');
  }

  findAllByParamsAndCount(findObject) {
    return HistoryModel.find(findObject).countDocuments();
  }
}

export const historyRepository = new HistoryRepository();