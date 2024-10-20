const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['client', 'agency'], 
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model("User", userSchema);
