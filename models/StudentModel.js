import pool from '../config/db.js';

export const getStudent = async () => {
    const[rows] = await pool.query("SELECT * FROM tblstudent");
    return rows;
}

export const insertStudent = async (name, srcode, course) => {
    const [results] = await pool.query("INSERT INTO tblstudent(name, srcode, course) VALUES(?,?,?)",
    [name, srcode, course]
    );
    return results.insertID;
}

export const updateStudent = async (name, srcode, course, studentId) => {
    const [results] = await pool.query("UPDATE tblstudent SET name= ?, srcode= ?, course= ? WHERE id= ?",
    [name, srcode, course, studentId]
    );
    return results.affectedRows;
}

export const deleteStudent = async (studentId) => {
    const [results] = await pool.query("DELETE FROM tblstudent WHERE id= ?", [studentId]
    );
    return results.affectedRows;
}