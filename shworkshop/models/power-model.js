/* globals require module */
"use strict";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let PowerSchema = new Schema({
    name: {
        type: String,
        //required: true,
        minlength: 3,
        maxlength: 35,
        unique: true
    }
});
let Power;
mongoose.model("Power", PowerSchema);
Power = mongoose.model("Power");
module.exports = Power;