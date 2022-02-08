const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const isAuthorized = require("../../../middleware/isAuthorized");
const {
    CREATE_CUSTOMER,
    GET_CUSTOMER,
    EDIT_CUSTOMER,
    EDIT_CUSTOMER_ADDRESS,
    CREATE_ADDRESS
} = require("../endPoints");
const {
    creteCustomer,
    getCustomers,
    editCustomers,
    editCustomerAddress,
    createAddress
} = require("../joi/customer.validation");

const router = express.Router();

//create customer
const newCustomer = require("../controller/createCustomers");
router.post("/customer/create", handleValidation(creteCustomer), isAuthorized(CREATE_CUSTOMER), newCustomer)
//end

//create Address
const createAddressFun = require("../controller/createNewAddress");
router.post("/address/create/:id", handleValidation(createAddress), isAuthorized(CREATE_ADDRESS), createAddressFun)
//end

//find customer
const getCustomerById = require("../controller/getCustomer");
router.get("/customer/:id", handleValidation(getCustomers), isAuthorized(GET_CUSTOMER), getCustomerById)
//end

//edit customer
const editingCustomer = require("../controller/editExistCustomer");
router.put("/cutomer/edit/:id", handleValidation(editCustomers), isAuthorized(EDIT_CUSTOMER), editingCustomer)
//end

//edit customer address
const updatingAddresses = require("../controller/editCustomerAddress");
router.put("/customer/address/:id", handleValidation(editCustomerAddress), isAuthorized(EDIT_CUSTOMER_ADDRESS), updatingAddresses)
//end

module.exports = router;