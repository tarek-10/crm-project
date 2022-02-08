const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const {
    createUser,
    editUser,
    signInUser,
    deactiveUser,
    activeUser
} = require("../joi/user.validation");

const {
    EDIT_USER,
    DEACTIVE_USER,
    ACTIVE_USER
} = require("../endPoints");
const isAuthorized = require("../../../middleware/isAuthorized");

const router = express.Router();


//create new user
const createNewUser = require("../controller/createNewUser");
router.post("/user/create", handleValidation(createUser), createNewUser)
//end

//verify registerations
const verifyUser = require("../controller/verifyUser");
router.get("/verify/:token", verifyUser);
//end

//edit user
const editUsers = require("../controller/editingUser");
router.put("/user/edit/:id", handleValidation(editUser), isAuthorized(EDIT_USER), editUsers)
//end

//sign in user
const usersSignIn = require("../controller/userSignIn");
router.post("/user/signin", handleValidation(signInUser), usersSignIn)
//end

//deactive user
const deactivatedUsers = require("../controller/deactiveUsers");
router.patch("/user/deactive/:id", handleValidation(deactiveUser), isAuthorized(DEACTIVE_USER), deactivatedUsers)
//end

//acive user
const acivtetedUser = require("../controller/activeUsers");
router.patch("/user/active/:id", handleValidation(activeUser), isAuthorized(ACTIVE_USER), acivtetedUser)
//end


module.exports = router;