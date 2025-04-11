const { createOrder } = require("../controllers/orderController");

const express = require('express');
const router = express.Router();

router.route('/orders').post(createOrder);

module.exports = router;
