const {
    StatusCodes
} = require("http-status-codes");
const customerModel = require("../../../model/customer.model");

const getCustomerById = async (req, res) => {

    let {
        id
    } = req.params;

    try {
        const customer = await customerModel.findOne({
            _id: id
        });
        res.status(StatusCodes.OK).json({
            message: "success",
            customer
        })
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = getCustomerById;