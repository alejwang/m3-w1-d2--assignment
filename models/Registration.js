const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    }
})

const Registration = mongoose.model('Registration', registrationSchema);

console.log('required model');

module.exports = Registration;