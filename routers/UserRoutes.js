import express from 'express';
import * as UserController from '../controllers/UserController.js';
import authHandler from '../middleware/authHandler.js';

const userRoutes = express.Router();

userRoutes.post('/register', UserController.registerUser);
userRoutes.post('/login', UserController.login);

export default userRoutes;
