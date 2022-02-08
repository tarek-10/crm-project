const {
    StatusCodes
} = require("http-status-codes");
const addressModel = require("../../../model/address.model");

const createAddressFun = async (req, res) => {

    let {
        id
    } = req.params;
    let {
        line1,
        line2,
        city,
        state,
        postalCode,
        country,
        shippingAddress,
        billingAddress
    } = req.body;

    try {
        const newAddress = await addressModel.insertMany({
            userId: req.user._id,
            customerId: id,
            line1,
            line2,
            city,
            state,
            postalCode,
            country,
            shippingAddress,
            billingAddress
        });
        res.status(StatusCodes.CREATED).json({
            message: "success created...!",
            newAddress
        });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = createAddressFun;