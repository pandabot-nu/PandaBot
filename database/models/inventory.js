const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
    guildId: { type: String, required: true},
    userId: { type: String, required: true, unique: true },
    inventory: { type: Object }
});

const inventoryModel = module.exports = mongoose.model('inventory', inventorySchema);
