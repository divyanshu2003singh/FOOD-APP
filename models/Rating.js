const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    deliveryAgent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryAgent',
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    
});
module.exports = mongoose.model('Rating', ratingSchema);
