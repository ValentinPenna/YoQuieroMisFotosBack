import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photosNumber: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    photos: {
        type: Array<String>,
    }
});

export const Product = mongoose.model("Product", productSchema);