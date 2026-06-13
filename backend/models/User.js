const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
        },

        email:{
            type:String,
            require:true,
            unique:true,
        },


        password:{
            type:String,
            reuired:true,
        },

        role:{
            type:String,
            enum:["donor","ngo","volunteer","admin"],
            default:"donor",
        },
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("User", userSchema);