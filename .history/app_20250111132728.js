const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
