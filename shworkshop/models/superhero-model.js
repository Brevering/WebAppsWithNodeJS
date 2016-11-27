/* globals require module */
"use strict";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path"),
    constants = require("../config/constants");

let SuperheroSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60
    },
    secretIdentity: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true
    },
    alignment: {
        type: String,
        required: true,
        enum: constants.alignments
    },
    story: {
        type: String,
        required: true,
        minLength: 1
    },
    imageUrl: {
        type: String,
        required: true,
        default: path.join(__dirname, "public/images/favicons", "ms-icon-144x144.png")
    },
    fractions: [{}],
    powers: [{}],
    city: {},
    country: {},
    planet: {}
});
let Superhero;

mongoose.model("Superhero", SuperheroSchema);
Superhero = mongoose.model("Superhero");
module.exports = Superhero;