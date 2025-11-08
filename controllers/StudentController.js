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