const mongoose = require("mongoose");
const customerSchema = require("../schema/customer.schema");

const customerModel = mongoose.model('customer', customerSchema);

module.exports = customerModel;