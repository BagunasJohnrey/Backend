import pool from '../config/db.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (name, password, email) => {
    if (name.trim() === '' || password.trim() === '' || email.trim() === '') {
        const error = new TypeError('All fields are required');
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isEmail(email)) {
        const error = new TypeError('Invalid email format');
        error.statusCode = 400;
        throw error;
    }

    if (!validator.isStrongPassword(password)) {
        const error = new TypeError('Password is not strong enough');
        error.statusCode = 400;
        throw error;
    }

    const [rows] = await pool.query('SELECT * FROM tbluser WHERE email = ?', [email]);
    if (rows.length > 0) {
        const error = new TypeError(`The email ${email} already exists`);
        error.statusCode = 400;
        throw error;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const [result] = await pool.query(
        'INSERT INTO tbluser (name, password, email) VALUES (?, ?, ?)',
        [name, hashedPassword, email]
    );

    return result.insertId;
};


export const login = async (email, password) => {
    if(email.trim() === '' || password.trim() === ''){
        const error = new Error('Email and Password Required')
        error.statusCode = 400;
        throw error;
    }

    const [user] = await pool.query("SELECT * FROM tbluser WHERE email = ?", [email]);
    
    if(user.length === 0){
        const error = new Error(`The email ${email} does not exist.`);
        error.statusCode = 400;
        throw error;
    }

    if(!bcrypt.compareSync(password, user[0].password)){
        const error = new Error(`Incorrect Password.`)
        error.statusCode = 400;
        throw error;
    }

    const token = jwt.sign(
        {id: user[0].id},
        process.env.SECRET,
        {expiresIn: '1d'}
    )

    return token;
}

export const getUser = async (id) => {
    if(parseInt(id) === NaN){
        throw new Error('Invalid User ID');
    }

    const [user] = await pool.query("SELECT * FROM tbluser WHERE id = ?", [id]);
    return user;
}