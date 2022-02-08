const {
    CREATE_CUSTOMER,
    GET_CUSTOMER,
    EDIT_CUSTOMER,
    EDIT_CUSTOMER_ADDRESS,
    CREATE_ADDRESS
} = require("../../module/customer/endPoints");
const {
    CREATE_PRODUCTS,
    EDIT_PRODUCT
} = require("../../module/product/endPoints");
const {
    EDIT_USER,
    DEACTIVE_USER,
    ACTIVE_USER
} = require("../../module/user/endPoints");


module.exports = [EDIT_USER, DEACTIVE_USER, ACTIVE_USER, CREATE_CUSTOMER, GET_CUSTOMER, EDIT_CUSTOMER, EDIT_CUSTOMER_ADDRESS, CREATE_ADDRESS, CREATE_PRODUCTS, EDIT_PRODUCT]