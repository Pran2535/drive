// toh hum normally app.js me routes sare bana sakte the but hame dikakt ye aati ki hum waha pe kafi bulki ho jata
// toh hamne routes naam ka ek folder banaiya hai jisme ki
// hum routes create karenge i mean
// is routes folder me hum  user.routes.js naam ka use karte hue routes create kar rahe honge

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
// ab express.Router method ye hai ki hame express.router method ki madad se ham router create kar lete hai and then hum set up bhi kar lete hai

// ab hum router ki madad se routes banate hai
// so ek testing ka route maiin bana rha hu
// now
router.get("/test", (req, res) => {
  res.render("index");
});
router.post(
  "/register",
  body("email").trim.isEmail(),
  body("password").trim().isLength({ min: 5 }),
  (req, res) => {
    console.log(req.body);
    res.send("user registered");
  }
);
// jo bhi route banaiya hai hamne use hum use karenge i mean routes me
// toh use karne ke liye module.exports function se hum use export kar lenge and
// then hum use require method se app.js me require kar lenge

module.exports = router;
