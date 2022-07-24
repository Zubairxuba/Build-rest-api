const mongoose = require("mongoose")

const mongooseSchma = new mongoose.Schema(
    {
        name : {
            type : String,
            require: true,
            minLength : 3
        },
        class: {
            type : String,
        },
        email: {
            type: String,
            require : true,
            unique : true
        },
        Phone: {
            type: Number,
            require: true,
            minLength: 11
        },

        address: {
            type: String,
            require: true
        }
        
    }
)


module.exports=  mongoose.model("student", mongooseSchma) 