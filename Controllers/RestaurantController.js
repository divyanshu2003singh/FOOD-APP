const Restaurant = require('../models/Restaurant');
const Order = require('../models/Order');

exports.updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { menu } = req.body;

        await Restaurant.findByIdAndUpdate(id, { menu: menu });

        res.status(200).json({ message: 'Menu updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        await Restaurant.findByIdAndUpdate(id, { online: status });

        res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.acceptRejectOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        await Order.findByIdAndUpdate(id, { status: status });

        res.status(200).json({ message: 'Order status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addItemToMenu = async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const { name, price } = req.body;

        // Find the restaurant by ID
        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Add new item to the menu
        restaurant.menu.push({ name, price });
        await restaurant.save();

        res.status(201).json({ message: 'Item added to menu successfully', restaurant });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getMenuItems = async (req, res) => {
    try {
        const restaurantId = req.params.id;

        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        const menuItems = restaurant.menu;
 
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};