// import libs/other
const express = require("express"),
  mongoose = require("mongoose");

// import user model and auth helpers
const User = mongoose.model("User");
const { saltAndHashPw } = require("../../helpers/auth");

// set up router
const router = express.Router();

// create new user
router.post("/new", async (req, res) => {
  // pull props off of request
  const { email, password } = req.body;

  // create and save the user
  try {
    // salt and hash pw
    const hash = saltAndHashPw(password);

    // create a user in db
    const userCreated = await User.create({ email, hash });

    // TODO: generate access and refresh tokens and return them in response

    // send response
    res.status(200).send(userCreated);
  } catch (err) {
    const responseBody = {
      status: 0,
      message: "There was an error creating a user given your information.",
      err
    };
    res.status(400).send(responseBody);
  }
});

// TODO: user dashboard
router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if (err) {
      req.flash("error", "Something went wrong...");
      return res.redirect("back");
    }
  });
});

module.exports = router;
