import * as BookModel from "../models/BookModel.js";

export const fetchBooks = async (req, res) => {
    try{
        const books = await BookModel.getBooks();
        res.status(200).json({success: true, message: books});
    }catch(e){
        console.log(e);
        res.status(500).json({
            sucess: false,
            message: "Internal Server Error"
        })
    }
}

export const createBooks = async (req, res) => {
    const {title, genre, status} = req.body
    try {
        const bookId = await BookModel.insertBooks(title, genre, status);
        res.status(200).json({sucess : true, message : bookId})
    } catch (e) {
        console.log(e);
        res.status(500).json({status : false, message : "Internal Server Error"})
    }
}

export const editBooks = async (req, res) => {
    const {title, genre, status} = req.body;
    const {bookId} = req.params

    try {
        const updatedID = await BookModel.updateBooks(title, genre, status, bookId);
        res.status(200).json({status : true, message : updatedID})
    } catch (e) {
        console.log(e);
        res.status(500).json({status : false, message : "Interal Server Error"});
    }
}

export const deleteBooks = async (req, res) => {
    const {bookId} = req.params

    try {
        const deleteId = await BookModel.deleteBooks(bookId);
        res.status(200).json({status : true, message : deleteId})
    } catch (e) {
        console.log(e);
        res.status(500).json({status : false, message : "Interal Server Error"});
    }
}