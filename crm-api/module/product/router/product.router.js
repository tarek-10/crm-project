const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const isAuthorized = require("../../../middleware/isAuthorized");
const {
    CREATE_PRODUCTS,
    EDIT_PRODUCT
} = require("../endPoints");
const {
    createProduct,
    editProduct
} = require("../joi/product.validation");
const router = express.Router();

//create product
const newProduct = require("../controller/createNewProduct");
router.post("/product/create", handleValidation(createProduct), isAuthorized(CREATE_PRODUCTS), newProduct)
//end

//update product
const updatingProduct = require("../controller/editProducts.controller");
router.put("/product/edit/:id", handleValidation(editProduct), isAuthorized(EDIT_PRODUCT), updatingProduct)
//end
module.exports = router;