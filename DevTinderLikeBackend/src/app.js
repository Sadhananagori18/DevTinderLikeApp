const express = require("express")
const app = express()

//order is very important in route.

// app.use("/hello", (req, res) => {
//   //Anything will start with "/hello" this will be matched. ex - /hello/jshfd/sjf etc
//   res.send("Hello abcd page using express server")
// })
// app.use("/test", (req, res) => {
//   //Anything will start with "/test" this will be matched. ex - /test/jshfd/sjf etc
//   res.send("Hello test page using express server")
// })
// app.use("/", (req, res) => {
//   // if any route that matches this and start with this "/", route will execute this callback. Anything will start with "/" this will be matched.
//   res.send("Hello express server")
// })

//will not use app.use()

app.get("/test", (req, res) => {
  // get Data from db
  res.send({ firstname: "honey", lastname: "bunny" })
})

app.post("/user", (req, res) => {
  // Saving Data in db
  res.send("Saving Data in database successfully")
})

app.delete("/deleteuser", (req, res) => {
  res.send("Deleted user successfully")
})

app.listen(4000, () => {
  console.log("Server is running on port 4000")
})
