import * as StudentModel from "../models/StudentModel.js";

export const fetchStudent = async (req, res) => {
    try{
        const students = await StudentModel.getStudent();
        res.status(200).json({success: true, message: students});
    }catch(e){
        console.log(e);
        res.status(500).json({
            sucess: false,
            message: "Internal Server Error"
        })
    }
}

export const createStudent = async (req, res) => {
    const {name, srcode, course} = req.body
    try {
        const bookId = await StudentModel.insertStudent(name, srcode, course);
        res.status(200).json({sucess : true, message : bookId})
    } catch (e) {
        console.log(e);
        res.status(500).json({status : false, message : "Internal Server Error"})
    }
}

export const editStudent = async (req, res) => {
    const {name, srcode, course} = req.body;
    const {studentId} = req.params

    try {
        const updatedID = await StudentModel.updateStudent(name, srcode, course, studentId);
        res.status(200).json({status : true, message : updatedID})
    } catch (e) {
        console.log(e);
        res.status(500).json({status : false, message : "Interal Server Error"});
    }
}

export const deleteStudent = async (req, res) => {
    const {studentId} = req.params

    try {
        const deleteId = await StudentModel.deleteStudent(studentId);
        res.status(200).json({status : true, message : deleteId})
    } catch (e) {
        console.log(e);
        res.status(500).json({status : false, message : "Interal Server Error"});
    }
}