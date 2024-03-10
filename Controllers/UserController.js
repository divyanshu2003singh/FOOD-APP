const Restaurant = require('../models/Restaurant');
const Order = require('../models/Order');
const Rating = require('../models/Rating');

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ online: true });
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.placeOrder = async (req, res) => {
    try {
        const { restaurantId, customerId, items } = req.body;

        const order = new Order({
            restaurant: restaurantId,
            customer: customerId,
            items: items,
        });
        await order.save();

        res.status(201).json(order); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.leaveRating = async (req, res) => {
    try {
        const { orderId, deliveryAgentId, rating } = req.body;

        const newRating = new Rating({
            order: orderId,
            deliveryAgent: deliveryAgentId,
            rating: rating,
        });
        await newRating.save();

        res.status(201).json(newRating); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};