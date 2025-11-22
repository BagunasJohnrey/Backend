import jwt from 'jsonwebtoken';
import * as UserModel from '../models/UserModel.js';

const authHandler = async (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization){
        res.status(401).json({success: false, message: [{result: "Unauthorized Access"}]})
    }

    const token = authorization.split(" ")[1];

    try{
        const {id} = jwt.verify(token, process.env.SECRET);
        const user = await UserModel.getUser(id);
        
        next();
    }catch(e){
        res.status(401).json({success: false, message: [{result: "Request Unauthorized"}]})
    }
}

export default authHandler;