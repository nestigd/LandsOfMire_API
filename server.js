const express = require("express");
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

app.listen(4000, () => {
  console.log("listening on port: 4000");
});
