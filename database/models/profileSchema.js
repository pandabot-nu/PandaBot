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
  },
  cooldowns: {
		WORK: Number,
		ROB: Number,
		ROLL: Number,
		TRANSFER: Number,
		WEEKLY: Number,
		BEG: Number,
		COLLECT: Number,
		CRIME: Number,
		DALILY: Number,
		GAMBLE: Number,
		MONTHLY: Number
	}
})

module.exports = mongoose.model('profileModel', profileSchema)