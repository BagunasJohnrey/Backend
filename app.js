import express from 'express';
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js'; 
import studentRoutes from './routers/StudentRoutes.js';


const app = express();

// Middleware
app.use(express.json());   

try{
    app.listen(process.env.PORT, () => {
        console.log(`Listening on http://localhost:${process.env.PORT}`);
    });     
}catch(e){
    console.error(e);
}

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);

