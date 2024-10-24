import { Router } from 'express';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/registerUser', ApiController.register);

router.get('/listAll', ApiController.listAll);

router.post('/login', ApiController.login);

router.post('/forgotPassword', ApiController.forgotPassword);

export default router;