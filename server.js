//======================================================
// Dependencies
//======================================================

const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("gbooks/build"));
}

//=====================================================
// Routes
//=====================================================

app.use("/api", apiRoutes);

app.use((req, res, next) => {
    res.send("Welcome to Express");
});

//=====================================================
// Connect to the Mongo DB
//=====================================================

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:SyaTqxPgQUdY$#8@ds339458.mlab.com:39458/heroku_bjz8p88c", { useNewUrlParser: true });
// PRODUCTION: mongodb://user:SyaTqxPgQUdY$#8@ds339458.mlab.com:39458/heroku_bjz8p88c
// DEV: mongodb://localhost/googlebooks

//=====================================================
// Start the server
//=====================================================

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
