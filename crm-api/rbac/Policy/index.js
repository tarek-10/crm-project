const role = require("../../enum/role");
const customerPolicy = require("./customerPolicy");
const userPolicy = require("./userPolicy");

const opts = {

    [role.USER]: {
        can: userPolicy
    },
    [role.CUSTOMER]: {
        can: customerPolicy
    }
}
module.exports = opts;