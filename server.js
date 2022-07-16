const express = require('express')
const app = express()

// set the port so it works on heroku
const PORT = process.env.PORT || 3000;

//  create const for routes
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")

// required for middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// display files that are static
app.use(express.static("public"))

// routes using the const path
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });