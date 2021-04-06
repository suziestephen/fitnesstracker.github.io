const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type:  {
            type: String,
            trim: true,
            required: "Enter your completed exercise"
    },

    name: {
        type: String,
        trim: true,
        required: "Enter your exercise type"
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

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;