const {
    StatusCodes
} = require("http-status-codes");
const userModel = require("../../../model/user.model");
const bcrypt = require('bcrypt');

const editUsers = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        body
    } = req;
    try {
        const user = await userModel.findOne({
            _id: id
        });

        if (user) {
            if (body.password) {
                const salt = await bcrypt.genSalt(10);
                body.password = await bcrypt.hash(body.password, salt);
            }
            const updatedUser = await userModel.findOneAndUpdate({
                _id: user._id
            }, {
                $set: body
            }, {
                new: true
            });
            res.json({
                message: "user updated successfully...!",
                updatedUser
            })
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
module.exports = editUsers;