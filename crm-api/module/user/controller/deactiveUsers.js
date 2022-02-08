const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const deactivatedUsers = async (req, res) => {


    let {
        id
    } = req.params;

    try {
        const user = await userModel.findOne({
            _id: id
        });
        if (user) {
            if (user.active === true) {
                const deActivetedUser = await userModel.findOneAndUpdate({
                    _id: user._id
                }, {
                    active: false
                }, {
                    new: true
                })
                res.status(StatusCodes.OK).json({
                    message: "user DeActiveted Successfully...!",
                    deActivetedUser
                });
            } else {
                res.json({
                    message: "user already deactiveted ...!"
                });
            }
        } else {
            res.json({
                message: "User Not Found...!"
            });
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }
}
module.exports = deactivatedUsers;