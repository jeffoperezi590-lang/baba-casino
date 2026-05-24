const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,       // Faltu spaces khatam karega
    lowercase: true   // Auto choti abc (lowercase) mein save karega
  },

  password: {
    type: String,
    required: true
  },

  balance: {
    type: Number,
    default: 1000
  },

  level: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model("User", userSchema)