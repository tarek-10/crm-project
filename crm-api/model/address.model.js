const mongoose = require("mongoose");
const addressSchema = require("../schema/address.schema");

const addressModel = mongoose.model("address", addressSchema);
module.exports = addressModel;