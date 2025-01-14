import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    photos: [{
        type: String,
        required: true
    }],
    total: {
        type: Number,
        required: true
    }
});

export const Order = mongoose.model("Order", orderSchema);