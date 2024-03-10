const mongoose = require('mongoose');

const deliveryAgentSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('DeliveryAgent', deliveryAgentSchema);