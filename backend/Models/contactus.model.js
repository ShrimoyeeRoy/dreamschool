const { Schema, model } = require("mongoose");
const contactusSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    sub:{
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
}, { timestamps: true });
const Contact = model("contacts", contactusSchema);
module.exports = Contact