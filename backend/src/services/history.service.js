import {historyRepository} from "../repositories/index.js";

export class HistoryService {

  createHistory(history) {
    try {
      return historyRepository.createHistory(history);

    } catch (e) {
      throw Error()
    }
  }

  updateHistoryByParams(params, update) {
    try {
      return historyRepository.updateHistoryByParams(params, update, {new: true});
    } catch (e) {
      throw Error()
    }
  }

  deleteHistoryById(id) {
    try {
      return historyRepository.deleteHistoryById(id)
    } catch (e) {
      throw Error()
    }
  }

  findOneByParams(findObject) {
    try {
      return historyRepository.findOneByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }

  findAllByParams(findObject) {
    try {
      return historyRepository.findAllByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }

  findAllByParamsAndCount(findObject) {
    try {
      return historyRepository.findAllByParamsAndCount(findObject);
    } catch (e) {
      throw Error()
    }
  }
}

export const historyService = new HistoryService();
