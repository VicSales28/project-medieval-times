import { Router } from 'express';

import loginController from '../controllers/login.controller';

import checkRequiredFields from '../middlewares/login.middleware';

const loginRouter = Router();

loginRouter.post('/login', checkRequiredFields, loginController.login);

export default loginRouter;