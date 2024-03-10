const express = require('express');
const router = express.Router();
const RestaurantController = require('../controllers/RestaurantController');

router.put('/menu/:id', RestaurantController.updateMenu);
router.put('/status/:id', RestaurantController.updateStatus);
router.post('/orders/:id', RestaurantController.acceptRejectOrder);
router.put('/menu/:id/add-item', RestaurantController.addItemToMenu);
router.get('/menu/:id/items', RestaurantController.getMenuItems);

module.exports = router;
