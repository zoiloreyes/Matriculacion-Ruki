const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect(process.env.DBURL, {useNewUrlParser: true});
mongoose.Promise = Promise;

exports.Matriculas = require("./matriculas");

module.exports = exports;