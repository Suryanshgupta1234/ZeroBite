const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
    {
        food:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Food",
            required:true,
        },

        ngo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },

    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending",
    },
    },
    {
        timestamp:true,
    }

    
);

module.exports = mongoose.model("Claim", claimSchema);