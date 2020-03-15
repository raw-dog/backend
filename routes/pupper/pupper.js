// import libs/other
const express = require("express"),
  mongoose = require("mongoose");

// import user model and auth helpers
const User = mongoose.model("User");
const { saltAndHashPw, generateToken } = require("../../helpers/auth");

// set up router
const router = express.Router();

// create new pupper
router.post("/new", async (req, res) => {
  // pull props off of request
});

module.exports = router;
