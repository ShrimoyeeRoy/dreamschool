const express = require("express");
const Contact = require("../Models/contactus.model.js");

const route = express.Router();
route.post("/contactus", async (req, res) => {
    const { name, email, sub, message } = req.body;
    try {
        const contactData = new Contact({ name, email, sub, message });
        await contactData.save();
        res.status(201).send("Thank You to hear from you");
    } catch (error) {
        res.status(404).send(error.message)
    }
});

route.get("/contactus", async (req, res) => {
try {
    const getContactus = await Contact.find()
    res.status(200).send({ Contact: getContactus });
    
} catch (error) {
    res.status(500).send({ message: error.message });
    }
})


module.exports = route;