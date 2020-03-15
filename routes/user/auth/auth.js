const express = require("express"),
  router = express.Router(),
  mongoose = require("mongoose"),
  passport = require("passport"),
  User = mongoose.model("User");

// handle user sign up and initial log in
router.post("/register", (req, res) => {
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      req.flash("error", err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, () => {
      req.flash("success", "Welcome to YelpCamp, " + user.username + ".");
      res.redirect("/campgrounds");
    });
  });
});

// user login
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    user = req.user ? req.user : req.session.user;

    if (user) return res.redirect("/" + user._id);
    else return res.redirect("/login");
  }
);

// user forgot password

module.exports = router;
