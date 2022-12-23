require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const shopRoutes = require("./routes/shop");

// APP
const app = express();

// MIDDLEWARE
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path + req.method);
  next();
});

//ROUTES
app.use("/api/shop", shopRoutes);

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
