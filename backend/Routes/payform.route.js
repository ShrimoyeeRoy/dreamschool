const express = require("express");
const Pay = require("../Models/payform.model.js");

const route = express.Router();
route.post("/payform", async (req, res) => {
    const { name, email, mobileno, standard, roll, sec, month, fees } = req.body;
    try {
        const PayformIsPresent = await Pay.findOne({ email });
        if (PayformIsPresent){
            return res.status(404).send("email already exist")
        }
        const payData = new Pay({name,email,mobileno,standard,roll,sec,month,fees});
        await payData.save();
        res.status(201).send("User has been created successfully");
    } catch (error) {
        res.status(404).send(error.message)
    }
});
module.exports = route;
