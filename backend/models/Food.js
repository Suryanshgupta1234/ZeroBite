const mongoose = require("mongoose");


const foodSchema = new mongoose.Schema(
    {
        foodName: {
            type: String,
            required: true,
        },

        quantity: {
            type: String,
            required: true,
        },
        expiryTime: {
            type: Date,
            required: true,
        },
        pickupAddress: {
            type: String,
            required: true,
        },

        foodImage: {
            type: String,
            default: "",
        },
        donor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        status: {
            type: String,
            enum: ["available", "claimed", "completed"],
            default: "available",
        },
    },
    {
        timestamp: true,
    }
);


module.exports = mongoose.model("Food", foodSchema);