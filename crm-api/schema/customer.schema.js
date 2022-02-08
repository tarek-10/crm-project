const mongoose = require("mongoose");
const addressSchema = require("./address.schema");
const customerSchema = new mongoose.Schema({

    code: {
        type: String,
        required: true
    },
    firtname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    otherPhone: {
        type: String
    },
    address: [addressSchema]

});

module.exports = customerSchema;