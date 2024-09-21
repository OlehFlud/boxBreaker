import {historyService} from "../services/index.js";
import {ErrorHandler} from "../errors/index.js";
import {StatusCodes} from "http-status-codes";

export class HistoryController {

  createHistory(history) {
    try {
      return historyService.createHistory(history);

    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }


  async findAllByParams(req, res, next) {
    try {
      const histories = await historyService.findAllByParams({});
      res.send({
        histories
      })
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }
  async findAllOpenBoxHistory(req, res, next) {
    try {
      const histories = await historyService.findAllByParams({event: 'open_lootBox'});
      res.send({
        histories
      })
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }
  async findCountOfRewardDropsByParam(req, res, next) {
    try {
      const {id} = req.params;
      const histories = await historyService.findAllByParamsAndCount({rewardId: id});
      res.send({
        histories
      })
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }
}

export const historyController = new HistoryController();
