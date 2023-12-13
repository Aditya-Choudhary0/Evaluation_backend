const mongoose = require("mongoose");
require("dotenv").config({
    path: `.env.${process.env.apiurl}`
});
const connection = mongoose.connect(process.env.apiurl);
module.exports = connection