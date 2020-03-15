const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  User = mongoose.model("User");

// create new user
router.post("/new", async (req, res) => {
  // pull props off of request
  const { email, password } = req.body;

  try {
    // create user and send response
    User.init();
    const userCreated = await User.init().then(() =>
      User.create({ email, password })
    );
    res.send(userCreated);
  } catch (err) {
    const responseBody = {
      status: 0,
      message: "There was an error creating a user given your information.",
      err: err
    };
    res.send(responseBody);
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
