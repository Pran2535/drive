// Importing necessary modules for routing and validation
const express = require("express");
const router = express.Router(); // Creating an instance of the router
const { body, validationResult } = require("express-validator"); // Importing express-validator for validation

// Example test route to check if the routing is working correctly
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
  (req, res) => {
    // Getting validation errors if any exist
    const errors = validationResult(req);

    // If errors exist, send them with a 400 status code
    if (!errors.isEmpty()) {
      return res.status(400).send("invalid data");
    }

    // Logging the request body for debugging purposes
    console.log(req.body);

    // Sending a success message to indicate the user has been registered
    res.send("user registered");
  }
);

// Exporting the router so it can be used in app.js
module.exports = router;
