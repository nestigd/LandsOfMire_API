const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: [{ type: String }],
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    rarity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Item", itemSchema);
