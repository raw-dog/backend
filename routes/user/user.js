// import libs/other
const express = require("express"),
    mongoose = require("mongoose");

// import user model, auth helpers, middleware
const User = require("../../models/User");
const {
    saltAndHashPw,
    generateToken
} = require("../../helpers/auth");

const {
    authorizeUser
} = require("../../middleware/auth");
// set up router
const router = express.Router();

// create new user
router.post("/new", async (req, res) => {
    // pull props off of request
    const {
        email,
        password,
        isAdmin
    } = req.body;

    // create and save the user
    try {
        // salt and hash pw
        const hash = saltAndHashPw(password);

        console.log(hash);

        // create a user in db
        if (isAdmin) {
            var userCreated = await User.create({
                email,
                hash,
                isAdmin
            });
        } else {
            var userCreated = await User.create({
                email,
                hash
            });
        }

        console.log(userCreated);

        // generate tokens and send response
        const refreshToken = generateToken(email, "refresh");
        const accessToken = generateToken(email, "access");
        res.status(200).send({
            success: 1,
            refreshToken,
            accessToken
        });
    } catch (err) {
        const responseBody = {
            status: 0,
            message: "There was an error creating a user given your information.",
            err
        };
        res.status(400).send(responseBody);
    }
});

// user dashboard
router.post("/", authorizeUser, async (req, res) => {
    const {
        email
    } = req.body;
    const user = await User.findOne({
        email
    });
    res.status(200).send({
        success: 1,
        user
    });
});

module.exports = router;