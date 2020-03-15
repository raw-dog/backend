const express = require("express"),
  router = express.Router(),
  passport = require("passport"),
  mongoose = require("mongoose"),
  User = mongoose.model("User");

// create new user
router.post("/new", async (req, res) => {
  // pull props off of request
  const { email, password } = req.body;

  try {
    const userCreated = await User.register(
      {
        email,
        username: email,
        password
      },
      password
    );
    res.status(200).send(userCreated);
  } catch (err) {
    const responseBody = {
      status: 0,
      message: "There was an error creating a user given your information.",
      err: err
    };
    res.status(400).send(responseBody);
  }
});

// user dashboard
router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if (err) {
      req.flash("error", "Something went wrong...");
      return res.redirect("back");
    }
  });
});

module.exports = router;
