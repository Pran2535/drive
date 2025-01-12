// toh hum normally app.js me routes sare bana sakte the but hame dikakt ye aati ki hum waha pe kafi bulki ho jata
// toh hamne routes naam ka ek folder banaiya hai jisme ki
// hum routes create karenge i mean
// is routes folder me hum  user.routes.js naam ka use karte hue routes create kar rahe honge

const express = require("express");
const router = express.Router();
// ab express.router method ye hai ki hame express.router method ki madad se ham router create kar lete hai and then hum set up bhi kar lete hai

// ab hum router ki madad se routes banate hai
// so ek testing ka route maiin bana rha hu
// now
router.get("/test", (req, res) => {
  res.send("This is test route");
});
// jo bhi route banaiya hai hamne use hum use karenge i mean routes me
// toh use karne ke liye module.exports function se hum use export kar lenge and
// then hum use require method se app.js me require kar lenge

module.exports = router;
