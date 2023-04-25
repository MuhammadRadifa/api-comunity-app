import express, { Router } from 'express';
import { register } from '../controller/registerController';
import { registerValidator } from '../validator/userValidator';

const router: Router = express.Router();

router.post('/register', registerValidator(), register);

export default router;
