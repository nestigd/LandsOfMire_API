const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "test successful" });
});

router.get("/onsale", (req, res) => {
  // TODO: Items on sale need to be taken from the database
  res.json({
    item1: {
      title: "Iron sword",
      fullPrice: 12,
      price: 8,
      toExpiry: 5,
    },
    item2: {
      title: "Black steel hammer",
      fullPrice: 24,
      price: 16,
      toExpiry: 1,
    },
    item3: {
      title: "Black steel hammer",
      fullPrice: 24,
      price: 16,
      toExpiry: 1,
    },
  });
});

module.exports = router;
