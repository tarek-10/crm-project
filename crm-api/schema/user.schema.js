const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    otherPhone: {
        type: String,
    },
    active: {
        type: Boolean,
        default: true
    },
    isConfirmed: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: 'user'
    }
}, {
    timestamps: true
});
module.exports = userSchema;