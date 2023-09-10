const express = require("express");
const { mongoose } = require("mongoose");
const userRoute = require("./Routes/user.route.js");
const payformRoute = require("./Routes/payform.route.js");
const contactusRoute = require("./Routes/contactus.route.js")
const paymentScreenshot=require("./Routes/payment.route.js")
const cors=require("cors")

const app = express()
app.use(express.json());
app.use(cors());
// app.use("/", (req, res) => {
//  res.send("Backend page is working")
// })

app.use("/v1/api",userRoute);
app.use("/v1/api", payformRoute);
app.use("/v1/api", contactusRoute);
app.use("/v1/api", paymentScreenshot);

const MONGO_URI = "mongodb+srv://shrimoyee912:shrimoyee@cluster0.yc52dps.mongodb.net/school";
const connect = async () => {
try {
    await mongoose.connect(MONGO_URI)
    console.log("Connected to Database");
} catch (error) {
    console.log(error.message);
}}

app.listen(8008, () => {
    connect()
    console.log("http://127.0.0.1:8008");
});