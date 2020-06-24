// import libs/other
const express = require("express");

// import user model, middleware
const Pupper = require("../../models/Pupper"),
    {
        authorizeUser
    } = require("../../middleware/auth"),
    {
        determineDailyFood
    } = require("../../helpers/pupper");

// set up router
const router = express.Router();

// create new pupper
router.post("/new", authorizeUser, async (req, res) => {
    // pull props off of request
    const {
        name,
        healthInfo,
        assignedMeals
    } = req.body;

    try {
        // use healthInfo to determine daily food in lbs
        const dailyFoodInOz = determineDailyFood(healthInfo);

        // save to db
        const savedPupper = await Pupper.create({
            name,
            healthInfo,
            assignedMeals,
            dailyFoodInOz
        });

        // return a success message
        if (savedPupper) res.status(200).send({
            success: 1,
            savedPupper
        });
    } catch (err) {
        const responseBody = {
            status: 0,
            message: "There was an error creating this pupper.",
            err
        };
        res.status(500).send(responseBody);
    }
});

// TODO: read a pupper

// TODO: edit a pupper

// TODO: delete a pupper

module.exports = router;