require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const shopRoutes = require("./routes/shop");
const userRoutes = require("./routes/user");


// APP
const app = express();

// MIDDLEWARE
//listens for json and attaches json content to the request object
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path + req.method);
  next();
});

//ROUTES
app.use("/api/shop", shopRoutes);
app.use("/api/user", userRoutes);


// db connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to MongoDB and listening on port: 4000");
    });
  })
  .catch((err) => console.log(err));
