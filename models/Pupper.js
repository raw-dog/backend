let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Pupper = new Schema({
    name: String,
    healthInfo: {
        age: Number,
        weights: [{
            weight: Number,
            date: Date
        }]
    },
    assignedMeals: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meal"
        },
        name: String
    }],
    parent: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        email: String,
        firstName: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pupper", Pupper);