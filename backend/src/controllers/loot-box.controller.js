import {lootBoxService, historyService, rewardService, userService} from "../services/index.js";
import {Action} from '../constants/action.js'
import {randomReward} from '../helpers/index.js'
import {ErrorHandler} from "../errors/index.js";
import {StatusCodes} from "http-status-codes";

export class LootBoxController {

  async createLootBox(req, res, next) {
    try {
      const data = req.body;

      const lootBox = await lootBoxService.createLootBox(data);

      res.send({lootBox})
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }

  async openLootBox(req, res, next) {
    try {
      const user = req.user;
      const {id} = req.params;
      let history;

      const lootBoxToFind = await lootBoxService.findOneByParams({_id: id});
      const randomRewardToSet =
        await randomReward(lootBoxToFind?.rewards?.map((reward) => reward?.amount), lootBoxToFind?.rewards?.map((reward) => reward?.chance))
      const rewardToSet = lootBoxToFind?.rewards.find(item => item.amount === randomRewardToSet);

      const lootBox = await lootBoxService.updateLootBoxByParams({_id: id}, {isOpened: true});
      if (lootBox && rewardToSet) {
        history = await historyService.createHistory({
          event: Action.OPEN_LOOBOX,
          userId: user?._id,
          lootBoxName: lootBoxToFind?.name,
          openCount: lootBoxToFind?.openCount,
          rewardId: rewardToSet?._id,
        })
      }

      await userService.addUserRewardById({_id: user._id}, rewardToSet?.amount)
      res.send({lootBox, reward: rewardToSet?.amount, history})
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }

  async makeAllLookBoxesInActive(req, res, next) {
    try {
      const lootBoxes = await lootBoxService.updateLootBoxByParams({}, {isOpened: false});
      res.send({lootBoxes})
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }

  async findAllByParams(req, res, next) {
    try {
      const lootBoxes = await lootBoxService.findAllByParams({});
      res.send({lootBoxes})
    } catch (e) {
      throw new ErrorHandler(StatusCodes.BAD_REQUEST, e?.message ? e?.message : 'BAD_REQUEST');
    }
  }
}

export const lootBoxController = new LootBoxController();
