// import libs/other
const express = require("express"),
  mongoose = require("mongoose"),
  {
    stripe,
    stripeStatementDescriptor
  } = require("../../config/stripeConfig.js");

// import user model, middleware
const Meal = require("../../models/Meal");
const { authorizeUser, determineIfAdmin } = require("../../middleware/auth");

// set up router
const router = express.Router();

// create a meal in our db and in stripe
router.post("/new", authorizeUser, determineIfAdmin, async (req, res) => {
  const { name, description, basePricePerLb } = req.body;

  try {
    // create the product in stripe
    const mealProduct = await stripe.products.create({
      name,
      description,
      statement_descriptor: stripeStatementDescriptor
    });

    // save to db
    const savedMeal = await Meal.create({
      name,
      description,
      stripeProductId: mealProduct.id,
      basePricePerLb
    });

    // return a success message
    if (savedMeal) res.status(200).send({ status: 1, savedMeal });
  } catch (err) {
    const responseBody = {
      status: 0,
      message: "There was an error creating this product",
      err
    };
    res.status(500).send(responseBody);
  }
});

// edit a meal

// delete a meal

// read a meal

// read all meals

module.exports = router;
