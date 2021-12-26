const mongoose = require("mongoose");

const trasactionSchema = new mongoose.Schema({
  text: {
    type: "String",
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: "Number",
    required: [true, "Please add some amount(positive or negative)"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const DATA = mongoose.model("Transactions", trasactionSchema);

module.exports = DATA;
