const { Schema, model } = require("mongoose");

const payformSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    mobileno: {
        type: Number,
        require: true
    },
    guardian: {
        type: String,
        require: true
    },
    standard: {
        type:Number,
        require: true
    },
    roll: {
        type: Number,
        require: true
    },
    section: {
        type: String,
        require: true
    },
    month: {
        type: String,
        require: true
    },
    fees: {
        type: Number,
        require: true
    },
    paymentScreenshot: {
        type: String,
    }

}, { timestamps: true });
const Pay = model("payforms", payformSchema);
module.exports=Pay