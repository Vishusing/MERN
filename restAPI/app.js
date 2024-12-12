import express from "express";
import product_routes from './routes/products.js';
import connectDB from "./dB/connect.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hii I am live");
});
 
app.use('/api/products', product_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT,() => {
            console.log(`App is running on ${PORT}`)
        });
    } catch (err) {
        console.log(err);
    } 
};

start();  

