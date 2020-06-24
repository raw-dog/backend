let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Pupper = new Schema({
    name: String,
    healthInfo: {
        age: Number,
        weight: Number
    },
    dailyFoodInOz: Number,
    assignedMeals: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meal"
        }
    }],
    parent: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pupper", Pupper);