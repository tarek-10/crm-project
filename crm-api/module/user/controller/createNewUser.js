const {
    StatusCodes
} = require("http-status-codes");
const senEmail = require("../../../middleware/sendEmail");
const userModel = require("../../../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {

    let {
        username,
        email,
        firstname,
        lastname,
        password,
        phone
    } = req.body;

    try {
        const user = await userModel.findOne({
            username
        });
        if (user) {
            res.json({
                message: "User Is Already Exist...!"
            });
        } else {
            const token = jwt.sign(email, process.env.SECRET_KEY);

            let message = `<a href='http://localhost:5000/verify/${token}'>verify your registeration</a>`

            bcrypt.hash(password, 10, async function (err, hash) {
                if (err) throw err;
                const registeredUser = await userModel.insertMany({
                    username,
                    email,
                    firstname,
                    lastname,
                    password: hash,
                    phone
                })
                await senEmail(email, message);
                res.status(StatusCodes.CREATED).json({
                    message: "User Created Successfully...!",
                    registeredUser
                })
            });

        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}

module.exports = createNewUser;