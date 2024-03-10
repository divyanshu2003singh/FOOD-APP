// Restaurant.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const restaurantSchema = new mongoose.Schema({
    name: String,
    online: Boolean,
    menu: [menuItemSchema] // Define menu as an array of menu item schemas
   
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
