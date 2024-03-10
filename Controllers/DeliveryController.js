const Order = require('../models/Order');

exports.updateDeliveryStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        await Order.findByIdAndUpdate(id, { deliveryStatus: status });

        res.status(200).json({ message: 'Delivery status updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};