/* globals module require */

const express = require("express"),
    favicon = require("serve-favicon"),
    logger = require("morgan"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    session = require("express-session");

module.exports = function({ data }) {
    let app = express();

    app.set("view engine", "pug");
    app.use(favicon("./public/favicon.ico"));

    app.use("/static", express.static("public"));

    app.use(logger("dev"));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    

    return app;
};