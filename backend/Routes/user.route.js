const express = require("express");
const User = require("../Models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const route = express.Router();

route.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isPresent = await User.findOne({ email });
        if (isPresent) {
            return res.status(404).send("email already exist")
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const userData = new User({ name, email, password: hashPassword });
        await userData.save();
        res.status(201).send("User has been created successfully");
    } catch (error) {
        res.status(503).send(error.message)
    }
});

route.get("/signup", async (req, res) => {
    try {
        const getSign = await User.find()
        res.status(200).send({ User: getSign });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
})

route.post("/login", async (req, res) => {
   
    const { email, password } = req.body;
    try {
        const isEmailPresent = await User.findOne({ email });
        if (!isEmailPresent) {
            return res.status(404).send("Invalid Email ID")
        }
        const compPass = await bcrypt.compare(password, isEmailPresent.password);//compare the password
        if (compPass) {
            // const { password, ...otherdata } = isEmailPresent.toObject()
            const token = jwt.sign({
                id: isEmailPresent._id,
                name: isEmailPresent.name,
                email: isEmailPresent.email,
            },
                "SHRI1234", {
                expiresIn: "28days",
            }
            );
            // res.status(200).send({ message: "Login Success", User: otherdata });
            res.status(200).send({ message: "Login Success", User: token });
        }
            else {
                res.status(404).send("Invalid Password");

            }
    } catch (error) {
        res.status(503).send(error.message);
    }     
})
module.exports = route;
