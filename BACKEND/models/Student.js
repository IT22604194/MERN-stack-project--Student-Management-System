const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    position : {
        type : String,
        required: true
    },
    grade : {
        type : String,
        required: true,
        enum: ['1-2','3-4','5-7'],
        default: '1-2'
    },
    password : {
        type : String,
        required: true,
        minlength: 6 // password should be at 6 characters
    },
    phoneNumber: {
        type: Number,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v); // Ensures phone number is 10 digits
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    address: {
        type: String,
        required: true,
        minlength: 10 // Address must be at least 10 characters
    },
    age:{
        type:Number,
        required: true
    },
    gender:{
        type:String,
        required:true

    }
})

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;