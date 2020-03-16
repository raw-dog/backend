// import libs/other
const express = require("express"),
  mongoose = require("mongoose");

// import user model, middleware
const Meal = require("../../models/Meal");
const { authorizeUser, determineIfAdmin } = require("../../middleware/auth");

// set up router
const router = express.Router();

// create a meal in our db and in stripe
router.post("/new", authorizeUser, determineIfAdmin, (req, res) => {
  const { email } = req.body;
  console.log(email);
});

// edit a meal

// delete a meal

// read a meal

// read all meals

module.exports = router;
