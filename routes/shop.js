// imports
const requireAuth = require("../middleware/requireAuth");
const express = require("express");
const router = express.Router();

// models
const Item = require("../models/itemModel");

// this endpoint provides all standard items for sale
router.get("/items", (req, res) => {
  // TODO: integration with database
  res.status(200).json({
    items: [
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
      },
    ],
  });
});

// this endpoint provides all standard items for sale
router.get("/onsale", (req, res) => {
  // TODO: integration with database
  res.status(200).json({
    items: [
      {
        title: "Iron sword",
        fullPrice: 12,
        price: 8,
        toExpiry: 5,
      },
      {
        title: "Black steel dagger",
        fullPrice: 26,
        price: 18,
        toExpiry: 2,
      },
      {
        title: "Unholy whip",
        fullPrice: 40,
        price: 32,
        toExpiry: 3,
      },
    ],
  });
});

router.use(requireAuth);
// require auth only for the routes below

router.post("/", async (req, res) => {
  // TODO: only allow admin level users to create new items

  const { title, category, power, rarity } = req.body;

  try {
    const newItem = await Item.create({ title, category, power, rarity });
    res.status(200).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
