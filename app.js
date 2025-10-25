import express from 'express';
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());   

try{
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`);
    });     
}catch(e){
    console.error(e);
}

app.get('/jarey', async (request, response) => {
    response.status(200).json({ message: 'Hello Jarey Bagunas' });
});

