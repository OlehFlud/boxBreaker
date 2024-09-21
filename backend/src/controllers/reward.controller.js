import {rewardService} from "../services/index.js";
import {ErrorHandler} from "../errors/index.js";
import {StatusCodes} from "http-status-codes";

export class RewardController {

  async createReward(req, res, next) {
    try {
      const data = req.body;
      const reward = await rewardService.createReward(data);
      res.send({reward})
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }
}

export const rewardController = new RewardController();
