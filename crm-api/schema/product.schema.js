const {
    number
} = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    productCode: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productDesc: {
        type: String,
    },
    productUnitPrice: {
        type: Number,
        required: true
    },
    productUnit: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
module.exports = productSchema;