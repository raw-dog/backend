const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    firstName: String,
    lastName: String,
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    shippingAddress: {
        street: String,
        streetLine2: String,
        city: String,
        state: String,
        zip: Number
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    stripeCustomerId: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("User", User);