const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const usersSignIn = async (req, res) => {

    const {
        username,
        password
    } = req.body;

    try {

        const user = await userModel.findOne({
            username
        });

        if (user) {
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                const token = jwt.sign({
                    _id: user._id,
                    username: user.username,
                    role: user.role
                }, process.env.SECRET_KEY);
                res.status(StatusCodes.OK).json({
                    message: "success",
                    token,
                    data: {
                        _id: user._id,
                        username: user.username,
                        email: user.email
                    }
                })


            } else {
                res.json({
                    message: "in-valid password...!"
                });
            }

        } else {
            res.json({
                message: "User Not Found...!"
            })
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = usersSignIn;