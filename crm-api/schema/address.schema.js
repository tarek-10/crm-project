const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    },
    line1: {
        type: String,
        required: true
    },
    line2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    shippingAddress: {
        type: Boolean,
        default: false
    },
    billingAddress: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = addressSchema;