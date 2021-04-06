const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const excerciseSchema = new Schema({
    type:  {
            type: String,
            trim: true,
            required: "Enter your completed exercise"
    },

    name: {
        type: String,
        trim: true,
        required: "Enter your excercise type"
    },
    duration: {
        type: Number,
        required: "Enter workout length"
    },


    distance: {
        type: Number,
    },
    
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    set: {
        type: Number,
    },
});

const Excercise = mongoose.model("Exercise", excerciseSchema);

module.exports = Excercise;