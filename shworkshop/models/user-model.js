/* globals require module */
"use strict";
const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path");

let UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    displayname: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        default: path.join(__dirname, "public/images/favicons", "ms-icon-144x144.png")
    }
});
let User;
UserSchema.statics.createUser =
    function(username, displayname, image) {
        return new User({ username, displayname, image });
    };


mongoose.model("User", UserSchema);
User = mongoose.model("User");
module.exports = User;