const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const jwt = require('jsonwebtoken');

const verifyUser = async (req, res) => {

    let {
        token
    } = req.params;

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await userModel.findOne({
            email: decoded
        });
        if (!user) {
            res.json({
                message: "User Not Found...!"
            });
        } else {
            if (user.isConfirmed == true) {
                res.json({
                    message: "User Is Already Confirmed...!"
                });
            } else {
                const confirmedUser = await userModel.findOneAndUpdate({
                    email: user.email
                }, {
                    isConfirmed: true
                }, {
                    new: true
                });
                res.json({
                    message: "user confirmed Successully...!",
                    confirmedUser
                })
            }
        }


    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = verifyUser;