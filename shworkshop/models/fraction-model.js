/* globals require module */
"use strict";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    constants = require("../config/constants");


let FractionSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
        unique: true
    },
    alignment: {
        type: String,
        required: true,
        enum: constants.alignments
    },
    superheroes: [{}],
    cities: [{}],
    planets: [{}]
});

let Fraction;
mongoose.model("Fraction", FractionSchema);
Fraction = mongoose.model("Fraction");
module.exports = Fraction;