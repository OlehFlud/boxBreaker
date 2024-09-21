import {Router} from 'express';
import {historyController} from "../controllers/index.js";
import {checkAccessTokenMiddleware} from "../middlewares/index.js";

const router = Router();

router.get('/', historyController.findAllByParams);
router.get('/open-box', checkAccessTokenMiddleware, historyController.findAllOpenBoxHistory);
router.get('/count-drop-of-box/:id', historyController.findCountOfRewardDropsByParam);


export const historyRouter = router;
