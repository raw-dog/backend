const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const User = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true },
  password: { type: String, required: true },
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
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", User);
