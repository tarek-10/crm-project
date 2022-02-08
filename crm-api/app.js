const express = require("express");
const connection = require("./config/configration");
const {
    userRouter,
    customerRouter,
    productRouter
} = require("./router/app.router");

const app = express();

require('dotenv').config();

const port = process.env.PORT;
connection();
app.use(express.json());
app.use(userRouter);
app.use(customerRouter);
app.use(productRouter);

app.listen(port, () => {
    console.log(`App Listening Successfully at port ${port}`);
})