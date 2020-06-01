let mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Meal = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    nutritionInfo: {
        protein: [{
            source: String,
            amount: String
        }],
        carbs: [{
            source: String,
            amount: String
        }],
        fat: [{
            source: String,
            amount: String
        }],
        vitamins: [{
            source: String,
            amount: String
        }]
    },
    ingredients: [{
        name: String,
        ozPerLbOfFood: Number,
        pricePerLbOfFood: Number
    }],
    description: String,
    basePricePerLb: Number,
    stripeProductId: String
});

module.exports = mongoose.model("Meal", Meal);