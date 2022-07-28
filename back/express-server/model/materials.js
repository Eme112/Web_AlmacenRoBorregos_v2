////////////////////////////// DEPENDENCIES //////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

////////////////////////////// STRUCTURE AND SCHEMA //////////////////////////////
const materialSchema = new Schema({
    routeName: String,
    name: String,
    model: String,
    cant: Number,
    description: String,
    locker: Number,
    available: Boolean,
    datasheet: String
});

module.exports = mongoose.model('materials', materialSchema);