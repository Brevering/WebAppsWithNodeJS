/* globals require module */
"use strict";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

let PlanetSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        unique: true
    },
    countries: [{}]
});

let Planet;
mongoose.model("Planet", PlanetSchema);
Planet = mongoose.model("Planet");
module.exports = Planet;