const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        minLength:3,
        unique:[true, 'email id already present']
    },
    name: {
        type: String,
        required: true,
        unique:true,
        minLength:3
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        min: 5,
        unique:[true],
    }
})

module.exports = mongoose.model('user', userSchema);