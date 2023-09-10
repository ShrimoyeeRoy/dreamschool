const express = require("express");
const Pay = require("../Models/payform.model.js");
const User = require("../Models/user.model.js");
const jwt = require("jsonwebtoken");
const route = express.Router();
route.post("/payform", async (req, res) => {
    const { name, email, guardian, mobileno, standard, roll, section, month, fees } = req.body;
    
    try {  
        const isPresent = await User.findOne({ email })
        if (!isPresent) {
            return
            res.status(404).send({ message: "enter the email used for login" })
        }
        
        const payData = new Pay({ name, email, guardian, mobileno, standard, roll, section, month, fees, paymentScreenshot: null, });
        const token = jwt.sign({
            id: isPresent._id,
            name: isPresent.name,
            email: isPresent.email,
        },
            "SHRI1234",
            {
                expiresIn: "28days",
            }
        );
        await payData.save();
        res.status(201).send({message: "your payment has been created successfully", token });
    } catch (error) {
        res.status(500).send({ 'message': error.message });
    }
});

route.get("/payform", async (req, res) => {
    try {
        const getPay = await Pay.find()
        res.status(200).send({ Pay: getPay });
    } catch (error) {
        res.status(500).send({ "message": error.message });
    }
})








module.exports = route;
