// userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/restaurants', UserController.getRestaurants);
router.post('/orders', UserController.placeOrder);
router.get('/orders/:id', UserController.getOrderDetails);
router.post('/ratings', UserController.leaveRating);

module.exports = router;
