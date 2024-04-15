const connectDB = require("./dB/connect");
const Product = require("./models/product");

const productJson = require("./products.json");

require("dotenv").config();

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
};

start(); 