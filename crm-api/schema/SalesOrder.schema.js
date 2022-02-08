const mongoose = require("mongoose");
const salesOrderSchema = new mongoose.Schema({

    orderNo: {
        type: String,
        required: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    orderDate: {
        type: String,
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'customer',
        required: true
    },
    tax: {
        type: Number,
        default: '14%',
        required: true
    },
    shippingAmount: {
        type: String,
        required: true
    },
    subTotal: {
        type: String,
        required: true
    },
    grandTotal: {
        type: String,
        required: true,
    },

});
module.exports = salesOrderSchema;