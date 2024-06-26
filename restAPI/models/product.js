import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["Apple", "DELL", "MOTOROLA", "MI", "Samsung", "Google", "Razer", "Microsoft", "ASUS", "Lenovo", "Acer"],
            message: `{VALUE} is not supported`
        } 
    }
});

export default model('Product', productSchema);