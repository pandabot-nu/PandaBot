const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
  guildId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  coins: {
    type: Number,
    default: 1000,
    required: true,
  }

})

module.exports = mongoose.model('profileModel', profileSchema)
