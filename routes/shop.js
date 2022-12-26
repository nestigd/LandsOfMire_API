const express = require("express");
const router = express.Router();

const Item = require("../models/itemModel");

// todo: get item catalog
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

// todo: create an item
router.post("/", async (req, res) => {
  const { title, category, power, limited } = req.body;

  try {
    const newItem = await Item.create({ title, category, power, limited });
    res.status(200).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
