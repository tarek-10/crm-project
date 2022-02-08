const {
    Module
} = require("module");
const mongoose = require("mongoose");

const connection = async () => {

    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((result) => {
        console.log("DB Connected Successfully...!");
    }).catch((error) => {
        console.log("Fail To Connect DB...!");
    })
}
module.exports = connection;