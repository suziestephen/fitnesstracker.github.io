const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    type: String,
    name: String,
    duration: String,
    distance: String,
    weight: String,
    reps: String,
    set: String,
});

const Excercise = mongoose.model("Exercise", excerciseSchema);

module.exports = Excercise;