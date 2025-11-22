import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js'; 
import studentRoutes from './routers/StudentRoutes.js';
import userRoutes from './routers/UserRoutes.js';
import cors from 'cors';


const app = express();

let corsOptions = {
    origin : process.env.ORIGIN
}

// Middleware
app.use(express.json());   
app.use(cors(corsOptions));

//this is used to log the req on the console
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

try{
    app.listen(process.env.PORT, () => {
        console.log(`Listening on http://localhost:${process.env.PORT}`);
    });     
}catch(e){
    console.error(e);
}

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);




