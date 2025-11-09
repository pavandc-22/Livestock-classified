// backend/models/Livestock.js
const mongoose = require("mongoose");

const LivestockSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    age: { type: Number },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    description: { type: String, default: "" },
    contactName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactWhatsApp: { type: String },
    imageBase64: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Livestock", LivestockSchema);
