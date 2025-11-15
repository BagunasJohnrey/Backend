import pool from '../config/db.js';

export const getBooks = async () => {
    const[rows] = await pool.query("SELECT * FROM tblbook");
    return rows;
}

export const insertBooks = async (title, genre, status) => {
    const [results] = await pool.query("INSERT INTO tblbook(title, genre, status) VALUES(?,?,?)",
    [title, genre, status]
    );
    return results.insertID;
}

export const updateBooks = async (title, genre, status, bookId) => {
    const [results] = await pool.query("UPDATE tblbook SET title= ?, genre= ?, status= ? WHERE id= ?",
    [title, genre, status, bookId]
    );
    return results.affectedRows;
}

export const deleteBooks = async (bookId) => {
    const [results] = await pool.query("DELETE FROM tblbook WHERE id= ?", [bookId]
    );
    return results.affectedRows;
}
