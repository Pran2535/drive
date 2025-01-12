// Importing necessary modules for routing and validation
const express = require("express");
const router = express.Router(); // Creating an instance of the router
const { body, validationResult } = require("express-validator"); // Importing express-validator for validation
// hame usermodel ko require yaha karna hai taki jab hum route pe post request karenge tab
// hame ye user banta hua dikh jai and all set
const userModel = require("../models/user.model");
// Example test route to check if the
// routing is working correctly
// ab hum bcrypt ko require karte hai taki hamara jobhi usermodel hai usme user create hota hua dikhe hame and then we will make the changes
const bcrypt = require("bcrypt");
router.get("/test", (req, res) => {
  // This renders the "index" page or sends a response to the client
  res.render("index");
});

// Registration route with validation
router.post(
  "/register", // Path for the registration endpoint
  body("email").trim().isEmail().withMessage("Invalid email format"), // Email validation: ensures it's a valid email format
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 characters long"), // Password validation: ensures it's at least 5 characters
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"), // Username validation: ensures it's at least 3 characters long
  async (req, res) => {
    // Getting validation errors if any exist
    const errors = validationResult(req);

    // If errors exist, send them with a 400 status code
    if (!errors.isEmpty()) {
      return res.status(400).send("invalid data");
    }

    const { email, username, password } = req.body;
    const newUser = await userModel.create({
      email,
      username,
      password,
    });
    res.json(newUser);
  }
);
// previously hum jo password use kar rhe the that was in plain text and in plain text we do not store passwords
// we use to store password in hashed value because with hashing our passwords become strong
// to hash the password we will use the bcrypt library to hash the value
// Exporting the router so it can be used in app.js
module.exports = router;
