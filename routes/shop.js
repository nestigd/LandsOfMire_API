const express = require("express");
const router = express.Router();

const Item = require('../models/itemModel')

// todo: get item catalog
router.get("/", (req, res) => {
  res.json({ mssg: "test successful" });
});

// todo: create an item
router.post("/", async (req,res) => {

  const{title, category, power, limited} = req.body;
  
  try {
    const newItem = await Item.create({title, category, power, limited});
    res.status(200).json(newItem)

  } catch (error) {
    res.status(500).json({error : error.message})
  }

})

module.exports = router;
