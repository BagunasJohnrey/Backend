import express from 'express';
import * as BookController from '../controllers/BookController.js';
import authHandler from '../middleware/authHandler.js';

const bookRoutes = express.Router()

bookRoutes.use(authHandler);
bookRoutes.get('/all', BookController.fetchBooks);
bookRoutes.post('/new', BookController.createBooks);
bookRoutes.put('/edit/:bookId', BookController.editBooks);
bookRoutes.delete('/delete/:bookId', BookController.deleteBooks);

export default bookRoutes;