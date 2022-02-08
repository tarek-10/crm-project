const {
    StatusCodes
} = require("http-status-codes");
const addressModel = require("../../../model/address.model");

const updatingAddresses = async (req, res) => {

    let {
        id
    } = req.params;
    let {
        body
    } = req;
    try {
        const address = await addressModel.findOne({
            _id: id
        });
        if (address) {
            const updatedAdress = await addressModel.findOneAndUpdate({
                _id: address._id
            }, {
                $set: body
            }, {
                new: true
            });
            res.status(StatusCodes.OK).json({
                message: "success updated...!",
                updatedAdress
            });
        } else {
            res.json({
                message: "in-valid address"
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = updatingAddresses;