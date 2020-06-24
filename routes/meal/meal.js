// import libs/other
const express = require("express"),
    {
        stripe,
        stripeStatementDescriptor
    } = require("../../config/stripeConfig.js");

// import user model, middleware
const Meal = require("../../models/Meal"),
    {
        authorizeUser,
        determineIfAdmin
    } = require("../../middleware/auth");

// set up router
const router = express.Router();

// create a meal
router.post("/new", authorizeUser, determineIfAdmin, async (req, res) => {
    const {
        name,
        description,
        basePricePerLb,
        ingredients
    } = req.body;

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
            basePricePerLb,
            ingredients
        });

        // return a success message
        if (savedMeal) res.status(200).send({
            success: 1,
            savedMeal
        });
    } catch (err) {
        const responseBody = {
            status: 0,
            message: "There was an error creating this product.",
            err
        };
        res.status(500).send(responseBody);
    }
});

// TODO: edit a meal

// TODO: delete a meal

// TODO: read a meal

// TODO: read all meals

module.exports = router;