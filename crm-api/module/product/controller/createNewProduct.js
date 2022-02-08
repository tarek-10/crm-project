const {
    StatusCodes
} = require("http-status-codes");
const productModel = require("../../../model/product.model");

const newProduct = async (req, res) => {

    let {
        productCode,
        productName,
        productDesc,
        productUnitPrice,
        productUnit
    } = req.body;

    try {

        const product = await productModel.findOne({
            productCode
        });
        if (product) {
            res.json({
                message: "product already exist...!"
            });
        } else {
            const newProducts = await productModel.insertMany({
                productCode,
                productName,
                productDesc,
                productUnitPrice,
                productUnit
            });
            res.status(StatusCodes.CREATED).json({
                message: "product created successfully...!",
                newProducts
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = newProduct;