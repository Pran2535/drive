const express = require("express");
const userRouter = require("./routes/user.routes");
const app = express();

// app.get("/", (req, res) => {
//   res.render("index");
// }); toh hum user routes ko yaha nahi banate hai i mean ki hum userroutes ko banate hai ek alag file me and then hum us file me jakar ke
// use karte hai i mean
// ham jab bina middleware ke kaam karte hai toh hume console pe jo bhi data milta hai woh undefined ho jata hai and then
// what we do hum middleware ka use karte hai
// now
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// in  app.js we use the functions like app.use and in that app.use function what we do is
// basically we pass a route which will be '/user',userRouter)
app.use("/user", userRouter); // so basically hamne app.use function  me user route pass kiya and then userRouter function ko pass kar do so basically
// to get the routes we are created in the user routes we will use the the routes as '/user/route' aise route pass kiya jaiega
app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
