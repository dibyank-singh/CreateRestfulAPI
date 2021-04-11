const mongoose = require('mongoose');
const validator = require('validator');


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minlenght: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error("Invalid Email")
            }
        
    },
    phone:{
        type:Number ,
        minlenght:10,
        required:true,
         
    },
    address:{
        type:String,
        required:true,

    }

})


// now we will create our collection 


const Mystudent = new mongoose.model("Mystudent", studentSchema)

module.exports=Mystudent;

