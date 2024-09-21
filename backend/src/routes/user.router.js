import {Router} from 'express';
import {userController} from '../controllers/index.js';
import {checkIsAuthDataCorrectMiddleware, checkIsUserRegisteredByLoginMiddleware} from "../middlewares/index.js";

const router = Router();

router.post('/');

router.post('/', checkIsAuthDataCorrectMiddleware, checkIsUserRegisteredByLoginMiddleware, userController.createUser);

router.get('/', userController.findAll);

router.put('/update/:id',userController.updateUserByParams);

export const userRouter = router;
