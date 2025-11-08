import express from 'express';
import * as BookController from '../controllers/BookController.js';

const bookRoutes = express.Router()

bookRoutes.get('/all', BookController.fetchBooks);
bookRoutes.get('/all', BookController.fetchBooks);

export default bookRoutes;