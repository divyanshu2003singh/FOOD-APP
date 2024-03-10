const express = require('express');
const router = express.Router();
const DeliveryController = require('../controllers/DeliveryController');

router.put('/status/:id', DeliveryController.updateDeliveryStatus);

module.exports = router;