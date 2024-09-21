import {Router} from 'express';

const router = Router();
import {rewardController} from '../controllers/index.js';
import {checkIsRewardDataCorrectMiddleware} from "../middlewares/index.js";

router.post('/', checkIsRewardDataCorrectMiddleware, rewardController.createReward);

export const rewardRouter = router;
