const express = require("express");
const router = express.Router();

const Item = require("../models/itemModel");

// todo: get item catalog
router.get("/", (req, res) => {
  res.json({ mssg: "test successful" });
});

router.get("/items", (req, res) =>{
  res.json({ 
    items : [
      {
        title: "Iron sword",
        categories: ["weapon", "melee"],
        price: 8,
        rarity: 1,
      },
      {
        title: "Battle axe",
        categories: ["weapon", "melee"],
        price: 12,
        rarity: 2,
      },
      {
        title: "Magic woodstick",
        categories: ["weapon", "magic"],
        price: 6,
        rarity: 1,
      },
      {
        title: "Wyvern cord bow",
        categories: ["weapon", "ranged"],
        price: 450,
        rarity: 10,
      },
      {
        title: "Iron Dagger",
        categories: ["weapon", "melee", "stealth"],
        price: 5,
        rarity: 2,
      }
    ]
  })
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
