const res = require("express/lib/response");
const {
    StatusCodes
} = require("http-status-codes");
const productModel = require("../../../model/product.model");

const updatingProduct = async (req, res) => {

    let {
        id
    } = req.params;
    let {
        body
    } = req;
    try {
        const product = await productModel.findById({
            _id: id
        });
        if (product) {
            const updatedProduct = await productModel.findByIdAndUpdate({
                _id: product._id
            }, {
                $set: body
            });
            res.status(StatusCodes.OK).json({
                message: "success",
                updatedProduct
            });
        } else {
            res.json({
                message: "in-valid product"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = updatingProduct;