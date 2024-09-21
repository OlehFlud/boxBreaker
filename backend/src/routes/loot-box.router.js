import {Router} from 'express';

const router = Router();
import {lootBoxController} from '../controllers/index.js';
import {checkAccessTokenMiddleware, checkIsLootBoxDataCorrectMiddleware} from "../middlewares/index.js";

router.post('/', checkIsLootBoxDataCorrectMiddleware, lootBoxController.createLootBox);

router.post('/open/:id',checkAccessTokenMiddleware, lootBoxController.openLootBox);

router.post('/default',lootBoxController.makeAllLookBoxesInActive);

router.get('/',lootBoxController.findAllByParams);


export const lootBoxRouter = router;
