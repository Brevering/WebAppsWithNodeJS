/* globals require module */
"use strict";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let CountrySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        unique: true
    },
    cities: [{}],
    planet: {}
});

let Country;
mongoose.model("Country", CountrySchema);
Country = mongoose.model("Country");
module.exports = Country;