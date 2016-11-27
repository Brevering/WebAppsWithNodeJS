/* globals require module */
"use strict";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let CitySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        unique: true
    },
    country: {},
    planet: {}
});

let City;
mongoose.model("City", CitySchema);
City = mongoose.model("City");
module.exports = City;