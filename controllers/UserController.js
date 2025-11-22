import * as UserModel from '../models/UserModel.js';

export const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const userId = await UserModel.createUser(name, password, email);
        res.status(201).json({
            success: true,
            message: [
                { result: "User registered successfully" },
                { userId: userId }
            ]
        });
    } catch (e) {
        console.log(e);
        const status = e.statusCode || 500;
        const msg = e.message || "Internal Server Error";
        res.status(status).json({ success: false, message: msg });
    }
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const token = await UserModel.login(email, password);
        res.status(200).json({
            success: true,
            message: [
                { result: "Login successful", token},
            ]
        });
    } catch (e) {
        next(e);
    }
};
