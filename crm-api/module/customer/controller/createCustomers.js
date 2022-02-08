const {
    StatusCodes
} = require("http-status-codes");
const customerModel = require("../../../model/customer.model");

const newCustomer = async (req, res) => {

    let {
        code,
        firtname,
        lastname,
        email,
        phone,
        address,
        line1,
        line2,
        city,
        state,
        postalCode,
        country
    } = req.body;

    try {
        const customer = await customerModel.findOne({
            email
        });
        if (customer) {
            res.json({
                message: "customer already exist...!"
            });
        } else {
            id = req.user._id;
            const createdCustomer = await customerModel.insertMany({
                code,
                firtname,
                lastname,
                email,
                phone,
            })

            res.status(StatusCodes.CREATED).json({
                message: "created Successfully...!",
                createdCustomer
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = newCustomer;