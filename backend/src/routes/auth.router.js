import {Router} from 'express';
import { authController } from '../controllers/index.js';
import {checkIsUserExistByLoginMiddleware} from "../middlewares/index.js";

const router = Router();

router.post('/',
  checkIsUserExistByLoginMiddleware,
  authController.auth);

router.post('/logout', authController.logout);

export const authRouter = router;
