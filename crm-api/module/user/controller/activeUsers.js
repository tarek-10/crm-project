const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");

const acivtetedUser = async (req, res) => {

    let {
        id
    } = req.params;

    try {
        const user = await userModel.findOne({
            _id: id
        });
        if (user) {
            if (user.active == true) {
                res.json({
                    message: "user is already active...!"
                });
            } else {
                const updateUser = await userModel.findOneAndUpdate({
                    _id: user._id
                }, {
                    active: true
                }, {
                    new: true
                });
                res.status(StatusCodes.OK).json({
                    message: "success user is activeted...!",
                    updateUser
                });
            }
        } else {
            res.json({
                message: "in-valid user...!"
            });
        }
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: "error",
            error
        });
    }

}
module.exports = acivtetedUser;