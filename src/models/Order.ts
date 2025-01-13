import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User",
        type: String,
        required: true
    },
    products: [{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Product",
        type: Array<String>,
        required: true
    }],
    photos: {
        type: Array<String>,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

export const Order = mongoose.model("Order", orderSchema);