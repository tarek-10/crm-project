const {
    StatusCodes
} = require("http-status-codes");
const customerModel = require("../../../model/customer.model");

const editingCustomer = async (req, res) => {

    let {
        id
    } = req.params;
    let {
        body
    } = req;

    try {

        const customer = await customerModel.findById({
            _id: id
        });

        if (customer) {
            const updatingCustomer = await customerModel.findOneAndUpdate({
                _id: customer._id
            }, {

                $set: body,
            }, {
                new: true
            });

            res.status(StatusCodes.OK).json({
                message: "Successfully editing...!",
                updatingCustomer
            });
        } else {
            res.json({
                message: "customer doesn't exist...!"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = editingCustomer;