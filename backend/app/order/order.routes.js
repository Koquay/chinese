const router = require('express').Router();
const OrderController = require('./order.controller');

router.post('/', OrderController.placeOrder);

module.exports = router;