const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true, 
  },
  model: {
    type: String,
    required: true, 
  },
  year: {
    type: Number,
    required: true, 
  },
  registrationNumber: {
    type: String,
    required: true, 
  },
  transmission: {
    type: String,
    enum: ["Automatic", "Manual"],
    required: true,
  },
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
    required: true, 
  },
  pricePerDay: {
    type: Number,
    required: true, 
  },
  seats: {
    type: Number,
    required: true, 
  },
  available: {
    type: Boolean,
    default: true, 
  },
  mileage: {
    type: Number,
    required: true, 
  },
  location: {
    type: String,
    required: true, 
  },
  features: {
    type: [String], 
  },
  images: {
    type: [String], 
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Car", carSchema);
