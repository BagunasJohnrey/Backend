import express from 'express';
import * as StudentController from '../controllers/StudentController.js';

const studentRoutes = express.Router()

studentRoutes.get('/all', StudentController.fetchStudent);

export default studentRoutes;